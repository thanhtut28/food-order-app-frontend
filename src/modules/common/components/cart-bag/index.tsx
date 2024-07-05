import { useAccount } from "@/lib/context/account-context";
import Bag from "../../icons/bag";
import { useCart } from "@/lib/context/cart-context";
import { ErrorMessage } from "@/lib/constants/message";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
   count: number;
}

const CartBag: React.FC<Props> = ({ count = 0 }) => {
   const router = useRouter();
   const { me } = useAccount();
   const { cartId } = useCart();

   const handleNavigateCart = () => {
      if (!me || !cartId) {
         toast.error(ErrorMessage.NOT_AUTHORIZED);
         router.push("/account/login");
         return;
      }
      router.push("/cart");
   };

   return (
      <button className="relative flex items-center justify-center" onClick={handleNavigateCart}>
         <Bag size={40} />
         <span className="absolute top-4 text-sm font-semibold">{count.toString()}</span>
      </button>
   );
};

export default CartBag;
