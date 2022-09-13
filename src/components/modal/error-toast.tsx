import { useErrorMessage } from "@/context/global-states/useErrorMessage";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Toast from "./toast";

const ErrorToast = () => {
   const { errorMessage, setErrorMessage } = useErrorMessage(state => state);

   useEffect(() => {
      if (errorMessage) {
         toast.error(errorMessage, { position: toast.POSITION.BOTTOM_LEFT });

         setErrorMessage("");
      }
   }, [errorMessage, setErrorMessage]);

   return <Toast />;
};

export default ErrorToast;
