import AccountLayout from "@/modules/account/templates/account-layout";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";

const Home: NextPageWithLayout = () => {
   return <h1>Home Page</h1>;
};

Home.getLayout = page => {
   return (
      <Layout>
         <AccountLayout>{page}</AccountLayout>
      </Layout>
   );
};

export default Home;
