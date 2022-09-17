import { Field } from "@/lib/constants/global";
import { FormErrorMessage, SuccessMessage } from "@/lib/constants/message";
import { useAccount } from "@/lib/context/account-context";
import { useChangePasswordMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import Input from "@/modules/common/components/input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthFormWrapper from "../auth-form-wrapper";

interface ChangePasswordCredentials {
   password: string;
}

const ChangePassword = () => {
   const { refetchUser } = useAccount();
   const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
   } = useForm<ChangePasswordCredentials>();
   const [hasTokenError, setTokenError] = useState(false);

   const { query } = useRouter();

   const [changePassword, { loading: changePasswordLoading }] = useChangePasswordMutation({
      onCompleted: async data => {
         if (data.changePassword.error?.field === Field.PASSWORD) {
            setError(Field.PASSWORD, { message: data.changePassword.error.message });
            return;
         } else if (data.changePassword.error?.field === Field.TOKEN) {
            setTokenError(true);
            return;
         }

         if (data.changePassword.success) {
            await refetchUser();
            toast.success(SuccessMessage.CHANGE_PASSWORD_SUCCESS);
         }
      },
      onError: () => {},
   });

   const onSubmit = handleSubmit(async credentials => {
      await changePassword({
         variables: { input: { token: query.token as string, newPassword: credentials.password } },
      });
   });

   return (
      <AuthFormWrapper subtitle="Please enter new password">
         <form className="w-full" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-2">
               <Input
                  label="Password"
                  {...register(Field.PASSWORD, {
                     required: FormErrorMessage.PASSWORD_REQUIRED,
                     minLength: { value: 4, message: FormErrorMessage.PASSWORD_GT_4 },
                  })}
                  autoComplete="password"
                  type="password"
                  errors={errors}
                  key={Field.EMAIL}
               />
            </div>
            <Button type="submit" className="mt-8" isLoading={changePasswordLoading}>
               Continue
            </Button>
         </form>
         {hasTokenError && (
            <div className="mt-4">
               <span className="text-gray-500">
                  Retry again?
                  <Link href="/account/forgot-password">
                     <a className="underline">Click here</a>
                  </Link>
               </span>
            </div>
         )}
      </AuthFormWrapper>
   );
};

export default ChangePassword;
