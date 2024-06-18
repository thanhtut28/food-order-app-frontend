import cn from "@/lib/utils/classname";

interface Props {
   children: React.ReactNode;
}

const AuthenticationLayout: React.FC<Props> = ({ children }) => {
   return (
      <div className="relative flex justify-center md:px-12 lg:px-0">
         <div className={cn("z-10 flex min-h-screen w-full max-w-xl items-center bg-white px-2")}>
            {children}
         </div>
         <div
            className={cn(
               "col-span-5 hidden min-h-screen w-full flex-1 bg-gradient-to-r from-primary-100 to-primary-50",
               "sm:absolute sm:top-0 sm:left-0 sm:block",
               "lg:relative lg:block",
            )}
         />
      </div>
   );
};

export default AuthenticationLayout;
