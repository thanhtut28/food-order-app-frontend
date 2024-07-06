import React from "react";
import { IconProps } from "@/types/icon";

const Check: React.FC<IconProps> = ({ size = "20", color = "currentColor", ...attributes }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         width={size}
         height={size}
         strokeWidth={1.5}
         stroke={color}
         {...attributes}
      >
         <path
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
         />
      </svg>
   );
};

export default Check;
