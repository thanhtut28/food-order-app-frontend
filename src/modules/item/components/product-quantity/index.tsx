import Button from "@/modules/common/components/button";

interface Props {
   quantity: number;
   isDrecementBtnDisabled: boolean;
   handleIncrementQty: () => void;
   handleDecrementQty: () => void;
}

const ProductQuantity: React.FC<Props> = ({
   quantity,
   isDrecementBtnDisabled,
   handleDecrementQty: handleDecreaseQty,
   handleIncrementQty: handleIncreaseQty,
}) => {
   return (
      <div className="pt-14 pb-4">
         <div className="inline-flex w-24 items-center justify-between rounded-lg bg-gray-100 p-1">
            <Button variant="square" onClick={handleDecreaseQty} disabled={isDrecementBtnDisabled}>
               -
            </Button>
            <p className="font-semibold text-gray-800">{quantity.toString()}</p>
            <Button variant="square" onClick={handleIncreaseQty}>
               +
            </Button>
         </div>
      </div>
   );
};

export default ProductQuantity;
