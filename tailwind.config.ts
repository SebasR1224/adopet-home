import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#5B53D1",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
} satisfies Config;
