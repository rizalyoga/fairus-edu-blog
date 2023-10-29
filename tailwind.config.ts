import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        title: "4rem",
        "title-section": "2.5rem",
        "title-sub-section": "1.4rem",
        "base-text": "1.2rem",
      },
      colors: {
        // Configure your color palette here
        ...colors,
        "primary-violet": "#6B5CF6",
        "primary-green": "#95D354",
        "primary-pink": "#EE71C7",
        "primary-cyan": "#50C4EE",
        "primary-text": "#333333",
        "secondary-violet": "#F1F0FF",
        "secondary-text": "#929199",
        "sub-page": "#FBF8FE",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
