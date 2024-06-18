import { GetMenuItemBySlugQuery } from "@/lib/generated/graphql";

interface Props {
   item: GetMenuItemBySlugQuery["getMenuItemBySlug"];
}

const ItemDetails: React.FC<Props> = ({ item }) => {
   return (
      <div>
         <h4>{item!.name}</h4>
      </div>
   );
};

export default ItemDetails;
