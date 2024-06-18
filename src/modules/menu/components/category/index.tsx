import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import cn from "@/lib/utils/classname";
import Image from "next/legacy/image";
import React from "react";

interface Props {
   category: GetAllCategoriesQuery["getAllCategories"][number];
   active: boolean;
   setActiveTag: React.Dispatch<React.SetStateAction<number | null>>;
}

const Category: React.FC<Props> = ({ category, active, setActiveTag }) => {
   const handleSelectTag = () => {
      if (active) {
         setActiveTag(null);
         return;
      }
      setActiveTag(category.id);
   };

   return (
      <div
         className="group flex cursor-pointer flex-col items-center gap-3"
         onClick={handleSelectTag}
      >
         <div
            className={cn(
               "relative rounded-lg bg-gradient-to-br p-0",
               "h-44 w-full",
               "small-phones:h-20 small-phones:p-20",
               "sm:h-32",
               "md:h-36",
               "lg:h-40",
               {
                  "from-primary-300 to-primary-100": active,
                  "from-neutral-300 to-neutral-100": !active,
               },
            )}
         >
            <div className="absolute bottom-0 -right-7 w-full transition-all group-hover:scale-110">
               <Image
                  width={3}
                  height={2}
                  layout="responsive"
                  alt={`Cover Image for ${category.name}`}
                  className="object-cover shadow-sm"
                  src={category.menuItems?.[0].photo}
                  quality={25}
               />
            </div>
         </div>
         <h6 className="text-sm font-semibold capitalize text-gray-900 sm:text-base small-phones:text-base">
            {category.name}
         </h6>
      </div>
   );
};

export default Category;
