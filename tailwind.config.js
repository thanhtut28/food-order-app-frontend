/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/modules/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            // sans: ["Pally", "Comic Sans MS", "sans-serif"],
            // body: ["Pally", "Comic Sans MS", "sans-serif"],
            sans: ["Inter var", ...defaultTheme.fontFamily.sans],
         },
         screens: {
            "small-phones": { max: "400px" },
         },

         colors: {
            // background: "#f2f0eb",
            // primary: {
            //    light: {
            //       DEFAULT: "#006241",
            //       50: "#6CFFCE",
            //       100: "#58FFC7",
            //       200: "#2FFFB9",
            //       300: "#06FFAB",
            //       400: "#00DC92",
            //       500: "#008B5C",
            //       600: "#00754A",
            //       700: "#1E3932",
            //       800: "#002A1C",
            //       900: "#00140e",
            //    },
            //    dark: {
            //       DEFAULT: "#1E3932",
            //       50: "#98C9BC",
            //       100: "#8AC2B3",
            //       200: "#70B3A2",
            //       300: "#56A490",
            //       400: "#488978",
            //       500: "#3A6E61",
            //       600: "#2C5449",
            //       700: "#1E3932",
            //       800: "#0B1412",
            //       900: "#000000",
            //    },
            // },
            primary: {
               DEFAULT: "#f49d0c",
               50: "#fffbeb",
               100: "#fef3c7",
               200: "#fde58a",
               300: "#fbd24e",
               400: "#fabe25",
               500: "#f49d0c",
               600: "#d87607",
               700: "#bc560a",
               800: "#923f0e",
               900: "#78340f",
            },

            secondary: {
               DEFAULT: "#6374ae",
               50: "#f5f6fa",
               100: "#eaebf4",
               200: "#d0d4e7",
               300: "#a6b0d3",
               400: "#7686ba",
               500: "#6374ae",
               600: "#414f88",
               700: "#36406e",
               800: "#30395c",
               900: "#2c324e",
            },
         },
      },
   },
   safelist: ["bg-red-200", "bg-primary-200", "text-primary-700", "text-red-700"],
   plugins: [],
};
