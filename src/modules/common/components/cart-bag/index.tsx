import Bag from "../../icons/bag";

interface Props {
   count: number;
}

const CartBag: React.FC<Props> = ({ count = 0 }) => {
   return (
      <button className="relative flex justify-center items-center ">
         <Bag size={40} />
         <span className="absolute top-4 text-sm font-semibold">{count.toString()}</span>
      </button>
   );
};

export default CartBag;
