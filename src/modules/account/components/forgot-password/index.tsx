import { Field } from "@/lib/constants/global";
import { FormErrorMessage, SuccessMessage } from "@/lib/constants/message";
import { useForgotPasswordMutation } from "@/lib/generated/graphql";
import Button from "@/modules/common/components/button";
import Input from "@/modules/common/components/input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthFormWrapper from "../auth-form-wrapper";

interface ForgotPasswordCredentials {
   email: string;
}

const ForgotPassword = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
   } = useForm<ForgotPasswordCredentials>();
   const [forgotPassword, { loading: forgotPasswordLoading }] = useForgotPasswordMutation({
      onCompleted: async data => {
         if (data.forgotPassword.error?.field === Field.EMAIL) {
            setError(Field.EMAIL, { message: data.forgotPassword.error.message });
            return;
         }
         if (data.forgotPassword.success) {
            toast.success(SuccessMessage.EMAIL_SENT);
         }
      },
      onError: () => {},
   });

   const onSubmit = handleSubmit(async credentials => {
      await forgotPassword({
         variables: { email: credentials.email },
      });
   });

   return (
      <AuthFormWrapper subtitle="Please enter your email to change password.">
         <form className="w-full" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-2">
               <Input
                  label="Email"
                  {...register(Field.EMAIL, { required: FormErrorMessage.EMAIL_REQUIRED })}
                  autoComplete="email"
                  errors={errors}
                  key={Field.EMAIL}
               />
            </div>
            <Button type="submit" className="mt-8" isLoading={forgotPasswordLoading}>
               Continue
            </Button>
         </form>
      </AuthFormWrapper>
   );
};

export default ForgotPassword;
