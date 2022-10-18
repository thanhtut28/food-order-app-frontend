import React, { createContext, useContext, useEffect } from "react";

interface CartContextInterface {}

const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
   useEffect(() => {}, []);

   return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
   const context = useContext(CartContext);

   if (context === null) {
      throw new Error("useCart must be used within a CartProvider");
   }
   return context;
};
