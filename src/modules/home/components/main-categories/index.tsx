import MainCategory from "../main-category";
import cn from "classnames";
import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import Title from "@/modules/common/components/title";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const MainCategories: React.FC<Props> = ({ categories }) => {
   return (
      <div className="max-w-screen-lg mx-auto pt-10 pb-10 md:pb-20 px-6 rounded-2xl">
         {categories.length > 0 && (
            <>
               <Title>Main Categories</Title>
               <div className={cn("grid grid-cols-1 w-full gap-10", "md:grid-cols-2 md:gap-8 ")}>
                  {categories.map((_, i) => (
                     <MainCategory category={categories?.[i]!} key={i} num={i} />
                  ))}
               </div>
            </>
         )}
      </div>
   );
};

export default MainCategories;

//relative before:content-[''] before:absolute before:w-full before:top-0 before:left-0 before:h-1/6 before:bg-primary-700
