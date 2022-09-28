import React from "react";
import { IconProps } from "@/types/icon";

const Plus: React.FC<IconProps> = ({ size = "20", color = "currentColor", ...attributes }) => {
   return (
      <svg
         width={size}
         height={size}
         strokeWidth={1.5}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         {...attributes}
      >
         <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
         />
      </svg>
   );
};

export default Plus;
