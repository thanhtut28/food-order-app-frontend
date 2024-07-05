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
import { redirect } from "next/navigation";
import { useMemo } from "react";
import { toast } from "react-toastify";
import cacheConfig from "./apollo-cache-config";

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
            redirect("/account/login?refetch=true");
         }
         toast.error(`[Server Error]: ${message}`);
      });
   }

   if (networkError) {
      console.log(`[Network Error]: ${networkError}`);
      toast.error(ErrorMessage.NETWORK_ERROR);
   }
});

const cache = new InMemoryCache(cacheConfig);

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
