import { ErrorMessage } from "@hookform/error-message";
import { forwardRef, useRef, useImperativeHandle, useState, useEffect } from "react";
import { get } from "react-hook-form";
import Eye from "@/modules/common/icons/eye";
import EyeOff from "@/modules/common/icons/eye-off";
import cn from "@/lib/utils/classname";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> & {
   label: string;
   errors?: Record<string, unknown>;
   // touched?: Record<string, unknown>;
   name: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
   ({ type, name, label, errors, required, ...props }, ref) => {
      const inputRef = useRef<HTMLInputElement>(null);
      const [showPassword, setShowPassword] = useState<boolean>(false);
      const [inputType, setInputType] = useState(type);

      useEffect(() => {
         // if (type === "password" && showPassword) {
         //    setInputType("text");
         // }
         // if (type === "password" && !showPassword) {
         //    setInputType("password");
         // }
         if (type === "password") {
            if (showPassword) {
               setInputType("text");
            } else {
               setInputType("password");
            }
         }
      }, [showPassword, type]);

      useImperativeHandle(ref, () => inputRef.current!);

      const hasError = get(errors, name);

      const handleToggleShowPassword = () => {
         setShowPassword(prev => !prev);
      };

      return (
         <div>
            <div className="relative z-0 w-full text-base">
               <input
                  type={inputType}
                  name={name}
                  placeholder=" "
                  className={cn(
                     `peer mt-0 block w-full appearance-none rounded-full border-2 border-gray-600 bg-transparent py-3 px-4 text-gray-700 outline-none transition-all duration-200 focus:border-primary-600 focus:caret-primary-600 focus:outline-none focus:ring-primary-600`,
                     {
                        "border-rose-500 focus:border-rose-500 focus:caret-rose-500": hasError,
                     },
                  )}
                  {...props}
                  ref={inputRef}
               />
               <label
                  htmlFor={name}
                  onClick={() => inputRef.current?.focus()}
                  className={cn(
                     `absolute top-4 mx-4 text-sm font-semibold text-gray-500 transition-all duration-300`,
                     {
                        "text-rose-500": hasError,
                        "peer-focus:text-primary-600": !hasError,
                     },
                  )}
               >
                  {label}
                  {required && <span className="text-rose-400">*</span>}
               </label>
               {type === "password" && (
                  <button
                     type="button"
                     //type button makes the button focusable
                     onClick={handleToggleShowPassword}
                     className="absolute right-0 top-4 px-4 text-gray-400 outline-none transition-all duration-150 focus:text-primary-600 focus:outline-none"
                  >
                     {showPassword ? <Eye /> : <EyeOff />}
                  </button>
               )}
            </div>
            {hasError && (
               <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => (
                     <div className="pt-1 pl-2 text-sm text-rose-500">
                        <span>{message}</span>
                     </div>
                  )}
               />
            )}
         </div>
      );
   },
);

Input.displayName = "Input";

export default Input;
