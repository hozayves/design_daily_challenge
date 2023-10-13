/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./*.html"
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        bgColor: "#131619"
      }
    },
  },
  plugins: [],
}

