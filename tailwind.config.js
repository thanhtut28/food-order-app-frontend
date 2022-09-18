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
            // background: "#f2f0eb",
            primary: {
               light: {
                  DEFAULT: "#006241",
                  50: "#6CFFCE",
                  100: "#58FFC7",
                  200: "#2FFFB9",
                  300: "#06FFAB",
                  400: "#00DC92",
                  500: "#008B5C",
                  600: "#00754A",
                  700: "#1E3932",
                  800: "#002A1C",
                  900: "#00140e",
               },
               dark: {
                  DEFAULT: "#1E3932",
                  50: "#98C9BC",
                  100: "#8AC2B3",
                  200: "#70B3A2",
                  300: "#56A490",
                  400: "#488978",
                  500: "#3A6E61",
                  600: "#2C5449",
                  700: "#1E3932",
                  800: "#0B1412",
                  900: "#000000",
               },
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
   safelist: ["bg-red-400", "bg-primary-light-500"],
   plugins: [],
};
