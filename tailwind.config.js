/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colors
      colors: {
        primary: "#5889cc",
        dark: "#0b171f",
        mid: "#317cad",
        light: "#65bcf7",
        black: "#000000",
        white: "#ffffff",
        grey: "#cecece",
      },
    },
  },
  plugins: [],
}

