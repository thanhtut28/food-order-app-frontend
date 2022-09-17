import ChangePasswordTemplate from "@/modules/account/templates/change-password-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";

const ChangePasswordPage: NextPageWithLayout = () => {
   return <ChangePasswordTemplate />;
};

ChangePasswordPage.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default ChangePasswordPage;
