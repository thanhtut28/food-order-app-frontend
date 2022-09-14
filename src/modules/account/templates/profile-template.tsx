import { useAccount } from "@/lib/context/account-context";
import Button from "@/modules/common/components/button";
import AccountInfo from "../components/account-info";

const ProfileTemplate: React.FC = () => {
   const ctx = useAccount();

   if (ctx.retrievingUser || !ctx.me) {
      return null;
   }

   return (
      <div className="w-full flex flex-col justify-center items-center">
         <div className="mb-8">
            <h2 className="text-2xl sm:text-4xl font-semibold">Personal Information</h2>
         </div>
         <div className="w-full flex flex-col max-w-md">
            <AccountInfo label="email" info={ctx.me.email} />
            <div className="my-2" />
            <AccountInfo label="username" info={ctx.me.username} />
            <div className="flex justify-end my-4">
               <Button
                  variant="danger"
                  onClick={() =>
                     ctx.logout().then(() => {
                        ctx.refetchUser();
                     })
                  }
               >
                  Logout
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ProfileTemplate;
