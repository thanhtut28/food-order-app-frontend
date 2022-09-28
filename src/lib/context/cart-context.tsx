import { createContext } from "react";

interface CartContextInterface {}

const CartContext = createContext<CartContextInterface | null>(null);
