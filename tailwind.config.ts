import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#0A0A0A",
          900: "#0D0D0D",
          800: "#141414",
          700: "#1C1C1C",
          600: "#2A2A2A",
          500: "#3D3D3D",
        },
        copper: {
          DEFAULT: "#B8763E",
          light: "#D19B6B",
          dark: "#8B4A2B",
          patina: "#6F7D6E",
        },
        bone: {
          DEFAULT: "#EDE8E1",
          dim: "#A8A29B",
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-3%)" },
          "20%": { transform: "translate(3%,2%)" },
          "30%": { transform: "translate(-1%,3%)" },
          "40%": { transform: "translate(2%,-2%)" },
          "50%": { transform: "translate(-3%,1%)" },
          "60%": { transform: "translate(2%,2%)" },
          "70%": { transform: "translate(-2%,-1%)" },
          "80%": { transform: "translate(1%,-3%)" },
          "90%": { transform: "translate(3%,1%)" },
        },
        "plumb-drop": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        grain: "grain 8s steps(10) infinite",
        "plumb-drop": "plumb-drop 1.4s cubic-bezier(0.65,0,0.35,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
