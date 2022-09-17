import { ErrorMessage } from "@/lib/constants/message";
import { createHttpLink, InMemoryCache, ApolloClient, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";

const httpLink = createHttpLink({
   uri: `${process.env.NEXT_PUBLIC_SERVER}/graphql`,
   credentials: "include",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
         console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
         toast.error(`[Server Error]: ${message}`);
      });
   }

   if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      toast.error(ErrorMessage.NETWORK_ERROR);
   }
});

const cache = new InMemoryCache({});

export const client = new ApolloClient({
   cache,
   link: from([errorLink, httpLink]),
});
