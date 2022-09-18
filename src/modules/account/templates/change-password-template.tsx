import { useEffect } from "react";
import { useAccount } from "@/lib/context/account-context";
import { useRouter } from "next/router";
import ChangePassword from "../components/change-password";

const ChangePasswordTemplate = () => {
   const ctx = useAccount();
   const { replace } = useRouter();

   useEffect(() => {
      if (ctx.me && !ctx.retrievingUser) {
         replace("/account/profile");
      }
   }, [ctx.me, ctx.retrievingUser, replace]);

   return <ChangePassword />;
};

export default ChangePasswordTemplate;
