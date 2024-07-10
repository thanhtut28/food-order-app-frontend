import { useCart } from "@/lib/context/cart-context";
import cn from "@/lib/utils/classname";
import Button from "@/modules/common/components/button";

const CartAction: React.FC = () => {
   const { total: subtotal, cartItemsQty } = useCart();

   const deliveryFees = 2;

   const total = deliveryFees + subtotal;

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

                  <Button>Place Order</Button>
               </div>
            </section>
         )}
      </>
   );
};

export default CartAction;
