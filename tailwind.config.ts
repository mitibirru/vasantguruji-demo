import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFCF5",
        surface: "#FFF7ED",
        card: "#FFFFFF",
        foreground: "#1E1710",
        "muted-foreground": "#6B5E4F",
        primary: {
          DEFAULT: "#D49B0D",
          light: "#FFF6DC",
          hover: "#B8860B",
          bright: "#F0B429",
        },
        devotion: {
          DEFAULT: "#C0392B",
          light: "#FDE8E6",
          hover: "#A33025",
          bright: "#E74C3C",
        },
        sage: {
          DEFAULT: "#27AE60",
          light: "#E8F8EF",
          hover: "#1E8E4E",
        },
        amber: {
          DEFAULT: "#E67E22",
          light: "#FFF2E0",
          bright: "#F39C12",
        },
        saffron: {
          DEFAULT: "#E8750A",
          light: "#FFF0E0",
        },
        sandalwood: {
          DEFAULT: "#D4B87A",
          light: "#FBF5E8",
        },
        border: "#EBE1D2",
        "border-light": "#F3ECE0",
        ring: "#D49B0D",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      borderRadius: {
        lg: "0.625rem",
        xl: "0.875rem",
        "2xl": "1rem",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "gentle-glow": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(212, 155, 13, 0.25)" },
          "50%": { boxShadow: "0 0 28px rgba(240, 180, 41, 0.5)" },
        },
        "diya-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.82" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.7s ease-out forwards",
        "gentle-glow": "gentle-glow 2.5s ease-in-out infinite",
        diya: "diya-flicker 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
