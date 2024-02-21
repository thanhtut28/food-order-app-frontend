import { useEffect, useState } from "react";
import { useGetMenuItemsByCategoryQuery } from "../../../../lib/generated/graphql";
import { useInView } from "react-intersection-observer";
import Title from "../../../common/components/title";
import Spinner from "../../../common/icons/spinner";
import MenuItem from "../menu-item";
interface Props {
   categoryId: number | null;
}

const MenuItems: React.FC<Props> = ({ categoryId }) => {
   const { ref, inView, entry } = useInView({
      threshold: 0,
   });
   const [hasMore, setHasMore] = useState<boolean>(true);
   const { data, loading, fetchMore } = useGetMenuItemsByCategoryQuery({
      variables: { input: { categoryId } },
   });

   const menuItems = data?.getMenuItemsByCategory;

   // to reset hasMore after changing category
   useEffect(() => {
      setHasMore(true);
   }, [categoryId]);

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (entry?.isIntersecting && inView && hasMore) {
            console.log("fetchmore");
            fetchMore({
               variables: { input: { categoryId, cursor: menuItems?.[menuItems?.length - 1].id } },
            }).then(fetchMoreRes =>
               setHasMore(fetchMoreRes.data.getMenuItemsByCategory.length > 0)
            );
         }
      }, 100);
      return () => clearTimeout(timeout);

      // implemented fetchMore with setTimeout
      // to prevent double queries at one intersection.
   }, [categoryId, entry?.isIntersecting, fetchMore, hasMore, inView, loading, menuItems]);

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
            <>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
                  {menuItems.map(item => (
                     <MenuItem item={item} key={item.id} />
                  ))}
               </div>
               <div ref={ref} className="pt-6">
                  {!hasMore && (
                     <h6 className="text-sm text-gray-600 text-center">{`You've reached the end`}</h6>
                  )}
               </div>
            </>
         ) : (
            <h4 className="text-sm text-gray-600">No items found.</h4>
         )}
         <div ref={ref} />
      </section>
   );
};

export default MenuItems;
