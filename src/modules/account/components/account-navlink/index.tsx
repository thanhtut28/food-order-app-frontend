import cn from "classnames";
import Link from "next/link";

interface AccountNavLinkProps {
   href: string;
   route?: string;
   children: React.ReactNode;
}

const AccountNavLink: React.FC<AccountNavLinkProps> = ({ children, href, route }) => {
   const active = href === route;

   return (
      <li className="flex-1 flex justify-center items-center sm:block">
         <Link
            href={href}
            className={cn(
               "text-xs block w-full px-4 py-3 sm:py-4 small-phones:px-2 sm:text-sm text-center sm:text-left",
               {
                  "text-black font-semibold bg-white rounded-lg drop-shadow-md sm:bg-transparent sm:shadow-none":
                     active,
                  //    "before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gray-900 before:sm:hidden":
                  //       active,

                  "text-gray-700": !active,
               }
            )}>

            {children}

         </Link>
      </li>
   );
};

export default AccountNavLink;
