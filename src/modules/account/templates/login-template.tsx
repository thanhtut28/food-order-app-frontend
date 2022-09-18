import { useEffect } from "react";
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context";
import Login from "@/modules/account/components/login";
import Register from "@/modules/account/components/register";
import { useRouter } from "next/router";

const LoginTemplate = () => {
   const ctx = useAccount();
   const { refetchUser } = ctx;
   const [currentView, _] = ctx.loginView;
   const { replace, query } = useRouter();

   useEffect(() => {
      if (query.refetch === "true") {
         refetchUser();
      }
   }, [query.refetch, refetchUser]);

   useEffect(() => {
      if (ctx.me && !ctx.retrievingUser) {
         replace("/account/profile");
      }
   }, [ctx.me, ctx.retrievingUser, replace]);

   return <>{currentView === LOGIN_VIEW.SIGN_IN ? <Login /> : <Register />}</>;
};

export default LoginTemplate;
