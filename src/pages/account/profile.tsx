import AccountLayout from "@/modules/account/templates/account-layout";
import ProfileTemplate from "@/modules/account/templates/profile-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";

const ProfilePage: NextPageWithLayout = () => {
   return <ProfileTemplate />;
};

ProfilePage.getLayout = page => {
   return (
      <Layout>
         <AccountLayout>{page}</AccountLayout>
      </Layout>
   );
};

export default ProfilePage;
