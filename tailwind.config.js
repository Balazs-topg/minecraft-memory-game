/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        growShrink: {
          "0%": { scale: "0.8" },
          "50%": { scale: "1.2" },
          "100%": { scale: "0.8" },
        },
        flip: {
          "0%": { transform: "scaleY(0.3) scale(0.9)" },
          "100%": { transform: "scaleY(1) scale(1)" },
        },
      },
      animation: {
        "grow-shrink": "growShrink 8000ms ease-in-out infinite",
        flip: "flip 200ms ease-in-out",
      },

      fontFamily: {
        minecraft: ["Minecraft Regular"],
      },
    },
    plugins: [],
  },
};
