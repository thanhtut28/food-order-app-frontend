import { NextPage } from "next";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
   const { replace, query } = useRouter();

   return (
      <button
         className="h-10 px-6 m-10 font-semibold rounded-full bg-violet-600 text-white"
         onClick={() => {
            if (typeof query.next === "string") {
               replace(query.next);
            } else {
               replace("/");
            }
         }}
      >
         Buy now
      </button>
   );
};

export default LoginPage;
