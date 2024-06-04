import React, { createContext, useContext, useEffect, useState } from "react";
import { IS_SERVER } from "../constants/global";
import {
   GetCartDocument,
   useCreateNewCartMutation,
   useGetCartItemsLazyQuery,
   useGetCartQuery,
} from "../generated/graphql";
import { useAccount } from "./account-context";

interface CartContextInterface {
   cartItemsQty: number;
   cartId?: number;
}

const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
   const [createNewCart] = useCreateNewCartMutation({
      refetchQueries: [GetCartDocument],
      onError: error => {
         console.error("Error creating cart:", error);
      },
   });

   const { me } = useAccount();
   const { data: cartData, loading: fetchingCart } = useGetCartQuery({
      fetchPolicy: "network-only",
   });

   useEffect(() => {
      //! still needs to fix for later
      // the cartQuery is fetched after meQuery which makes tempoarily null
      // so the null value trigger the create cart function which is already created.
      const ensureCart = async () => {
         if (!cartData?.getCart?.id && !fetchingCart && me) {
            try {
               await createNewCart();
               console.log("Cart created successfully.");
            } catch (error) {
               console.error("Failed to create cart:", error);
            }
         }
      };

      if (!IS_SERVER && me) {
         ensureCart();
      }
   }, [createNewCart, fetchingCart, me, cartData]);

   const cartContext = {
      cartItemsQty: cartData?.getCart?.cartItemsCount || 0,
      cartId: cartData?.getCart?.id,
   };

   return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export const useCart = () => {
   const context = useContext(CartContext);

   if (context === null) {
      throw new Error("useCart must be used within a CartProvider");
   }
   return context;
};
