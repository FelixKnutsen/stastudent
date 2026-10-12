import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sta: {
          teal: {
            DEFAULT: "#0e4c47",
            50: "#eaf5f4",
            100: "#cde7e4",
            200: "#9ecfc9",
            300: "#69b3ab",
            400: "#3d948b",
            500: "#0e4c47",
            600: "#0b3e3a",
            700: "#09322f",
            800: "#072624",
            900: "#041817",
          },
          orange: {
            DEFAULT: "#ef7330",
            50: "#fff6f0",
            100: "#fee9dd",
            200: "#fcd3bc",
            300: "#f8b48f",
            400: "#f38e55",
            500: "#ef7330",
            600: "#d95716",
            700: "#ab4010",
            800: "#7c2e0e",
            900: "#501e0a",
          },
          dark: "#1a1f24",
          light: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
