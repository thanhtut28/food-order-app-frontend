import cn from "classnames";
import React from "react";
import Spinner from "../../icons/spinner";

type ButtonProps = {
   isLoading?: boolean;
   variant?: "primary" | "secondary" | "danger" | "primary-action" | "secondary-action";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
   children,
   className,
   isLoading = false,
   variant = "primary",
   ...props
}: ButtonProps) => {
   return (
      <button
         {...props}
         disabled={isLoading}
         className={cn(
            "w-full uppercase flex items-center justify-center text-sm border transition-colors duration-200 disabled:opacity-50 rounded-md disabled:bg-gray-900 disabled:hover:bg-gray-600 disabled:hover:text-white",
            {
               "text-white bg-primary-700 hover:bg-primary-600 min-h-[40px] px-5 py-[10px]":
                  variant === "primary",
               "text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100":
                  variant === "secondary",
               "text-white bg-rose-600 hover:bg-rose-700 px-5 py-[10px]": variant === "danger",
               "text-white bg-primary-700 hover:bg-primary-600 px-2 py-0.5 text-xs capitalize":
                  variant === "primary-action",
               "!text-black text-xs capitalize border-0 px-2 py-1 hover:bg-gray-100":
                  variant === "secondary-action",
            },
            className
         )}
      >
         {isLoading ? <Spinner /> : children}
      </button>
   );
};

export default Button;
