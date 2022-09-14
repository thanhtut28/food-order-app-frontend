import { useEffect } from "react";
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context";
import Login from "@/modules/account/components/login";
import Register from "@/modules/account/components/register";
import { useRouter } from "next/router";

const LoginTemplate = () => {
   const ctx = useAccount();
   const [currentView, _] = ctx.loginView;
   const { replace } = useRouter();

   useEffect(() => {
      console.log(ctx.me);
      if (ctx.me && !ctx.retrievingUser) {
         replace("/account/profile");
      }
   }, [ctx.me, ctx.retrievingUser, replace]);

   return (
      <div className="w-full flex justify-center py-32">
         {currentView === LOGIN_VIEW.SIGN_IN ? <Login /> : <Register />}
      </div>
   );
};

export default LoginTemplate;
