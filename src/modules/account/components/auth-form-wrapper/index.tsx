import Link from "next/link";

interface Props {
   subtitle: string;
   children: React.ReactNode;
}

const AuthFormWrapper: React.FC<Props> = ({ subtitle, children }) => {
   return (
      <div className="w-full flex justify-center py-32">
         <div className="max-w-md w-full flex flex-col items-center bg-white border border-gray-200 p-8 rounded-lg m-4">
            <Link href="/account/profile">
               <h1 className="text-2xl text-primary-light-600 font-semibold uppercase mb-6 cursor-pointer">
                  Food Delivery App
               </h1>
            </Link>

            <p className="text-center text-base text-gray-500 mb-8">{subtitle}</p>
            {children}
         </div>
      </div>
   );
};

export default AuthFormWrapper;
