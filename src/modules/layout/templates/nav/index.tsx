import CartBag from "@/modules/common/components/cart-bag";
import Bag from "@/modules/common/icons/bag";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
   const { route } = useRouter();

   return (
      <div className="fixed top-0 left-0 w-full bg-white backdrop-blur-xl shadow-sm flex origin-top-left z-50">
         <div className="max-w-screen-2xl mx-auto flex w-full px-4 justify-between items-center">
            <ul className="flex gap-x-3">
               <li>
                  <AccountNavLink href="/" route={route}>
                     Home
                  </AccountNavLink>
               </li>
               <li>
                  <AccountNavLink href="/menu" route={route}>
                     Menu
                  </AccountNavLink>
               </li>
               <li>
                  <AccountNavLink href="/orders" route={route}>
                     Orders
                  </AccountNavLink>
               </li>
               <li>
                  <AccountNavLink href="/account/profile" route={route}>
                     Account
                  </AccountNavLink>
               </li>
            </ul>
            <div>
               <CartBag count={5} />
            </div>
         </div>
      </div>
   );
};

export default Nav;

interface AccountNavLinkProps {
   href: string;
   route: string;
   children: React.ReactNode;
}

const AccountNavLink: React.FC<AccountNavLinkProps> = ({ href, route, children }) => {
   const active = href === route;

   return (
      <Link href={href}>
         <a
            className={cn(
               "text-sm block font-semibold w-full p-6 px-4 text-gray-900 relative",
               "small-phones:text-xs small-phones:px-3 uppercase",
               {
                  "before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-primary-700":
                     active,
               }
            )}
         >
            {children}
         </a>
      </Link>
   );
};
