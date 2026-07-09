/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        niilm: {
          navy: "#0b1120",
          blue: "#2563eb",
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          gold: "#fbbf24",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
