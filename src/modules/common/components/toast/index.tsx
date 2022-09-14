import { useErrorMessage } from "@/lib/context/global-states/useErrorMessage";
import { GetToastClassNameFn } from "@/types/global";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const Toast: React.FC & {
   Error: React.FC;
} = () => {
   const getToastClassName: GetToastClassNameFn = context => {
      return `bg-red-400 relative flex p-1 py-2 m-4 rounded-md justify-between overflow-hidden cursor-pointer`;
   };

   return (
      <ToastContainer
         draggablePercent={60}
         toastClassName={getToastClassName}
         closeButton={false}
         autoClose={false}
      />
   );
};

const Error: React.FC = () => {
   const { errorMessage, setErrorMessage } = useErrorMessage(state => state);

   useEffect(() => {
      if (errorMessage) {
         toast.error(errorMessage, { position: toast.POSITION.BOTTOM_LEFT });

         setErrorMessage("");
      }
   }, [errorMessage, setErrorMessage]);

   return <Toast />;
};

Toast.Error = Error;

export default Toast;
