import { useGetMenuItemsByCategoryQuery } from "@/lib/generated/graphql";
import Title from "@/modules/common/components/title";
import Spinner from "@/modules/common/icons/spinner";
import MenuItem from "../menu-item";

interface Props {
   categoryId: number | null;
}

const MenuItems: React.FC<Props> = ({ categoryId }) => {
   const { data, loading } = useGetMenuItemsByCategoryQuery({
      variables: { categoryId },
   });

   const menuItems = data?.getMenuItemsByCategory;

   if (loading || !data) {
      return (
         <div className="flex items-center justify-center w-full min-h-[640px] h-full text-gray-800">
            <Spinner size={36} />
         </div>
      );
   }

   return (
      <section>
         <Title>Menu Items</Title>
         {menuItems && menuItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
               {menuItems.map(item => (
                  <MenuItem item={item} key={item.id} />
               ))}
            </div>
         ) : (
            <h4 className="text-sm text-gray-600">No items found.</h4>
         )}
      </section>
   );
};

export default MenuItems;
