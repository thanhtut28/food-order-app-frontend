import ForgotPasswordTemplate from "@/modules/account/templates/forgot-password-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";

const ForgotPasswordPage: NextPageWithLayout = () => {
   return <ForgotPasswordTemplate />;
};

ForgotPasswordPage.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default ForgotPasswordPage;
