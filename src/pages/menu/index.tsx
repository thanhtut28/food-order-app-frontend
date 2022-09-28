import { initializeApollo } from "@/lib/config/apollo";
import { GetAllCategoriesDocument, GetAllCategoriesQuery } from "@/lib/generated/graphql";
import Layout from "@/modules/layout/templates";
import MenuTemplate from "@/modules/menu/templates/menu-templates";
import { NextPageWithLayout } from "@/types/global";
import { GetStaticProps } from "next";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const Menu: NextPageWithLayout<Props> = ({ categories }) => {
   return <MenuTemplate categories={categories} />;
};

Menu.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default Menu;

export const getStaticProps: GetStaticProps = async () => {
   const apolloClient = initializeApollo();

   const { data } = await apolloClient.query({
      query: GetAllCategoriesDocument,
   });

   const categories = data?.getAllCategories;

   return {
      props: {
         categories,
      },
   };
};
