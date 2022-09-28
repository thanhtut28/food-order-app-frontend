import AccountLayout from "@/modules/account/templates/account-layout";
import OverviewTempalte from "@/modules/account/templates/overview-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";

const ProfilePage: NextPageWithLayout = () => {
   return <OverviewTempalte />;
};

ProfilePage.getLayout = page => {
   return (
      <Layout>
         <AccountLayout>{page}</AccountLayout>
      </Layout>
   );
};

export default ProfilePage;
