import { SuccessMessage } from "@/lib/constants/message";
import { useCart } from "@/lib/context/cart-context";
import {
   CartItemsInput,
   GetCartDocument,
   GetCartItemsQuery,
   usePlaceOrderMutation,
} from "@/lib/generated/graphql";
import cn from "@/lib/utils/classname";
import Button from "@/modules/common/components/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CartActionProps {
   cartItems: GetCartItemsQuery["getCartItems"];
   cartId: number;
}

const CartAction: React.FC<CartActionProps> = ({ cartItems, cartId }) => {
   const { push } = useRouter();
   const { total: subtotal, cartItemsQty } = useCart();

   const deliveryFees = 2;

   const total = deliveryFees + subtotal;

   const [placeOrder, { loading: placingOrder }] = usePlaceOrderMutation({
      refetchQueries: [GetCartDocument],
      onCompleted: () => {
         toast.success(SuccessMessage.PLACED_ORDER);
         // push("/");
      },
      onError: () => {},
      update: cache => {
         cache.modify({
            fields: {
               getCartItems(existingCartItemRefs = []) {
                  // To return empty array.
                  return existingCartItemRefs.map(() => ({}));
               },
            },
         });
      },
   });

   const handlePlaceOrder = async () => {
      const cartItemsInput: CartItemsInput[] = cartItems.map(item => ({
         menuItemId: item.menuItemId,
         quantity: item.quantity,
         total: item.total,
      }));

      await placeOrder({ variables: { cartItems: cartItemsInput, total, cartId } });
   };

   return (
      <>
         {cartItemsQty > 0 && (
            <section className={cn("mb-20 rounded-lg bg-white px-2 py-4 pb-8", "sm:mb-0 sm:px-4")}>
               <div className="flex justify-between">
                  <h6 className="capitalize text-gray-700">subtotal</h6>
                  <p className="font-semibold">${subtotal.toFixed(2)}</p>
               </div>

               <div className="flex justify-between">
                  <h6 className="capitalize text-gray-700">delivery fees</h6>
                  <p className="font-semibold">${deliveryFees.toFixed(2)}</p>
               </div>

               <hr className="my-4 hidden w-full sm:block" />
               <div
                  className={cn(
                     "fixed bottom-0 left-0 z-50 w-full bg-white px-4 py-6 shadow-sm",
                     "sm:static sm:p-0",
                  )}
               >
                  <div className="flex justify-between pb-6">
                     <h6 className="text-lg font-semibold capitalize text-gray-900">Total</h6>
                     <p className="text-lg font-bold">${total.toFixed(2)}</p>
                  </div>

                  <Button isLoading={placingOrder} onClick={handlePlaceOrder}>
                     Place Order
                  </Button>
               </div>
            </section>
         )}
      </>
   );
};

export default CartAction;
