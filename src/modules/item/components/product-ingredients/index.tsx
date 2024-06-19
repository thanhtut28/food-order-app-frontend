import { INGREDIENTS } from "@/lib/constants/ingredients";

interface Props {
   ingredients: string[];
}

const ItemIngredients: React.FC<Props> = ({ ingredients }) => {
   return (
      <div className="py-10">
         <h4 className="text-lg font-bold text-gray-900">Ingredients</h4>
         <div className="flex gap-4 py-4">
            {ingredients?.map(ing => (
               <div
                  key={ing}
                  className="flex items-center justify-center rounded-xl bg-gray-100 px-4 py-3"
               >
                  <p className="text-sm capitalize text-gray-700">{`${INGREDIENTS[ing].icon} ${ing}`}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ItemIngredients;
