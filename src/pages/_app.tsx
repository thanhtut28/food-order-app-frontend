import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/config/apollo";
import Toast from "@/modules/common/components/toast";
import { AccountProvider } from "@/lib/context/account-context";
import { AppPropsWithLayout } from "@/types/global";
import { CartProvider } from "@/lib/context/cart-context";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const apolloClient = useApollo((pageProps as any).initialApolloState);
   const getLayout = Component.getLayout ?? (page => page);
   return (
      <ApolloProvider client={apolloClient}>
         <AccountProvider>
            <CartProvider>
               {getLayout(<Component {...pageProps} />)}
               <Toast />
            </CartProvider>
         </AccountProvider>
      </ApolloProvider>
   );
}

export default MyApp;
