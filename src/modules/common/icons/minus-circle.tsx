import React from "react";
import { IconProps } from "@/types/icon";

const Minus: React.FC<IconProps> = ({ size = "20", color = "currentColor", ...attributes }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke={color}
         strokeWidth={1.5}
         width={size}
         height={size}
         {...attributes}
      >
         <path
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
         />
      </svg>
   );
};

export default Minus;
