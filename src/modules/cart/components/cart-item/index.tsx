import { SuccessMessage } from "@/lib/constants/message";
import {
   GetCartDocument,
   GetCartItemsQuery,
   useRemoveCartItemMutation,
   useUpdateCartItemMutation,
} from "@/lib/generated/graphql";
import cn from "@/lib/utils/classname";
import Button from "@/modules/common/components/button";
import Check from "@/modules/common/icons/check";
import Edit from "@/modules/common/icons/edit";
import Minus from "@/modules/common/icons/minus-circle";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
   item: GetCartItemsQuery["getCartItems"][0];
}

const CartItem: React.FC<Props> = ({ item: { menuItemId, cartId, quantity, menuItem, total } }) => {
   const [isEditing, setIsEditing] = useState<boolean>(false);
   const [qty, setQty] = useState<number>(quantity);

   const isDrecementBtnDisabled = !(qty > 1);

   const [updateCartItem, { loading: updatingCartItem }] = useUpdateCartItemMutation({
      //* Updating cart items cache is automatically managed by Built-in Apollo cache.
      refetchQueries: [GetCartDocument],
      onCompleted: () => {
         setIsEditing(false);
         toast.success(SuccessMessage.CART_UPDATED);
      },
      onError: () => {},
   });

   const [removeCartItem, { loading: removingCartItem }] = useRemoveCartItemMutation({
      //* A lot of work needed just to update cache for cart items count. Refetching is better approach.
      refetchQueries: [GetCartDocument],
      onCompleted: () => {
         setIsEditing(false);
         toast.success(SuccessMessage.ITEM_REMOVED);
      },
      onError: () => {},
      update: cache => {
         cache.modify({
            fields: {
               getCartItems(existingItems = [], { readField }) {
                  return existingItems.filter(
                     (itemRef: any) => menuItemId !== readField("menuItemId", itemRef),
                  );
               },
            },
         });
      },
   });

   const handleUpdateItem = () => {
      updateCartItem({ variables: { input: { menuItemId, cartId, quantity: qty } } });
   };

   const handleRemoveItem = () => {
      removeCartItem({ variables: { input: { cartId, menuItemId } } });
   };

   const handleEditAction = () => {
      setIsEditing(true);
   };

   const handleIncrementQty = () => {
      setQty(prev => prev + 1);
   };

   const handleDecrementQty = () => {
      if (!isDrecementBtnDisabled) {
         setQty(prev => prev - 1);
      }
   };

   return (
      <div className="flex items-stretch justify-between gap-4 rounded-lg bg-white px-2 py-6">
         {/* <div
            className={cn(
               "flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-xs text-primary-600",
               "sm:text-sm",
               "lg:text-base",
            )}
         >
            <button>{`${item.quantity}x`}</button>
         </div> */}
         <div className={cn("w-14", "sm:w-20")}>
            <div className="w-full">
               <Image
                  width={3}
                  height={2}
                  layout="responsive"
                  alt={`Cover Image for ${menuItem.name}`}
                  className="object-cover"
                  src={menuItem.photo}
                  quality={25}
               />
            </div>
         </div>

         <div className="flex flex-1 flex-col justify-center">
            <h6
               className={cn("pb-2 text-sm font-semibold capitalize", "sm:text-base", "lg:text-lg")}
            >
               {menuItem.name}
            </h6>
            <p className="text-primary-700">{quantity.toString()}x</p>
         </div>

         <div className="flex flex-1 flex-col items-end justify-between">
            {isEditing ? (
               <div className="flex items-center gap-2">
                  <div className="inline-flex w-24 items-center justify-between rounded-lg bg-gray-100 p-1">
                     <Button
                        variant="square"
                        onClick={handleDecrementQty}
                        disabled={isDrecementBtnDisabled}
                     >
                        -
                     </Button>
                     <p className="text-sm font-semibold text-gray-800">{qty.toString()}</p>
                     <Button variant="square" onClick={handleIncrementQty}>
                        +
                     </Button>
                  </div>

                  <Button
                     variant="icon"
                     className="rounded-md bg-green-600 text-white"
                     isLoading={updatingCartItem}
                     onClick={handleUpdateItem}
                  >
                     <Check />
                  </Button>
               </div>
            ) : (
               <div className="flex gap-2">
                  <Button
                     variant="icon"
                     className="rounded-md bg-rose-600 text-white"
                     isLoading={removingCartItem}
                     onClick={handleRemoveItem}
                  >
                     <Minus />
                  </Button>
                  <Button variant="icon" onClick={handleEditAction}>
                     <Edit />
                  </Button>
               </div>
            )}

            <div className="pt-3">
               <p className="font-semibold">${total}</p>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
