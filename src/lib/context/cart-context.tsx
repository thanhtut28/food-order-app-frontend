import { createContext, useEffect } from "react";
import { IS_SERVER } from "../constants/global";

interface CartContextInterface {}

const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = () => {
   useEffect(() => {}, []);
};
