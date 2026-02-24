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
          50: "#f5f7fb",
          100: "#e6edf6",
          200: "#c7d5ea",
          300: "#9fb3d6",
          400: "#6f86b8",
          500: "#4f679d",
          600: "#3e507c",
          700: "#2f3e60",
          800: "#1b263b",
          900: "#0f1624",
        },
        accent: "#c9a86a",
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
