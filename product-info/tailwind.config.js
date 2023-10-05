/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./*.html"
  ],
  theme: {
    boxShadow: {
      "cardShadow": "0px 24px 28px 9px rgba(179, 193, 217, 0.33)",
      "buttonShadow": "0px 7px 0px 0px #1C57EE"
    },
    fontFamily: {
      Poppins: ["Poppins", 'sans-serif'],
      Roboto: ["Roboto", 'sans-serif']
    },
    extend: {
      colors: {
        blue: "var(--191847, #191847)"
      }
    },
  },
  plugins: [],
}

