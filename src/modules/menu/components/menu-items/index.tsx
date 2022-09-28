import {
   GetMenuItemsByCategoryQuery,
   useGetMenuItemsByCategoryQuery,
} from "@/lib/generated/graphql";
import Title from "@/modules/common/components/title";
import MenuItem from "../menu-item";

interface Props {
   categoryId: number | null;
}

const MenuItems: React.FC<Props> = ({ categoryId }) => {
   const { data } = useGetMenuItemsByCategoryQuery({ variables: { categoryId } });

   const menuItems = data?.getMenuItemsByCategory;

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
