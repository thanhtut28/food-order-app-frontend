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
   const { data, loading, fetchMore, error } = useGetMenuItemsByCategoryQuery({
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
               setHasMore(fetchMoreRes.data.getMenuItemsByCategory.length > 0),
            );
         }
      }, 100);
      return () => clearTimeout(timeout);

      // implemented fetchMore with setTimeout
      // to prevent double queries at one intersection.
   }, [categoryId, entry?.isIntersecting, fetchMore, hasMore, inView, loading, menuItems]);
   if (error) {
      return <h6>Error</h6>;
   }

   if (loading) {
      return (
         <div
            className="flex h-full min-h-[640px] w-full items-center justify-center text-gray-800"
            data-testid="loading-container"
         >
            <Spinner size={36} />
         </div>
      );
   }

   return (
      <section>
         <Title>Menu Items</Title>
         {menuItems && menuItems.length > 0 ? (
            <>
               <div className="grid grid-cols-1 gap-4 gap-y-8 pt-6 sm:grid-cols-2 md:grid-cols-4">
                  {menuItems.map(item => (
                     <MenuItem item={item} key={item.id} />
                  ))}
               </div>
               <div ref={ref} className="pt-6">
                  {!hasMore && (
                     <h6 className="text-center text-sm text-gray-600">{`You've reached the end`}</h6>
                  )}
               </div>
            </>
         ) : (
            <h4 className="text-sm text-gray-600">No items found.</h4>
         )}
         {/* <div ref={ref} /> */}
      </section>
   );
};

export default MenuItems;
