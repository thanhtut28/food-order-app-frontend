import { useAccount } from "@/lib/context/account-context";
import CartAction from "../components/cart-action";
import CartItems from "../components/cart-items";
import { useEffect } from "react";
import Cart from "../components/cart";

const CartTemplate: React.FC = () => {
   const { checkAuth } = useAccount();

   useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   return (
      <div className="mx-auto max-w-screen-md px-2 sm:px-6">
         <Cart />
      </div>
   );
};

export default CartTemplate;
