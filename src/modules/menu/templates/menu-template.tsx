import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Categories from "../components/categories";
import MenuItems from "../components/menu-items";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const MenuTemplate: React.FC<Props> = ({ categories }) => {
   const searchParams = useSearchParams();
   const categoryParams = searchParams.get("category");

   const [activeTag, setActiveTag] = useState<number | null>(null);

   useEffect(() => {
      if (categoryParams && typeof categoryParams === "string") {
         setActiveTag(+categoryParams);
      }
   }, [categoryParams]);

   return (
      <div className="mx-auto max-w-screen-lg px-2 sm:px-6">
         <Categories categories={categories} activeTag={activeTag} setActiveTag={setActiveTag} />
         <div className="my-10" />
         <MenuItems categoryId={activeTag} />
      </div>
   );
};

export default MenuTemplate;
