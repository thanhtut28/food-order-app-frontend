import LoginTemplate from "@/modules/account/templates/login-template";
import Layout from "@/modules/layout/templates";
import { NextPageWithLayout } from "@/types/global";

const LoginPage: NextPageWithLayout = () => {
   return <LoginTemplate />;
};

LoginPage.getLayout = page => {
   return <Layout>{page}</Layout>;
};

export default LoginPage;
