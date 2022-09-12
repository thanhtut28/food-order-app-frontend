import AuthProtector from "@/auth/auth-protector";
import type { NextPage } from "next";

const Home: NextPage = () => {
   return (
      <AuthProtector>
         <h1>Home Page</h1>
      </AuthProtector>
   );
};

export default Home;
