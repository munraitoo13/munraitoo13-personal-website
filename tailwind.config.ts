import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "selector",

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "background-contrast": "hsl(var(--background-contrast))",

        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",

        accent: "hsl(var(--accent))",
        "accent-hover": "hsl(var(--accent-hover))",
        "accent-constrast": "hsl(var(--accent-contrast))",
        "accent-disabled": "hsl(var(--accent-disabled))",

        selection: "hsl(var(--selection))",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

export default config;
