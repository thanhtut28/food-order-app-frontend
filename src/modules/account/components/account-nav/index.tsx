import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const AccountNav = () => {
   const router = useRouter();
   const { route } = router;

   console.log(router);

   return (
      <div className="flex">
         <div className="flex w-full justify-center items-center border py-2 bg-neutral-100">
            <ul className="flex gap-3">
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
            className={cn("text-gray-800 text-base block px-4 py-1", {
               "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black":
                  active,
            })}
         >
            {children}
         </a>
      </Link>
   );
};

// !text-primary-700 before:content-[''] before:top-0 before:left-0 before:bottom-0 before:h-full before:absolute before:w-1 before:bg-primary-600
