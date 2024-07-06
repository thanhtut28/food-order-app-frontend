import { Field } from "@/lib/constants/global";
import { FormErrorMessage, SuccessMessage } from "@/lib/constants/message";
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context";
import { GetCartDocument, MeDocument, useSignUpMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import Input from "@/modules/common/components/input";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import AuthFormWrapper from "../auth-form-wrapper";

interface RegisterCredentials extends FieldValues {
   email: string;
   username: string;
   password: string;
}

const Register = () => {
   const { loginView } = useAccount();
   const [_, setCurrentView] = loginView;
   const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
   } = useForm<RegisterCredentials>();
   const [signUp, { loading: signingUp }] = useSignUpMutation({
      refetchQueries: [GetCartDocument, MeDocument],
      onCompleted: async data => {
         if (data?.signUp?.error?.field === Field.EMAIL) {
            setError(Field.EMAIL, { message: data.signUp.error.message });
            return;
         } else if (data?.signUp?.error?.field === Field.USERNAME) {
            setError(Field.USERNAME, { message: data.signUp.error.message });
            return;
         } else if (data?.signUp?.error?.field === Field.PASSWORD) {
            setError(Field.PASSWORD, { message: data.signUp.error.message });
            return;
         }
         setCurrentView(LOGIN_VIEW.SIGN_IN);
         toast.success(SuccessMessage.SIGN_UP_SUCCESS);
      },
      onError: () => {},
   });

   const onSubmit = handleSubmit(async credentials => {
      await signUp({
         variables: {
            input: {
               email: credentials.email,
               password: credentials.password,
               username: credentials.username,
            },
         },
      });
   });

   return (
      <AuthFormWrapper subtitle="Please register a new account to purchase from our shop.">
         <form className="w-full" onSubmit={onSubmit}>
            <div className="flex w-full flex-col gap-3">
               <Input
                  label="Email"
                  {...register(Field.EMAIL, { required: FormErrorMessage.EMAIL_REQUIRED })}
                  autoComplete="email"
                  errors={errors}
                  key={Field.EMAIL}
               />
               <Input
                  label="Username"
                  {...register(Field.USERNAME, {
                     required: FormErrorMessage.EMAIL_REQUIRED,
                     minLength: { value: 4, message: FormErrorMessage.USERNAME_GT_4 },
                  })}
                  autoComplete="username"
                  errors={errors}
                  key={Field.USERNAME}
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
            <Button type="submit" className="mt-8" isLoading={signingUp}>
               Sign Up
            </Button>
         </form>
         <div className="mt-6">
            <span className="text-xs text-gray-500">
               Already have an account?{" "}
               <button onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)} className="underline">
                  Sign In
               </button>
            </span>
         </div>
      </AuthFormWrapper>
   );
};

export default Register;
