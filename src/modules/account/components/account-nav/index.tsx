import ChevronDown from "@/modules/common/icons/chevron-down";
import { usePathname } from "next/navigation";
import AccountNavLink from "../account-navlink";

const AccountNav = () => {
   const pathname = usePathname();

   return (
      <>
         <div className="rounded-xl">
            <ul className="flex flex-row justify-between gap-4 rounded-lg bg-neutral-100 px-1 py-3 sm:flex-col sm:gap-0 sm:bg-transparent sm:py-0 sm:px-4 small-phones:gap-2">
               <AccountNavLink href="/account" route={pathname}>
                  Overview
               </AccountNavLink>

               <AccountNavLink href="/account/profile" route={pathname}>
                  Profile
               </AccountNavLink>

               <AccountNavLink href="/account/orders" route={pathname}>
                  Orders
               </AccountNavLink>

               <AccountNavLink href="/account/analytics" route={pathname}>
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
