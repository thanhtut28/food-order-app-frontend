import AuthenticationLayout from "@/modules/account/templates/authentication-layout";
import ForgotPasswordTemplate from "@/modules/account/templates/forgot-password-template";
import { NextPageWithLayout } from "@/types/global";

const ForgotPasswordPage: NextPageWithLayout = () => {
   return <ForgotPasswordTemplate />;
};

ForgotPasswordPage.getLayout = page => {
   return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default ForgotPasswordPage;
