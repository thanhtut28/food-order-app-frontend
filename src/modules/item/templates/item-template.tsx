import { INGREDIENTS } from "@/lib/constants/ingredients";
import { GetAllCategoriesQuery, GetMenuItemBySlugQuery } from "@/lib/generated/graphql";
import { useRouter } from "next/router";
import { useState, useEffect, Suspense, useRef, lazy } from "react";

interface Props {
   item: GetMenuItemBySlugQuery["getMenuItemBySlug"];
}

const ItemTemplate: React.FC<Props> = ({ item }) => {
   const { query } = useRouter();

   return (
      <div className="max-w-screen-lg mx-auto px-6 flex">
         <div className="flex-1/2"></div>
         <div className="flex-1">
            <h1>Hello</h1>
         </div>
      </div>
   );
};

export default ItemTemplate;
