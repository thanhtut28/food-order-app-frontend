import classname from "classnames";

import { twMerge } from "tailwind-merge";

export default function cn(...inputs: any[]) {
   return twMerge(classname(inputs));
}
