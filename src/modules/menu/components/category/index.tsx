import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import cn from "classnames";
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
         className="flex flex-col items-center gap-3 cursor-pointer group"
         onClick={handleSelectTag}
      >
         <div
            className={cn(
               "bg-gradient-to-br rounded-lg relative",
               "w-full h-44",
               "small-phones:h-52",
               "sm:h-32",
               "md:h-36",
               "lg:h-40",
               {
                  "from-primary-200 to-primary-100": active,
                  "from-neutral-200 to-neutral-100": !active,
               }
            )}
         >
            <div className="absolute bottom-0 -right-7 w-full small-phones:w-3/4 transition-all group-hover:scale-110">
               <Image
                  width={3}
                  height={2}
                  layout="responsive"
                  alt={`Cover Image for ${category.name}`}
                  className="shadow-sm object-cover"
                  src={category.menuItems?.[0].photo}
                  quality={25}
               />
            </div>
         </div>
         <h6 className="text-sm font-semibold text-gray-900 capitalize sm:text-base small-phones:text-base">
            {category.name}
         </h6>
      </div>
   );
};

export default Category;
