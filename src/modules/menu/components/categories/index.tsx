import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import Title from "@/modules/common/components/title";
import Category from "../category";
import cn from "@/lib/utils/classname";

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
            <div
               className={cn(
                  "grid grid-cols-2 gap-8 gap-y-8",
                  "sm:grid-cols-4",
                  "small-phones:flex small-phones:gap-8 small-phones:overflow-x-auto",
               )}
            >
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
