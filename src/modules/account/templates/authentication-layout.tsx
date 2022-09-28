import cn from "classnames";

interface Props {
   children: React.ReactNode;
}

const AuthenticationLayout: React.FC<Props> = ({ children }) => {
   return (
      <div className="relative flex justify-center md:px-12 lg:px-0">
         <div className={cn("max-w-xl w-full z-10 bg-white min-h-screen flex items-center px-2")}>
            {children}
         </div>
         <div
            className={cn(
               "hidden flex-1 col-span-5 w-full min-h-screen bg-gradient-to-r from-primary-100 to-primary-50",
               "sm:block sm:absolute sm:top-0 sm:left-0",
               "lg:relative lg:block"
            )}
         />
      </div>
   );
};

export default AuthenticationLayout;
