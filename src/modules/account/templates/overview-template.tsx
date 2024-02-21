import { SuccessMessage } from "@/lib/constants/message";
import { useAccount } from "@/lib/context/account-context";
import { useLogoutMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import cn from "classnames";
import { toast } from "react-toastify";
import ProfileEmail from "../components/profile-email";
import ProfileUsername from "../components/profile-username";

const OverviewTemplate: React.FC = () => {
   const [logout, { loading: loggingOut }] = useLogoutMutation({
      onError: () => {},
      onCompleted: async () => {
         // await ctx.refetchUser();
         toast.success(SuccessMessage.LOG_OUT_SUCCESS);
      },
   });
   const ctx = useAccount();

   // if (ctx.retrievingUser || !ctx.me) {
   //    return null;
   // }

   const handleLogout = async () => {
      await logout();
   };

   return (
      <div className={cn("w-full rounded-3xl")}>
         <div className="mb-8">
            <h2 className="text-2xl sm:text-2xl font-semibold text-gray-900">Overview</h2>
         </div>
         <div className="w-full flex flex-col">
            {/* <AccountInfo label="email" info={ctx.me.email} /> */}
            {/* <ProfileEmail me={ctx.me} />
            <div className="my-2" />
            <ProfileUsername me={ctx.me} />
            <div className="flex justify-end my-4">
               <Button onClick={handleLogout} isLoading={loggingOut}>
                  Logout
               </Button>
            </div> */}
         </div>
      </div>
   );
};

export default OverviewTemplate;
