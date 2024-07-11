import { GetCartItemsQuery } from "@/lib/generated/graphql";
import Title from "@/modules/common/components/title";
import CartItem from "../cart-item";

interface CartItemsProps {
   cartItems: GetCartItemsQuery["getCartItems"];
   intersectionRef: (node?: Element | null) => void;
}

const CartItems: React.FC<CartItemsProps> = ({ cartItems, intersectionRef }) => {
   return (
      <section>
         <Title>Order Summary</Title>
         {cartItems.length > 0 ? (
            <>
               <div className="grid flex-col gap-4">
                  {cartItems.map(item => (
                     <CartItem key={item.menuItemId} item={item} />
                  ))}
               </div>

               {/* Intersection Observer for fetch more  */}
               <div ref={intersectionRef} className="pt-6" />
            </>
         ) : (
            <h4 className="text-sm text-gray-600">The cart is empty.</h4>
         )}
      </section>
   );
};

export default CartItems;
