import { useCart } from "@/lib/context/cart-context";
import { useGetCartItemsLazyQuery, useGetCartItemsQuery } from "@/lib/generated/graphql";
import Title from "@/modules/common/components/title";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CartItem from "../cart-item";
import Spinner from "@/modules/common/icons/spinner";

const CartItems: React.FC = () => {
   const { ref, inView, entry } = useInView({
      threshold: 0,
   });

   const [hasMore, setHasMore] = useState<boolean>(true);

   const { cartId, total } = useCart();

   const [getCartItems, { data, loading, fetchMore, error }] = useGetCartItemsLazyQuery();

   const cartItems = data?.getCartItems;

   console.log("Total", total);

   useEffect(() => {
      if (cartId) {
         getCartItems({ variables: { input: { cartId } } });
      }
   }, [cartId, getCartItems]);

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (entry?.isIntersecting && inView && hasMore) {
            console.log("fetchmore");
            fetchMore({
               variables: {
                  input: { cartId, cursor: cartItems?.[cartItems?.length - 1].menuItemId },
               },
            }).then(fetchMoreRes => setHasMore(fetchMoreRes.data.getCartItems.length > 0));
         }
      }, 100);
      return () => clearTimeout(timeout);

      // implemented fetchMore with setTimeout
      // to prevent double queries at one intersection.
   }, [cartId, entry?.isIntersecting, fetchMore, hasMore, inView, loading, cartItems]);

   if (loading || error || !cartId) {
      return (
         <div
            className="flex h-full min-h-[640px] w-full items-center justify-center text-gray-800"
            data-testid="loading-container"
         >
            <Spinner size={36} />
         </div>
      );
   }

   return (
      <section>
         <Title>Order Summary</Title>
         {cartItems && cartItems.length > 0 ? (
            <>
               <div className="grid flex-col gap-4">
                  {cartItems.map(item => (
                     <CartItem key={item.menuItemId} item={item} />
                  ))}
               </div>

               {/* Intersection Observer for fetch more  */}
               <div ref={ref} className="pt-6" />
            </>
         ) : (
            <h4 className="text-sm text-gray-600">No items found.</h4>
         )}
      </section>
   );
};

export default CartItems;
