import ChevronDown from "@/modules/common/icons/chevron-down";
import { useRouter } from "next/router";
import AccountNavLink from "../account-navlink";

const AccountNav = () => {
   const router = useRouter();
   const { route } = router;

   return (
      <>
         <div className="rounded-xl">
            <ul className="flex gap-4 small-phones:gap-2 sm:gap-0 flex-row justify-between px-1 py-3 sm:py-0 sm:flex-col sm:px-4 bg-neutral-100 rounded-lg sm:bg-transparent">
               <AccountNavLink href="/account" route={route}>
                  Overview
               </AccountNavLink>

               <AccountNavLink href="/account/profile" route={route}>
                  Profile
               </AccountNavLink>

               <AccountNavLink href="/account/orders" route={route}>
                  Orders
               </AccountNavLink>

               <AccountNavLink href="/account/analytics" route={route}>
                  Analytics
               </AccountNavLink>
            </ul>
         </div>
      </>
   );
};

export default AccountNav;

// !text-primary-700 before:content-[''] before:top-0 before:left-0 before:bottom-0 before:h-full before:absolute before:w-1 before:bg-primary-600
// after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black
