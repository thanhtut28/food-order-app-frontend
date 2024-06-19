import { GetMenuItemBySlugQuery } from "@/lib/generated/graphql";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Burger from "../components/burger";
import { Environment } from "@react-three/drei";
import Loader from "../components/model-loader";
import Image from "next/image";
import Tag from "@/modules/common/icons/tag";
import { INGREDIENTS } from "@/lib/constants/ingredients";
import Button from "@/modules/common/components/button";
import cn from "@/lib/utils/classname";
import BurgerScene from "../components/burger-scene";
import ProductSummary from "../components/product-summary";
import ProductContainer from "../components/product-container";

export type TItem = GetMenuItemBySlugQuery["getMenuItemBySlug"];
interface Props {
   item: TItem;
}

const ItemTemplate: React.FC<Props> = ({ item }) => {
   if (!item) {
      return <h4 className="text-sm text-gray-600">No Item found.</h4>;
   }

   return (
      <ProductContainer>
         <BurgerScene ingredients={item.ingredientItems} />
         <ProductSummary item={item} />
      </ProductContainer>
   );
};

export default ItemTemplate;
