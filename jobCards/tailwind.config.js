/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/*.jsx", "./src/**/*.jsx"],
  theme: {
    colors: {
      bgColor: "#F3F6FF",
      textColor: "var(--1-e-2246, #1E2246)",
    },
    backgroundImage: {
      bgDesign: "linear-gradient(132deg, #BBCBFB 5.22%, #F1D4FF 100.41%)",
      bgEngineer: "linear-gradient(132deg, #FBBBDA 5.22%, #FFD4D4 100.41%)",
      bgOperation: "linear-gradient(132deg, #BBEBFB 5.22%, #EFD4FF 100.41%)",
      bgUniversity: "linear-gradient(132deg, #FFDEC7 5.22%, #D4D9FF 100.41%)",
      bgSales: "linear-gradient(132deg, #BBD8FB 5.22%, #FFD4D4 100.41%)",
      bgPeople: "linear-gradient(132deg, #BBFBE4 5.22%, #D4E0FF 100.41%)"
    },
    boxShadow: {
      cardShadow: "0px 10px 44px 0px rgba(180, 191, 225, 0.40)"
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Merriweather: ["Merriweather", "sans-serif"],
    },
    screens: {
      "widescreen" : { "raw" : '(min-aspect-ratio: 3/2)'},
      "tallscreen" : { "raw" : '(max-aspect-ratio: 13/20)'}
    },
    extend: {},
  },
  plugins: [],
}

