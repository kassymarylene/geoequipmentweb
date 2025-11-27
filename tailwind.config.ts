import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        bluePText: "#7D8FB3",
        blueCardTitle: "#4D5E80",
        blueCardSubTitle: "#ADB8CC",
        bgDark: "#17202a",
        cardText: "#6B7A99",
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: "#14b8a6",
      },
      boxShadow: {
        "brand-xl": "0 25px 70px rgba(2, 6, 23, 0.65)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
