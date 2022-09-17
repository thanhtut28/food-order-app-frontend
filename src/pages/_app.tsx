import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/config/apollo";
import Toast from "@/modules/common/components/toast";
import { AccountProvider } from "@/lib/context/account-context";
import { AppPropsWithLayout } from "@/types/global";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const getLayout = Component.getLayout ?? (page => page);
   return (
      <ApolloProvider client={client}>
         <AccountProvider>
            {getLayout(<Component {...pageProps} />)}
            <Toast />
         </AccountProvider>
      </ApolloProvider>
   );
}

export default MyApp;
