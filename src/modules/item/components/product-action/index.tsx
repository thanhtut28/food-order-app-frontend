import { useAccount } from "@/lib/context/account-context";
import { useCart } from "@/lib/context/cart-context";
import { GetCartDocument, useAddToCartMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";

interface Props {
   price: string;
   itemId: number;
   qty: number;
}

const ProductAction: React.FC<Props> = ({ price, itemId, qty }) => {
   const { cartId } = useCart();
   const [addToCart, { loading: addingToCart }] = useAddToCartMutation({
      refetchQueries: [GetCartDocument],
      onCompleted: () => {},
      onError: () => {},
   });

   const handleAddToCart = async () => {
      if (cartId) {
         await addToCart({ variables: { input: { cartId, menuItemId: itemId, qty } } });
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
               Checkout
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
