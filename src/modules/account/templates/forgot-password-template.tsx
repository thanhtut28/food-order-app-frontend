import { useEffect } from "react";
import { useAccount } from "@/lib/context/account-context";
import { useRouter } from "next/router";
import ForgotPassword from "../components/forgot-password";

const ForgotPasswordTemplate = () => {
   const ctx = useAccount();
   const { replace } = useRouter();

   useEffect(() => {
      if (ctx.me && !ctx.retrievingUser) {
         replace("/account/profile");
      }
   }, [ctx.me, ctx.retrievingUser, replace]);

   return <ForgotPassword />;
};

export default ForgotPasswordTemplate;
