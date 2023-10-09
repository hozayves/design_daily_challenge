/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    colors: {
      purplePrimary: "hsl(259, 100%, 65%)",
      lightRedPrimary: "hsl(0, 100%, 67%)",
      white: "hsl(0, 0%, 100%)",
      offWhite: "hsl(0, 0%, 94%)",
      lightGrey: "hsl(0, 0%, 86%)",
      smokeyGrey: "hsl(0, 1%, 44%)",
      offBlack: "hsl(0, 0%, 8%)"
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

