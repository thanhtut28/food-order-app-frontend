import { initializeApollo } from "@/lib/config/apollo";
import { GetAllCategoriesDocument, GetAllCategoriesQuery } from "@/lib/generated/graphql";
import HeroTemplate from "@/modules/home/templates/hero-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";
import { GetStaticProps } from "next";

interface Props {
   categories: GetAllCategoriesQuery["getAllCategories"];
}

const Home: NextPageWithLayout<Props> = ({ categories }) => {
   return <HeroTemplate categories={categories} />;
};

Home.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default Home;

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
