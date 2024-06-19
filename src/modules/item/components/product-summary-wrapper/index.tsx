import cn from "@/lib/utils/classname";

interface Props {
   children: React.ReactNode;
}

const ProductDetailsWrapper: React.FC<Props> = ({ children }) => {
   return (
      <div className="flex flex-col lg:flex-1">
         <div
            className={cn(
               "flex w-full flex-1 flex-col justify-between rounded-t-3xl rounded-b-none bg-white px-6 pt-12 pb-6 shadow-sm",
               "sm:mx-auto sm:max-w-lg sm:rounded-b-3xl sm:px-12 sm:py-6",
               "",
            )}
         >
            {children}
         </div>
      </div>
   );
};

export default ProductDetailsWrapper;
