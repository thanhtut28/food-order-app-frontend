import Link from "next/link";

interface Props {
   subtitle: string;
   children: React.ReactNode;
}

const AuthFormWrapper: React.FC<Props> = ({ subtitle, children }) => {
   return (
      <div className="w-full max-w-md mx-auto flex justify-center px-4">
         <div className="max-w-md w-full ">
            <Link href="/" legacyBehavior>
               <h1 className="text-2xl text-primary-600 font-bold capitalize mb-6 cursor-pointer">
                  Food Delivery App
               </h1>
            </Link>

            <p className="text-sm text-gray-500 mb-8">{subtitle}</p>
            {children}
         </div>
      </div>
   );
};

export default AuthFormWrapper;

// flex flex-col items-center bg-white border border-gray-200 p-8 rounded-lg m-4
