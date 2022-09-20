import cn from "classnames";

interface Props {
   children: React.ReactNode;
}

const AuthenticationLayout: React.FC<Props> = ({ children }) => {
   return (
      <div className="relative flex justify-center md:px-12 lg:px-0">
         <div
            className={cn("max-w-xl w-full z-10 bg-white py-32", "min-h-[100vh] flex items-center")}
         >
            {children}
         </div>
         <div
            className={cn(
               "hidden flex-1 col-span-5 w-full min-h-[100vh] bg-primary-dark-700",
               "sm:block sm:absolute sm:top-0 sm:left-0",
               "lg:relative lg:block"
            )}
         />
      </div>
   );
};

export default AuthenticationLayout;
