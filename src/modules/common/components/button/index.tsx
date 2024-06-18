import React from "react";
import Spinner from "../../icons/spinner";
import cn from "@/lib/utils/classname";

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
            "flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase text-white transition-colors duration-200 disabled:bg-gray-900 disabled:opacity-50 disabled:hover:bg-gray-700 disabled:hover:text-white",
            {
               "min-h-[40px] bg-gradient-to-r from-primary-600 to-primary-500 shadow-md shadow-primary-500/50 hover:bg-gradient-to-br":
                  variant === "primary",
               "bg-primary-100 text-primary-700 hover:bg-primary-200": variant === "secondary",
               "bg-rose-600 px-5 py-2.5 hover:bg-rose-700": variant === "danger",
               "bg-primary-600 px-2 py-0.5 text-xs capitalize hover:bg-primary-500":
                  variant === "primary-action",
               "border-0 px-2 py-1 text-xs capitalize !text-black hover:bg-gray-100":
                  variant === "secondary-action",
            },
            className,
         )}
      >
         {isLoading ? <Spinner /> : children}
      </button>
   );
};

export default Button;
