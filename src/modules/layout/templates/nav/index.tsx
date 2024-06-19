import { useCart } from "@/lib/context/cart-context";
import cn from "@/lib/utils/classname";
import CartBag from "@/modules/common/components/cart-bag";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
   const pathname = usePathname();
   const { cartItemsQty } = useCart();

   return (
      <div className="fixed top-0 left-0 z-50 flex w-full origin-top-left bg-white shadow-sm backdrop-blur-xl">
         <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4">
            <ul className="flex gap-x-6">
               <li>
                  <NavLink href="/" route={pathname}>
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink href="/menu" route={pathname}>
                     Menu
                  </NavLink>
               </li>
               <li>
                  <NavLink href="/orders" route={pathname}>
                     Orders
                  </NavLink>
               </li>
               <li>
                  <NavLink href="/account/profile" route={pathname}>
                     Account
                  </NavLink>
               </li>
            </ul>
            <div>
               <CartBag count={cartItemsQty} />
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

const NavLink: React.FC<AccountNavLinkProps> = ({ href, route, children }) => {
   const active = href === route;

   return (
      <Link
         href={href}
         className={cn(
            "relative block w-full py-7 font-bold tracking-wide text-gray-900",
            "uppercase small-phones:px-3 small-phones:text-xs",
            {
               "before:absolute before:bottom-0 before:left-0 before:h-1.5 before:w-full before:bg-primary-700 before:content-['']":
                  active,
            },
         )}
      >
         {children}
      </Link>
   );
};
