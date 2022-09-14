import { Field } from "@/lib/constants/global";
import { FormErrorMessage } from "@/lib/constants/message";
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context";
import { useSignUpMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import Input from "@/modules/common/components/input";
import { useForm, FieldValues } from "react-hook-form";

interface RegisterCredentials extends FieldValues {
   email: string;
   username: string;
   password: string;
}

const Register = () => {
   const { loginView, refetchUser } = useAccount();
   const [_, setCurrentView] = loginView;
   const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
   } = useForm<RegisterCredentials>();
   const [signUp, { loading: signingIn }] = useSignUpMutation();

   const onSubmit = handleSubmit(async credentials => {
      const { data } = await signUp({
         variables: {
            input: {
               email: credentials.email,
               password: credentials.password,
               username: credentials.username,
            },
         },
      }).then(data => {
         refetchUser();
         return data;
      });
      if (data?.signUp?.error?.field === Field.EMAIL) {
         setError(Field.EMAIL, { message: data.signUp.error.message });
      } else if (data?.signUp?.error?.field === Field.USERNAME) {
         setError(Field.USERNAME, { message: data.signUp.error.message });
      } else if (data?.signUp?.error?.field === Field.PASSWORD) {
         setError(Field.PASSWORD, { message: data.signUp.error.message });
      }
   });

   return (
      <div className="max-w-sm w-full flex flex-col items-center">
         <h1 className="text-2xl text-primary-600 font-semibold uppercase mb-6">
            Food Delivery App
         </h1>
         <p className="text-center text-base text-gray-500 mb-8">
            Please register a new account to purchase from our shop.
         </p>
         <form className="w-full" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-2">
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
            <Button type="submit" className="mt-8" isLoading={signingIn}>
               Sign Up
            </Button>
         </form>
         <div className="mt-4">
            <span className="text-gray-500">
               Already have an account?{" "}
               <button onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)} className="underline">
                  Sign In
               </button>
            </span>
         </div>
      </div>
   );
};

export default Register;
