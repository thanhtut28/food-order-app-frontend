import { initializeApollo } from "@/lib/config/apollo";
import {
   GetAllCategoriesDocument,
   GetAllCategoriesQuery,
   GetAllMenuItemsDocument,
   GetAllMenuItemsQuery,
   GetMenuItemBySlugDocument,
   GetMenuItemBySlugQuery,
} from "@/lib/generated/graphql";
import ItemTemplate from "@/modules/item/templates/item-template";
import Layout from "@/modules/layout/templates";
import MenuTemplate from "@/modules/menu/templates/menu-template";
import { NextPageWithLayout } from "@/types/global";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
   item: GetMenuItemBySlugQuery["getMenuItemBySlug"];
}

const ItemPage: NextPageWithLayout<Props> = ({ item }) => {
   return <ItemTemplate item={item} />;
};

ItemPage.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default ItemPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const apolloClient = initializeApollo();

   const slug = Number.parseInt(params?.slug as string);

   const { data } = await apolloClient.query({
      query: GetMenuItemBySlugDocument,
      variables: { slug },
   });

   const menuItem = data?.getMenuItemBySlug;

   return {
      props: {
         item: menuItem,
      },
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const apolloClient = initializeApollo();

   const { data } = await apolloClient.query({
      query: GetAllMenuItemsDocument,
   });

   const menuItems = data?.getAllMenuItems;

   const paths = menuItems?.map((item: GetAllMenuItemsQuery["getAllMenuItems"][0]) => ({
      params: { slug: item.id.toString() },
   }));

   return {
      paths,
      fallback: true,
   };
};
