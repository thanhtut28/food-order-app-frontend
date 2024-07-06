import cn from "@/lib/utils/classname";

interface Props {
   children: React.ReactNode;
}

const ProductContainer: React.FC<Props> = ({ children }) => {
   return (
      <div className="mx-auto flex max-w-screen-2xl flex-col bg-primary-200 pt-6 pb-0 sm:px-4 sm:pb-6">
         <section
            className={cn("flex flex-1 flex-col items-stretch gap-10", "lg:flex-row lg:gap-0")}
         >
            {children}
         </section>
      </div>
   );
};

export default ProductContainer;
