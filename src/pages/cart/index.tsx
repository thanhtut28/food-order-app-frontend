import CartTemplate from "@/modules/cart/templates/cart-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";

const Cart: NextPageWithLayout = () => {
   return <CartTemplate />;
};

Cart.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default Cart;
