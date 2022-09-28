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
            "w-full uppercase flex items-center justify-center text-sm font-semibold transition-colors duration-200 disabled:opacity-50 rounded-full disabled:bg-gray-900 disabled:hover:bg-gray-700 disabled:hover:text-white",
            {
               "text-white bg-gradient-to-r from-primary-600 to-primary-500 min-h-[40px] px-5 py-3 shadow-md shadow-primary-500/50 hover:bg-gradient-to-br":
                  variant === "primary",
               "text-primary-700 bg-primay-100 border-gray-920 hover:bg-primary-200":
                  variant === "secondary",
               "text-white bg-rose-600 hover:bg-rose-700 px-5 py-[10px]": variant === "danger",
               "text-white bg-primary-600 hover:bg-primary-500 px-2 py-0.5 text-xs capitalize":
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
