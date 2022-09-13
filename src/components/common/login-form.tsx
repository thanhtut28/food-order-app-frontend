import { Field } from "@/constants/global";
import { SignInMutation } from "@/generated/graphql";
import { useInput } from "@/lib/hooks/useInput";
import { ChangeEvent, useState } from "react";
import Input from "./input";

interface Props {
   handleSignIn: (
      email: string,
      password: string
   ) => Promise<SignInMutation["signIn"]> | null | undefined;
}

const LoginForm: React.FC<Props> = ({ handleSignIn }) => {
   const {
      value: email,
      handleChange: handleChangeEmail,
      hasError: emailError,
      setHasError: setEmailError,
      errorMessage: emailErrorMsg,
      setErrorMessage: setEmailErrorMsg,
   } = useInput();

   const {
      value: password,
      handleChange: handleChangePassword,
      hasError: passwordError,
      setHasError: setPasswordError,
      errorMessage: passwordErrorMsg,
      setErrorMessage: setPasswordErrorMsg,
   } = useInput();

   const handleSubmitForm = async () => {
      const data = await handleSignIn(email, password);
      if (data?.error?.field === Field.EMAIL) {
         setEmailError(true);
         setEmailErrorMsg(data.error.message);
      } else if (data?.error?.field === Field.PASSWORD) {
         setPasswordError(true);
         setPasswordErrorMsg(data.error.message);
      }
   };

   return (
      <div className="flex flex-col">
         <Input
            errorMessage={emailErrorMsg}
            error={emailError}
            label={Field.EMAIL}
            value={email}
            onChange={handleChangeEmail}
         />
         <Input
            errorMessage={passwordErrorMsg}
            error={passwordError}
            label={Field.PASSWORD}
            value={password}
            onChange={handleChangePassword}
         />
         <button onClick={handleSubmitForm}>submit</button>
      </div>
   );
};

export default LoginForm;
