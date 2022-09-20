import { GetBannerItemsQuery } from "@/lib/generated/graphql";
import cn from "classnames";
import Image from "next/image";

interface Props {
   item: NonNullable<GetBannerItemsQuery["getBannerItems"]>[number];
   label: string;
}

const Banner: React.FC<Props> = ({ item, label }) => {
   return (
      <div className="flex bg-primary-dark-700">
         <div className="flex-1">
            <h1>{label}</h1>
         </div>
         <div className="flex-1 w-full">
            <Image
               width={16}
               height={9}
               layout="responsive"
               alt={`Cover Image for ${item?.category?.name}`}
               className={cn("shadow-small object-cover", {
                  // "hover:shadow-medium transition-shadow duration-200 rounded-b-none": slug,
                  // "rounded-none sm:rounded-md": !slug,
               })}
               src={item?.photo!}
               quality={50}
            />
         </div>
      </div>
   );
};

export default Banner;
