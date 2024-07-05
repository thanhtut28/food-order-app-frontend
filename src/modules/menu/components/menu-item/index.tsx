import cn from "@/lib/utils/classname";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import React from "react";
import { GetMenuItemsByCategoryQuery } from "../../../../lib/generated/graphql";

interface Props {
   item: GetMenuItemsByCategoryQuery["getMenuItemsByCategory"][number];
}

const MenuItem: React.FC<Props> = ({ item }) => {
   const router = useRouter();

   return (
      <div
         className="group my-16 mx-auto flex w-full max-w-xs cursor-pointer flex-col justify-between rounded-xl bg-white px-4 pt-10 pb-4 shadow-sm md:my-12"
         onClick={() => router.push(`/item/${item.id}`)}
      >
         <div className="-mt-[50%] w-full pb-2 transition-all group-hover:scale-110">
            <Image
               width={3}
               height={2}
               layout="responsive"
               alt={`Cover Image for ${item.name}`}
               className="object-cover shadow-sm"
               src={item.photo}
               quality={25}
            />
         </div>
         <h6
            className={cn(
               "min-h-[3rem] text-sm font-bold capitalize text-gray-800",
               "small-phones:text-base",
               "sm:text-base",
            )}
         >
            {item.name}
         </h6>
         <div className="flex items-center justify-between py-4">
            <p className="text-lg font-semibold text-gray-500">
               <span className="pr-0.5 text-xs">{`$`}</span>
               {item.price}
            </p>
            <span className="inline rounded-lg bg-primary-300 p-1.5 text-xs font-semibold capitalize text-gray-800">
               {item.category.name}
            </span>
         </div>
      </div>
   );
};

export default MenuItem;
