import CartItems from "../components/cart-items";

const CartTemplate: React.FC = () => {
   return (
      <div className="mx-auto max-w-screen-md py-10 px-2">
         <CartItems />
      </div>
   );
};

export default CartTemplate;
