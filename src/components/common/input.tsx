import cn from "classnames";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
   label: string;
   error: boolean;
   errorMessage: string;
}

const Input = ({ type, placeholder, label, error, errorMessage, onChange, value }: InputProps) => {
   return (
      <label className="block py-2">
         <span className="text-gray-900 font-semibold">{label}</span>
         <input
            type={type}
            className={cn(
               "mt-4 block w-full outline-none shadow-sm sm:text-sm rounded-md h-10 pl-3 placeholder:text-gray-400",
               {
                  "focus:ring-pink-500 focus:border-pink-500 ring-pink-500 border-pink-500": error,
                  "focus:ring-indigo-500 focus:border-indigo-500": !error,
               }
            )}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
         />
         <div className="py-2">
            <span className="text-base text-red-400">{errorMessage}</span>
         </div>
      </label>
   );
};

export default Input;
