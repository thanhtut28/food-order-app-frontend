import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import cn from "@/lib/utils/classname";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props {
   category: GetAllCategoriesQuery["getAllCategories"][number];
   num: number;
}

const MainCategory: React.FC<Props> = ({ category, num }) => {
   const isOddNum = num % 2 !== 0;

   return (
      <div className="flex-1 cursor-pointer">
         <Link href={{ pathname: `/menu`, query: { category: category.id } }} legacyBehavior>
            <div
               className={cn({
                  "md:translate-y-20": isOddNum,
               })}
            >
               <div
                  className={cn("flex flex-col rounded-3xl", {
                     "bg-amber-400": num === 0,
                     "bg-primary-100": num === 1,
                     "bg-amber-900": num === 3,
                     "bg-orange-200": num === 2,
                  })}
               >
                  <div className="flex-1 p-10 sm:p-20 md:p-10 lg:p-10 small-phones:p-10">
                     <Image
                        width={3}
                        height={2}
                        layout="responsive"
                        alt={`Cover Image for ${category.name}`}
                        className="object-cover shadow-sm"
                        src={category.menuItems?.[0].photo}
                        quality={50}
                     />
                  </div>
                  <div className="py-6 md:py-8 lg:py-10">
                     <h4
                        className={cn(
                           "text-center text-4xl font-extrabold capitalize",
                           "sm:text-5xl",
                           "md:text-4xl",

                           {
                              "text-red-800": num === 0,
                              "text-green-800": num === 1,
                              "text-amber-400": num === 3,
                              "text-amber-700": num === 2,
                           },
                        )}
                     >
                        {category?.name}
                     </h4>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default MainCategory;
