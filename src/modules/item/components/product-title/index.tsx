import cn from "@/lib/utils/classname";

interface Props {
   title: string;
}

const ProductTitle: React.FC<Props> = ({ title }) => {
   return (
      <h4 className={cn("text-2xl font-bold uppercase text-gray-800", "md:text-3xl")}>{title}</h4>
   );
};

export default ProductTitle;
