import { useAccount } from "@/lib/context/account-context";
import CartAction from "../components/cart-action";
import CartItems from "../components/cart-items";
import { useEffect } from "react";

const CartTemplate: React.FC = () => {
   const { checkAuth } = useAccount();

   useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   return (
      <div className="mx-auto max-w-screen-md px-2 sm:px-6">
         <CartItems />

         {/* Cart Action only render when cart has at least one item. No need to handle loading UI. */}
         <CartAction />
      </div>
   );
};

export default CartTemplate;
