import { GetMenuItemBySlugQuery } from "@/lib/generated/graphql";
import ProductAction from "../product-action";
import ProductDetails from "../product-details";
import ProductSummaryWrapper from "../product-summary-wrapper";
import { useState } from "react";

interface Props {
   item: NonNullable<GetMenuItemBySlugQuery["getMenuItemBySlug"]>;
}

const ProductSummary: React.FC<Props> = ({ item }) => {
   const [qty, setQty] = useState<number>(1);
   const totalPrice = (qty * item.price).toFixed(2);
   const isDrecementBtnDisabled = !(qty > 1);

   const handleIncrementQty = () => {
      setQty(prev => prev + 1);
   };

   const handleDecrementQty = () => {
      if (!isDrecementBtnDisabled) {
         setQty(prev => prev - 1);
      }
   };

   return (
      <ProductSummaryWrapper>
         <ProductDetails
            item={item}
            quantity={qty}
            handleIncrementQty={handleIncrementQty}
            handleDecrementQty={handleDecrementQty}
            isDrecementBtnDisabled={isDrecementBtnDisabled}
         />
         <ProductAction price={totalPrice} itemId={item.id} qty={qty} />
      </ProductSummaryWrapper>
   );
};

export default ProductSummary;
