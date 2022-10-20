import React, { createContext, useContext, useEffect } from "react";
import { IS_SERVER } from "../constants/global";
import { GetCartDocument, useCreateNewCartMutation, useGetCartQuery } from "../generated/graphql";
import { useAccount } from "./account-context";

interface CartContextInterface {}

const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
   const [createNewCart] = useCreateNewCartMutation({
      refetchQueries: [GetCartDocument],
      onError: () => {},
   });
   const { me } = useAccount();

   const { data, loading } = useGetCartQuery();

   console.log("cart", data);

   useEffect(() => {
      const ensureCart = async () => {
         await createNewCart();
      };
      // console.log(!IS_SERVER && !data?.getCart?.id && !loading && me);
      // TODO: need to optimize code
      if (!IS_SERVER && !data?.getCart?.id && !loading && me) {
         console.log("created");
         ensureCart();
      }
   }, [createNewCart, data?.getCart?.id, loading, me]);

   return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
   const context = useContext(CartContext);

   if (context === null) {
      throw new Error("useCart must be used within a CartProvider");
   }
   return context;
};
