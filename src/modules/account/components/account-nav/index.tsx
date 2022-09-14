import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const AccountNav = () => {
   const router = useRouter();
   const { route } = router;

   console.log(router);

   return (
      <div className="flex">
         <div className="hidden sm:block">
            <div className="pb-6 pt-2">
               <h6 className="text-lg text-primary-700 font-semibold px-4">Account</h6>
            </div>
            <ul className="flex flex-col gap-3">
               <li className="relative">
                  <AccountNavLink href="/account" route={route}>
                     Overview
                  </AccountNavLink>
               </li>
               <li className="relative">
                  <AccountNavLink href="/account/profile" route={route}>
                     Profile
                  </AccountNavLink>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default AccountNav;

interface AccountNavLinkProps {
   href: string;
   route: string;
   children: React.ReactNode;
}

const AccountNavLink: React.FC<AccountNavLinkProps> = ({ children, href, route }) => {
   const active = href === route;

   return (
      <Link href={href}>
         <a
            className={cn("text-gray-800 text-lg block px-4 py-1", {
               "!text-primary-700 before:content-[''] before:top-0 before:left-0 before:bottom-0 before:h-full before:absolute before:w-1 before:bg-primary-600":
                  active,
            })}
         >
            {children}
         </a>
      </Link>
   );
};
