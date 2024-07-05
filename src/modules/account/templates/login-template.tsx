import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context";
import Login from "@/modules/account/components/login";
import Register from "@/modules/account/components/register";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginTemplate = () => {
   const ctx = useAccount();
   const { refetchUser } = ctx;
   const [currentView, _] = ctx.loginView;
   const { replace } = useRouter();
   const searchParams = useSearchParams();
   const refetchParams = searchParams.get("refetch");

   useEffect(() => {
      if (refetchParams === "true") {
         refetchUser();
      }
   }, [refetchParams, refetchUser]);

   return <>{currentView === LOGIN_VIEW.SIGN_IN ? <Login /> : <Register />}</>;
};

export default LoginTemplate;
