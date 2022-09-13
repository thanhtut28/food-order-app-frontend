import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/config/apollo";
import ErrorToast from "@/components/modal/error-toast";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ApolloProvider client={client}>
         <Component {...pageProps} />
         <ErrorToast />
      </ApolloProvider>
   );
}

export default MyApp;
