import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import Title from "@/modules/common/components/title";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Category from "../category";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
   activeTag: number | null;
   setActiveTag: React.Dispatch<React.SetStateAction<number | null>>;
}

const Categories: React.FC<Props> = ({ categories, activeTag, setActiveTag }) => {
   return (
      <section>
         <Title>Categories</Title>
         {categories.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 small-phones:grid-cols-1 small-phones:gap-16 gap-8 gap-y-8">
               {categories.map(category => (
                  <Category
                     key={category.id}
                     category={category}
                     active={activeTag === category.id}
                     setActiveTag={setActiveTag}
                  />
               ))}
            </div>
         ) : (
            <h4 className="text-sm text-gray-600">No categories found.</h4>
         )}
      </section>
   );
};

export default Categories;
