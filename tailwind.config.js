/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/modules/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            display: ["Pally", "Comic Sans MS", "sans-serif"],
            body: ["Pally", "Comic Sans MS", "sans-serif"],
         },

         colors: {
            primary: {
               50: "#f5f3ff",
               100: "#ede9fe",
               200: "#ddd6fe",
               300: "#c4b5fd",
               400: "#a78bfa",
               500: "#8b5cf6",
               600: "#7c3aed",
               700: "#6d28d9",
               800: "#5b21b6",
               900: "#4c1d95",
            },
            secondary: {
               50: "#fff1f2",
               100: "#ffe4e6",
               200: "#fecdd3",
               300: "#fda4af",
               400: "#fb7185",
               500: "#f43f5e",
               600: "#e11d48",
               700: "#be123c",
               800: "#9f1239",
               900: "#881337",
            },
         },
      },
   },
   safelist: ["bg-red-400", "bg-green-400"],
   plugins: [],
};
