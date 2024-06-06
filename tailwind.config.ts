import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        bluePText: '#7D8FB3',
        blueCardTitle: '#4D5E80',
        blueCardSubTitle: '#ADB8CC',
        bgDark: '#17202a',
        cardText: '#6B7A99',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(),
  ],
};
export default config;
