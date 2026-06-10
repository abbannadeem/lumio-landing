import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand — deep forest. Used for type, surfaces, and dark mode canvas.
        brand: {
          50: "#F1F6F3",
          100: "#DCE8E0",
          200: "#B6D0BD",
          300: "#86B193",
          400: "#558E6A",
          500: "#2F6E48",
          600: "#1F5638",
          700: "#16462D",
          800: "#0E3B2E", // signature forest
          900: "#0A2A21",
        },
        // Signature accent — ochre / amber-gold. CTAs, highlights, data viz.
        accent: {
          50: "#FBF6EA",
          100: "#F6EAC8",
          200: "#EFD493",
          300: "#E5BB68",
          400: "#D4A24C", // signature ochre
          500: "#B9853A",
          600: "#956A2D",
          700: "#735224",
          800: "#553D1B",
          900: "#3B2A13",
        },
        // Warm neutral — replaces cold slate. Used for body bg, cards.
        cream: {
          50: "#FBF8F1",
          100: "#F5EDD8", // signature cream
          200: "#EBE0C2",
          300: "#DDD0AC",
          400: "#C7B98F",
          500: "#A89A73",
          600: "#857857",
          700: "#615640",
          800: "#3F3829",
          900: "#211D15",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      backgroundImage: {
        // Editorial gradient — forest deepening, with a warm ochre kiss at the bottom right.
        "brand-gradient":
          "radial-gradient(120% 80% at 85% 100%, rgba(212,162,76,0.35) 0%, rgba(14,59,46,0) 45%), linear-gradient(135deg, #0E3B2E 0%, #16462D 55%, #1F5638 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #F5EDD8 0%, #F1F6F3 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #D4A24C 0%, #B9853A 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(14, 59, 46, 0.18)",
        glow: "0 0 50px -10px rgba(212, 162, 76, 0.45)",
        card: "0 1px 2px rgba(14, 59, 46, 0.05), 0 10px 30px -16px rgba(14, 59, 46, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-bar": {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.6)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
