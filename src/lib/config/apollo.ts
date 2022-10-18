import { ErrorMessage } from "@/lib/constants/message";
import {
   createHttpLink,
   InMemoryCache,
   ApolloClient,
   from,
   NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { IncomingMessage, ServerResponse } from "http";
import Router from "next/router";
import { useMemo } from "react";
import { toast } from "react-toastify";

export type ResolverContext = {
   req?: IncomingMessage;
   res?: ServerResponse;
};

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = createHttpLink({
   uri: `${process.env.NEXT_PUBLIC_SERVER}/graphql`,
   credentials: "include",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
         console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
         if (message.includes(ErrorMessage.NOT_AUTHENTICATED)) {
            Router.replace("/account/login?refetch=true");
         }
         toast.error(`[Server Error]: ${message}`);
      });
   }

   if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      toast.error(ErrorMessage.NETWORK_ERROR);
   }
});

const cache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            getMenuItemsByCategory: {
               keyArgs: ["type"],

               // While args.cursor may still be important for requesting
               // a given page, it no longer has any role to play in the
               // merge function.
               merge(existing, incoming, { readField }: any) {
                  const merged = { ...existing };
                  incoming.forEach((item: any) => {
                     merged[readField("id", item)] = item;
                  });
                  return merged;
               },

               // Return all items stored so far, to avoid ambiguities
               // about the order of the items.
               read(existing) {
                  return existing && Object.values(existing);
               },
            },
         },
      },
   },
});

// function offsetFromCursor(items: any, cursor: number, readField: any) {
//    // Search from the back of the list because the cursor we're
//    // looking for is typically the ID of the last item.
//    for (let i = items.length - 1; i >= 0; --i) {
//       const item = items[i];
//       // Using readField works for both non-normalized objects
//       // (returning item.id) and normalized references (returning
//       // the id field from the referenced entity object), so it's
//       // a good idea to use readField when you're not sure what
//       // kind of elements you're dealing with.
//       if (readField("id", item) === cursor) {
//          // Add one because the cursor identifies the item just
//          // before the first item in the page we care about.
//          return i + 1;
//       }
//    }
//    // Report that the cursor could not be found.
//    return -1;
// }

function createApolloClient(ctx?: ResolverContext) {
   return new ApolloClient({
      cache,
      link: from([errorLink, httpLink]),
   });
}

export function initializeApollo(initialState: any = null, ctx?: ResolverContext) {
   const _apolloClient: ApolloClient<NormalizedCacheObject> =
      apolloClient ?? createApolloClient(ctx);

   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
   // gets hydrated here
   if (initialState) {
      // Get existing cache, loaded during client side data fetching
      const existingCache = _apolloClient.extract();
      // Restore the cache using the data passed from getStaticProps/getServerSideProps
      // combined with the existing cached data
      _apolloClient.cache.restore({ ...existingCache, ...initialState });
   }
   // For SSG and SSR always create a new Apollo Client
   if (typeof window === "undefined") return _apolloClient;
   // Create the Apollo Client once in the client
   if (!apolloClient) apolloClient = _apolloClient;
   return _apolloClient;
}

export function useApollo<T>(initialState: T) {
   const store = useMemo(() => initializeApollo(initialState), [initialState]);
   return store;
}
