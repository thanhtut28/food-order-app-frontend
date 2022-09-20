import { GetBannerItemsQuery } from "@/lib/generated/graphql";
import Banner from "../components/banner";

interface Props {
   items: GetBannerItemsQuery["getBannerItems"];
}

const HeroTemplate: React.FC<Props> = ({ items }) => {
   return (
      <div className="flex flex-col gap-8">
         <Banner item={items?.[0]!} label="chicken burger" />
         <Banner item={items?.[1]!} label="beef burger" />
      </div>
   );
};

export default HeroTemplate;
