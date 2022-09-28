import { GetAllCategoriesQuery, GetMenuItemsByCategoryQuery } from "@/lib/generated/graphql";
import Plus from "@/modules/common/icons/plus";
import cn from "classnames";
import Image from "next/image";
import React from "react";

interface Props {
   item: GetMenuItemsByCategoryQuery["getMenuItemsByCategory"][number];
}

const MenuItem: React.FC<Props> = ({ item }) => {
   return (
      <div className="bg-gradient-to-br rounded-lg from-neutral-100 to-neutral-50 drop-shadow-lg group p-4 flex flex-col justify-between w-full">
         <div
            className="w-full transition-all cursor-pointer group-hover:scale-110 py-2"
            onClick={() => console.log("card")}
         >
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
         <div className="flex justify-between items-center py-2">
            <p className="text-sm text-gray-800">${item.price}</p>
            <button
               className="text-gray-700 pb-1 z-50 relative"
               onClick={() => console.log("plus")}
            >
               <Plus size={26} />
            </button>
         </div>
      </div>
   );
};

export default MenuItem;
