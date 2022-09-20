import { Field } from "@/lib/constants/global";
import { FormErrorMessage, SuccessMessage } from "@/lib/constants/message";
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context";
import { useSignInMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import Input from "@/modules/common/components/input";
import Link from "next/link";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import AuthFormWrapper from "../auth-form-wrapper";

interface LoginCredentials extends FieldValues {
   email: string;
   password: string;
}

const Login = () => {
   const { loginView, refetchUser } = useAccount();
   const [_, setCurrentView] = loginView;
   const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
   } = useForm<LoginCredentials>();
   const [signIn, { loading: signingIn }] = useSignInMutation({
      onCompleted: async data => {
         if (data?.signIn?.error?.field === Field.EMAIL) {
            setError(Field.EMAIL, { message: data.signIn.error.message });
            return;
         } else if (data?.signIn?.error?.field === Field.PASSWORD) {
            setError(Field.PASSWORD, { message: data.signIn.error.message });
            return;
         }

         await refetchUser().catch(() => {});
         toast.success(SuccessMessage.SIGN_IN_SUCCESS);
      },
      onError: () => {},
   });

   const onSubmit = handleSubmit(async credentials => {
      await signIn({
         variables: { input: { email: credentials.email, password: credentials.password } },
      });
   });

   return (
      <AuthFormWrapper subtitle="Please sign in to purchase from our shop.">
         <form className="w-full" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-3">
               <Input
                  label="Email"
                  {...register(Field.EMAIL, { required: FormErrorMessage.EMAIL_REQUIRED })}
                  autoComplete="email"
                  errors={errors}
                  key={Field.EMAIL}
               />
               <Input
                  label="Password"
                  {...register(Field.PASSWORD, {
                     required: FormErrorMessage.PASSWORD_REQUIRED,
                     minLength: { value: 4, message: FormErrorMessage.PASSWORD_GT_4 },
                  })}
                  autoComplete="current-password"
                  type="password"
                  errors={errors}
                  key="password"
               />
            </div>
            <Button type="submit" className="mt-8" isLoading={signingIn}>
               Sign In
            </Button>
         </form>
         <div className="mt-4 flex justify-between">
            <span className="text-gray-500 text-sm">
               Not Registered?{" "}
               <button onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)} className="underline">
                  Join us
               </button>
            </span>

            <span className="text-gray-500 text-sm">
               <Link href="/account/forgot-password">
                  <a className="underline">Forgot Password?</a>
               </Link>
            </span>
         </div>
      </AuthFormWrapper>
   );
};

export default Login;
