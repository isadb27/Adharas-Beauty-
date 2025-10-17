/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "1200px" }
    },
    extend: {
      colors: {
        brand: {
          bg: "#0b0b0b",
          card: "#16161a",
          text: "#ffffff",
          muted: "#b7b7c2",
          fuchsia: "#ED5A87",
          fuchsia2: "#ff86b0"
        }
      },
      borderRadius: {
        xl2: "18px"
      },
      boxShadow: {
        brand: "0 10px 30px rgba(0,0,0,.35)"
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "16.66%": { transform: "translateX(0)" },
          "33.33%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "66.66%": { transform: "translateX(-200%)" },
          "83.33%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(-300%)" }
        }
      },
      animation: {
        slide: "slide linear infinite"
      }
    }
  },
  plugins: []
}
