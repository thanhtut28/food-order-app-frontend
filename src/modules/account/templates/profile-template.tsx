import { SuccessMessage } from "@/lib/constants/message";
import { useAccount } from "@/lib/context/account-context";
import { GetCartDocument, MeDocument, useLogoutMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import { toast } from "react-toastify";
import ProfileEmail from "../components/profile-email";
import ProfileUsername from "../components/profile-username";

const ProfileTemplate: React.FC = () => {
   const [logout, { loading: loggingOut }] = useLogoutMutation({
      refetchQueries: [GetCartDocument, MeDocument],
      onError: () => {},
      onCompleted: () => toast.success(SuccessMessage.LOG_OUT_SUCCESS),
   });
   const ctx = useAccount();

   if (ctx.retrievingUser || !ctx.me) {
      return null;
   }

   const handleLogout = async () => {
      await logout();
   };

   return (
      <div className="w-full max-w-lg rounded-3xl px-4">
         <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-2xl">
               Personal Information
            </h2>
         </div>
         <div className="flex w-full flex-col">
            {/* <AccountInfo label="email" info={ctx.me.email} /> */}
            <ProfileEmail me={ctx.me} />
            <div className="my-2" />
            <ProfileUsername me={ctx.me} />
            <div className="my-4 flex justify-end">
               <Button onClick={handleLogout} isLoading={loggingOut}>
                  Logout
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ProfileTemplate;
