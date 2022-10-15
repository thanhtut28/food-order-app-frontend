import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import CTA from "../components/cta";
import MainCategories from "../components/main-categories";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const HeroTemplate: React.FC<Props> = ({ categories }) => {
   return (
      <div className="">
         <CTA />
         <div className="my-10" />
         {/* <Banner item={items?.[1].menuItem!} label="beef burger" /> */}
         <MainCategories categories={categories} />
      </div>
   );
};

export default HeroTemplate;
