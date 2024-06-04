import ArrowRight from "@/modules/common/icons/arrow-right";
import { useCart } from "../../../../lib/context/cart-context";
import {
   GetAllCategoriesQuery,
   GetCartDocument,
   GetCartItemsDocument,
   GetMenuItemsByCategoryQuery,
   useAddToCartMutation,
} from "../../../../lib/generated/graphql";
import Plus from "../../../common/icons/plus";
import cn from "classnames";
import Image from "next/legacy/image";
import React from "react";

interface Props {
   item: GetMenuItemsByCategoryQuery["getMenuItemsByCategory"][number];
}

const MenuItem: React.FC<Props> = ({ item }) => {
   const { cartId } = useCart();

   const [addToCart, { data, loading, error }] = useAddToCartMutation({
      // last recent code
      variables: { input: { cartId: cartId!, menuItemId: item.id } },
      refetchQueries: [GetCartDocument, GetCartItemsDocument],
   });

   console.log("added", data?.addToCart);

   return (
      <div
         className="bg-gradient-to-br rounded-xl bg-white shadow-sm group px-4 pt-10 pb-4 my-16 md:my-12 flex flex-col justify-between w-full max-w-xs mx-auto cursor-pointer"
         onClick={() => console.log("card")}
      >
         <div className="w-full transition-all group-hover:scale-110 pb-2 -mt-[50%]">
            <Image
               width={3}
               height={2}
               layout="responsive"
               alt={`Cover Image for ${item.name}`}
               className="shadow-sm object-cover"
               src={item.photo}
               quality={25}
            />
         </div>
         <h6
            className={cn(
               "text-sm font-semibold text-gray-700 capitalize sm:text-base small-phones:text-base min-h-[3rem]"
            )}
         >
            {item.name}
         </h6>
         <div className="py-4 flex justify-between items-center">
            <p className="text-sm text-gray-800">${item.price}</p>
            <span className="inline text-gray-800 text-xs font-semibold capitalize p-1.5 bg-primary-200 rounded-lg">
               {item.category.name}
            </span>
         </div>
      </div>
   );
};

export default MenuItem;
