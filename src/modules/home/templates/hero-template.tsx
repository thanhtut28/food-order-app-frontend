import { GetAllCategoriesQuery } from "@/lib/generated/graphql";
import CTA from "../components/cta";
import FeaturedProducts from "../components/featured-products";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const HeroTemplate: React.FC<Props> = ({ categories }) => {
   return (
      <div className="">
         <CTA />
         <div className="my-10" />
         {/* <Banner item={items?.[1].menuItem!} label="beef burger" /> */}
         <FeaturedProducts categories={categories} />
      </div>
   );
};

export default HeroTemplate;
