import { initializeApollo } from "@/lib/config/apollo";
import { GetBannerItemsDocument, GetBannerItemsQuery } from "@/lib/generated/graphql";
import AccountLayout from "@/modules/account/templates/account-layout";
import HeroTemplate from "@/modules/home/templates/hero-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";
import { GetStaticProps } from "next";

interface Props {
   items: GetBannerItemsQuery["getBannerItems"];
}

const Home: NextPageWithLayout<Props> = ({ items }) => {
   return <HeroTemplate items={items} />;
};

Home.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
   const apolloClient = initializeApollo();

   const { data } = await apolloClient.query({
      query: GetBannerItemsDocument,
   });

   const items = data?.getBannerItems;

   return {
      props: {
         items,
      },
   };
};
