import cn from "classnames";
import React from "react";
import Spinner from "../../icons/spinner";

type ButtonProps = {
   isLoading?: boolean;
   variant?: "primary" | "secondary" | "danger";
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
         className={cn(
            "w-full uppercase flex items-center justify-center min-h-[40px] px-5 py-[10px] text-sm border transition-colors duration-200 disabled:opacity-50 rounded-md disabled:bg-gray-900 disabled:hover:bg-gray-600 disabled:hover:text-white",
            {
               "text-white bg-primary-700 hover:bg-primary-600 ": variant === "primary",
               "text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100":
                  variant === "secondary",
               "text-white bg-rose-600 hover:bg-rose-700": variant === "danger",
            },
            className
         )}
      >
         {isLoading ? <Spinner /> : children}
      </button>
   );
};

export default Button;
