import { useErrorMessage } from "@/context/global-states/useErrorMessage";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function ErrorHandler() {
   const { errorMessage, setErrorMessage } = useErrorMessage(state => state);

   useEffect(() => {
      if (errorMessage) {
         toast.error(errorMessage, { position: toast.POSITION.BOTTOM_LEFT });

         setErrorMessage("");
      }
   }, [errorMessage, setErrorMessage]);

   return (
      <ToastContainer
         draggablePercent={60}
         toastClassName={() =>
            "bg-red-400 relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
         }
         closeButton={false}
      />
   );
}

export default ErrorHandler;
