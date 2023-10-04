/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./*.html"
  ],
  theme: {
    boxShadow: {
      section: '0px 76px 27px 0px rgba(6, 27, 82, 0.10)'
    },
    colors: {
      heading: "var(--0-e-0-e-38, #0E0E38)",
    },
    fontFamily: {
      Merriweather: ["Merriweather", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

