import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f2f5fa",
          100: "#e1e7f1",
          200: "#c3cee2",
          300: "#94a6c7",
          400: "#6079a6",
          500: "#3f5887",
          600: "#2d426b",
          700: "#223356",
          800: "#172440",
          900: "#0f1a30",
          950: "#0a1222",
        },
        gold: {
          50: "#fbf8f1",
          100: "#f4ecd9",
          200: "#e8d7ae",
          300: "#d9bd7f",
          400: "#c9a35a",
          500: "#b88b3f",
          600: "#9d7133",
          700: "#7e582c",
          800: "#664729",
          900: "#553b25",
        },
        ink: "#1c2230",
        paper: "#faf8f4",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1200px" },
    },
  },
  plugins: [],
};

export default config;
