/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    colors: {
      darkToggleFrom: "hsl(210, 78%, 56%)",
      darkToggleTo: "hsl(146, 68%, 55%)",
      instagramFrom: "hsl(37, 97%, 70%)",
      instagramTo: "hsl(329, 70%, 58%)",
      lineGreen: "hsl(163, 72%, 41%)",
      brightRed: "hsl(356, 69%, 56%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      youtube: "hsl(348, 97%, 39%)",
      lightToggle: "hsl(230, 22%, 74%)",
      veryDarkBlueBG: "hsl(230, 17%, 14%)",
      veryDarkBlueTop: "hsl(232, 19%, 15%)",
      darkDesaturatedBlueCard: "hsl(228, 28%, 20%)",
      desaturatedBlueText: "hsl(228, 34%, 66%)",
      whiteText: "hsl(0, 0%, 100%)",

      lightWhiteBG: "hsl(0, 0%, 100%)",
      lightVeryPaleBlueTop: 'hsl(225, 100%, 98%)',
      lightGrayishBlueCard: "hsl(227, 47%, 96%)",
      lightDarkGrayishBlueText: "hsl(228, 12%, 44%)",
      lightVeryDarkBlueText: "hsl(230, 17%, 14%)"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

