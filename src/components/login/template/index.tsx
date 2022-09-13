import { useSignInMutation } from "@/generated/graphql";
import LoginForm from "@/components/common/login-form";

const LoginTemplate = () => {
   const [signIn] = useSignInMutation();

   const handleSignIn = async (email: string, password: string) => {
      const { data } = await signIn({ variables: { input: { email, password } } });

      return data?.signIn;
   };

   return (
      <div className="min-h-full w-full flex justify-center items-center">
         <LoginForm handleSignIn={handleSignIn} />
      </div>
   );
};

export default LoginTemplate;
