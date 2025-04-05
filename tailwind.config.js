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
        primary: "#133E87",
        secondary: "#EF863E",
        light: "#ffffff",
        dark: "#1e293b",
        mid: "#3c5276"
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
      },
      fontFamily: {
        'heading': '"Playfair Display", serif;',
        'body': '"Source Code Pro", serif;'
        
      }
    },
      
  },
  plugins: [],
}
