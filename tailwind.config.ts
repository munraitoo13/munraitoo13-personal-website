import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      backgroundImage: {
        "radial-custom":
          "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",

        "radial-custom-dark":
          "radial-gradient(circle, #101010 1px, transparent 1px)",
      },
      backgroundSize: {
        "16": "16px 16px",
      },
    },
  },
};

export default config;
