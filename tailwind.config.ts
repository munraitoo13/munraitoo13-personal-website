import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "selector",

  theme: {
    colors: {
      text: "rgb(var(--text))",
      background: "rgb(var(--background))",
      primary: "rgb(var(--primary))",
      secondary: "rgb(var(--secondary))",
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

export default config;
