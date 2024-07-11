import { useCart } from "@/lib/context/cart-context";
import { useGetCartItemsLazyQuery } from "@/lib/generated/graphql";
import { useEffect, useState } from "react";
import CartAction from "../cart-action";
import CartItems from "../cart-items";
import { useInView } from "react-intersection-observer";
import Spinner from "@/modules/common/icons/spinner";

const Cart: React.FC = () => {
   const { ref, inView, entry } = useInView({
      threshold: 0,
   });

   const [hasMore, setHasMore] = useState<boolean>(true);

   const { cartId } = useCart();

   const [getCartItems, { data, loading: fetchingCartItems, fetchMore, error }] =
      useGetCartItemsLazyQuery();

   const cartItems = data?.getCartItems;

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
   }, [cartId, entry?.isIntersecting, fetchMore, hasMore, inView, fetchingCartItems, cartItems]);

   if (fetchingCartItems || error || !cartId) {
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
      <>
         {cartItems && (
            <>
               <CartItems cartItems={cartItems} intersectionRef={ref} />
               {/* Cart Action only render when cart has at least one item. No need to handle loading UI. */}
               <CartAction cartItems={cartItems} cartId={cartId} />
            </>
         )}
      </>
   );
};

export default Cart;
