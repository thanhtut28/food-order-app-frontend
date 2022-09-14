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
      <div className="flex-1 py-16">
         <div className="flex-1 h-full max-w-5xl mx-auto flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] px-8 py-12">
               <AccountNav />
               <div className="bg-white rounded-md border border-gray-200 p-4">{children}</div>
            </div>
         </div>
      </div>
   );
};

export default AccountLayout;
