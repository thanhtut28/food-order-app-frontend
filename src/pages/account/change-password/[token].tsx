import AuthenticationLayout from "@/modules/account/templates/authentication-layout";
import ChangePasswordTemplate from "@/modules/account/templates/change-password-template";
import { NextPageWithLayout } from "@/types/global";

const ChangePasswordPage: NextPageWithLayout = () => {
   return <ChangePasswordTemplate />;
};

ChangePasswordPage.getLayout = page => {
   return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default ChangePasswordPage;
