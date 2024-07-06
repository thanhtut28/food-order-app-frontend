import { ErrorMessage, SuccessMessage } from "@/lib/constants/message";
import { useAccount } from "@/lib/context/account-context";
import { useCart } from "@/lib/context/cart-context";
import {
   CartItemDetailsFragmentDoc,
   GetCartDocument,
   useAddToCartMutation,
} from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import { Reference } from "@apollo/client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface Props {
   price: string;
   itemId: number;
   quantity: number;
}

const ProductAction: React.FC<Props> = ({ price, itemId, quantity }) => {
   const { cartId } = useCart();
   const { me } = useAccount();
   const router = useRouter();
   const [addToCart, { loading: addingToCart }] = useAddToCartMutation({
      refetchQueries: [GetCartDocument],
      onCompleted: () => {
         toast.success(SuccessMessage.ADDED_TO_CART);
      },
      onError: () => {},
      update: (cache, { data }) => {
         cache.modify({
            fields: {
               getCartItems(existingCartItemRefs = [], { readField }) {
                  const newItemRef = cache.writeFragment({
                     data: data?.addToCart,
                     fragment: CartItemDetailsFragmentDoc,
                  });

                  const isItemAlreadyExistedInCart = existingCartItemRefs.some(
                     (itemRef: Reference) =>
                        data?.addToCart?.menuItemId === readField("menuItemId", itemRef),
                  );

                  //* This statement works in case the cart items is already queried and cached
                  if (!isItemAlreadyExistedInCart) {
                     return [newItemRef, ...existingCartItemRefs];
                  }

                  return existingCartItemRefs;
               },
            },
         });
      },
   });

   const handleAddToCart = async () => {
      if (!me || !cartId) {
         toast.error(ErrorMessage.NOT_AUTHORIZED);
         router.push("/account/login");
         return;
      }

      if (cartId) {
         await addToCart({ variables: { input: { cartId, menuItemId: itemId, quantity } } });
      }
   };

   return (
      <div className="flex flex-1 items-end pt-10">
         <div className="flex flex-1 items-center gap-4 lg:gap-8">
            <Button
               className="rounded-2xl py-4 text-lg capitalize"
               onClick={handleAddToCart}
               isLoading={addingToCart}
            >
               Add To Cart
            </Button>
            <p className="flex items-center px-2 text-2xl font-bold text-gray-800">
               <span className="pr-1 text-sm text-primary-600">{`$`}</span>
               {`${price}`}
            </p>
         </div>
      </div>
   );
};

export default ProductAction;
