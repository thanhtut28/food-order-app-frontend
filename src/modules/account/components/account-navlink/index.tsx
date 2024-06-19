import cn from "@/lib/utils/classname";
import Link from "next/link";

interface AccountNavLinkProps {
   href: string;
   route?: string;
   children: React.ReactNode;
}

const AccountNavLink: React.FC<AccountNavLinkProps> = ({ children, href, route }) => {
   const active = href === route;

   return (
      <li className="flex flex-1 items-center justify-center sm:block">
         <Link
            href={href}
            className={cn(
               "block w-full px-4 py-3 text-center text-xs text-gray-700 sm:py-4 sm:text-left sm:text-sm small-phones:px-2",
               {
                  "rounded-lg bg-white font-semibold text-black drop-shadow-md sm:bg-transparent sm:shadow-none":
                     active,
                  //    "before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gray-900 before:sm:hidden":
                  //       active,
               },
            )}
         >
            {children}
         </Link>
      </li>
   );
};

export default AccountNavLink;
