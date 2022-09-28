import { toastClass } from "@/lib/constants/global";
import { GetToastClassNameFn } from "@/types/global";
import { toast, ToastContainer } from "react-toastify";

const Toast: React.FC & {
   // Error: React.FC;
   // Success: React.FC;
} = () => {
   const getToastClassName: GetToastClassNameFn = context => {
      return `${
         toastClass[context?.type || "default"]
      } relative flex p-1 py-2 m-4 rounded-md justify-between overflow-hidden cursor-pointer`;
   };

   return (
      <ToastContainer
         draggablePercent={60}
         toastClassName={getToastClassName}
         closeButton={true}
         hideProgressBar={true}
         position={toast.POSITION.BOTTOM_LEFT}
         autoClose={false}
      />
   );
};

export default Toast;
