import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Categories from "../components/categories";
import MenuItems from "../components/menu-items";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const MenuTemplate: React.FC<Props> = ({ categories }) => {
   const { query } = useRouter();

   const [activeTag, setActiveTag] = useState<number | null>(null);

   useEffect(() => {
      if (query.category && typeof query.category === "string") {
         setActiveTag(+query.category);
      }
   }, [query.category]);

   return (
      <div className="max-w-screen-lg mx-auto px-6">
         <Categories categories={categories} activeTag={activeTag} setActiveTag={setActiveTag} />
         <div className="my-10" />
         <MenuItems categoryId={activeTag} />
      </div>
   );
};

export default MenuTemplate;
