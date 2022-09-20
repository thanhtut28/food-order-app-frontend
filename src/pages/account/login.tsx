import AuthenticationLayout from "@/modules/account/templates/authentication-layout";
import LoginTemplate from "@/modules/account/templates/login-template";
import { NextPageWithLayout } from "@/types/global";

const LoginPage: NextPageWithLayout = () => {
   return <LoginTemplate />;
};

LoginPage.getLayout = page => {
   return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default LoginPage;
