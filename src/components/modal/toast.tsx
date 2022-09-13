import { ToastContainer, ToastPosition, TypeOptions } from "react-toastify";

type GetToastClassNameFn = (
   context?:
      | {
           type?: TypeOptions | undefined;
           defaultClassName?: string | undefined;
           position?: ToastPosition | undefined;
           rtl?: boolean | undefined;
        }
      | undefined
) => string;

function Toast() {
   const getToastClassName: GetToastClassNameFn = context => {
      return `bg-red-400 relative flex p-1 m-4 h-14 rounded-md justify-between overflow-hidden cursor-pointer`;
   };

   return (
      <ToastContainer
         draggablePercent={60}
         toastClassName={getToastClassName}
         closeButton={false}
         autoClose={false}
      />
   );
}

export default Toast;
