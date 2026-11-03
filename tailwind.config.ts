import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0071e3",
          hover: "#005bb8",
          soft: "#eaf3fd",
          ring: "#b9d6f6",
        },
        canvas: "#f8fafc",
        navy: {
          DEFAULT: "#14213D",
          light: "#1D2D50",
          dark: "#0C1425",
        },
        gold: {
          DEFAULT: "#C9A227",
          hover: "#B38E1E",
          light: "#F7F1DE",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(16, 24, 40, 0.04)",
        lift: "0 8px 24px -8px rgba(16, 24, 40, 0.12)",
        modal: "0 24px 48px -12px rgba(16, 24, 40, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
