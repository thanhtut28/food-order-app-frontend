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
   const [creatingCart, setCreatingCart] = useState(false);
   const [hasFetched, setHasFetched] = useState(false);

   const [createNewCart] = useCreateNewCartMutation({
      refetchQueries: [GetCartDocument],
      onError: () => {},
   });
   const { me } = useAccount();
   const { data: cartData } = useGetCartQuery({
      fetchPolicy: "network-only",
   });

   const [getCartItems, { data: cartItemsData, loading: fetchingCartItems }] =
      useGetCartItemsLazyQuery();

   console.log(creatingCart, me, hasFetched, cartData?.getCart?.id);

   useEffect(() => {
      if (cartData?.getCart?.id) {
         getCartItems({ variables: { input: { cartId: cartData.getCart.id } } });
      }
   }, [cartData?.getCart?.id, getCartItems]);

   useEffect(() => {
      // still needs to fix this component
      if (cartData && !fetchingCartItems) {
         setHasFetched(true); // Update state when cart data is fetched
         if (!cartData.getCart) {
            setCreatingCart(true); // Set creatingCart to true if no cart data is found
         }
      }
   }, [cartData, fetchingCartItems]);

   useEffect(() => {
      const ensureCart = async () => {
         await createNewCart();
      };

      // Ensure that cart creation is triggered only when necessary conditions are met
      if (!IS_SERVER && !creatingCart && me && hasFetched && !cartData?.getCart?.id) {
         console.log("cart created");
         ensureCart();
      }
   }, [createNewCart, creatingCart, me, hasFetched, cartData]);

   const cartContext = {
      cartItemsQty: cartItemsData?.getCartItems?.length || 0,
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
