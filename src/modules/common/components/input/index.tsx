import { ErrorMessage } from "@hookform/error-message";
import cn from "classnames";
import { forwardRef, useRef, useImperativeHandle, useState, useEffect } from "react";
import { get } from "react-hook-form";
import Eye from "@/modules/common/icons/eye";
import EyeOff from "@/modules/common/icons/eye-off";

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
         if (type === "password" && showPassword) {
            setInputType("text");
         }
         if (type === "password" && !showPassword) {
            setInputType("password");
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
                     `peer py-3 block w-full outline-none px-4 transition-all duration-200 mt-0 bg-transparent border-2 rounded-md appearance-none focus:outline-none focus:ring-primary-light-600 focus:border-primary-light-600 border-gray-600`,
                     {
                        "border-rose-400 focus:border-rose-400": hasError,
                     }
                  )}
                  {...props}
                  ref={inputRef}
               />
               <label
                  htmlFor={name}
                  onClick={() => inputRef.current?.focus()}
                  className={cn(
                     `mx-3 px-1 transition-all absolute duration-300 top-3 text-gray-500`,
                     {
                        "text-rose-400": hasError,
                        "peer-focus:text-primary-light-600": !hasError,
                     }
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
                     className="text-gray-400 px-4 focus:outline-none transition-all duration-150 outline-none focus:text-primary-light-600 absolute right-0 top-4"
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
                     <div className="pt-1 pl-2 text-rose-400 text-sm">
                        <span>{message}</span>
                     </div>
                  )}
               />
            )}
         </div>
      );
   }
);

Input.displayName = "Input";

export default Input;
