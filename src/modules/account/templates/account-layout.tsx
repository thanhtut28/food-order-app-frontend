import { useEffect } from "react";
import { useAccount } from "@/lib/context/account-context";
import Spinner from "@/modules/common/icons/spinner";
import AccountNav from "../components/account-nav";

interface Props {
   children: React.ReactNode;
}

const AccountLayout: React.FC<Props> = ({ children }) => {
   const ctx = useAccount();
   const { checkAuth } = ctx;

   useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   if (!ctx.me || ctx.retrievingUser) {
      return (
         <div className="flex h-full min-h-[640px] w-full items-center justify-center text-gray-900">
            <Spinner size={36} />
         </div>
      );
   }

   return (
      <div className="mx-auto max-w-screen-lg">
         <div className="mx-3 grid grid-cols-1 gap-8 rounded-lg py-4 sm:grid-cols-[200px_1fr] sm:gap-0">
            <AccountNav />
            {children}
         </div>
      </div>
   );
};

export default AccountLayout;
