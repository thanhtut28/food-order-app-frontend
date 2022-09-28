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

   if (!ctx?.me || ctx.retrievingUser) {
      return (
         <div className="flex items-center justify-center w-full min-h-[640px] h-full text-gray-900">
            <Spinner size={36} />
         </div>
      );
   }

   return (
      <div className="max-w-screen-lg mx-auto">
         <div className="mx-3 py-4 rounded-lg grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-0">
            <AccountNav />
            {children}
         </div>
      </div>
   );
};

export default AccountLayout;
