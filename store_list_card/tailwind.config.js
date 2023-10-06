/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grad1": "linear-gradient(130deg, #FF5DAB 0.87%, #756BFF 100%)"
      },
      colors: {
        mainColor: "var(--c-4-c-0-ff, #C4C0FF)",
        borderColor: "#2A2753",
        locationColor: "#756BFF",
        openColor: "#00BD9B",
        closecolor: "#FF5EAB"
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"]
      }
    },
  },
  plugins: [],
}

