import cn from "@/lib/utils/classname";
import Tag from "@/modules/common/icons/tag";
import ProductIngredients from "../product-ingredients";
import { GetMenuItemBySlugQuery } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import { useState } from "react";
import ProductQuantity from "../product-quantity";
import ProductTitle from "../product-title";

interface Props {
   item: NonNullable<GetMenuItemBySlugQuery["getMenuItemBySlug"]>;
   isDrecementBtnDisabled: boolean;
   quantity: number;
   handleIncrementQty: () => void;
   handleDecrementQty: () => void;
}

const ProductDetails: React.FC<Props> = ({
   item,
   quantity,
   isDrecementBtnDisabled,
   handleDecrementQty,
   handleIncrementQty,
}) => {
   const ingredientNames = item?.ingredientItems.map(ing => ing.ingredient.name);
   const filteredIngredients = ingredientNames?.filter(
      (ing, index) => ingredientNames.indexOf(ing) === index,
   );

   return (
      <div className="flex-1">
         <ProductTitle title={item.name} />
         <ProductQuantity
            quantity={quantity}
            isDrecementBtnDisabled={isDrecementBtnDisabled}
            handleDecrementQty={handleDecrementQty}
            handleIncrementQty={handleIncrementQty}
         />

         <ProductIngredients ingredients={filteredIngredients} />
      </div>
   );
};

export default ProductDetails;
