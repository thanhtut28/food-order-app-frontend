import MainCategory from "../main-category";
import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import cn from "@/lib/utils/classname";
import Title from "@/modules/common/components/title";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const MainCategories: React.FC<Props> = ({ categories }) => {
   return (
      <div className="mx-auto max-w-screen-lg rounded-2xl px-6 pt-10 pb-10 md:pb-20">
         {categories.length > 0 && (
            <>
               <Title>Main Categories</Title>
               <div className={cn("grid w-full grid-cols-1 gap-10", "md:grid-cols-2 md:gap-8")}>
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
