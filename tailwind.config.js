/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 2px 4px -2px rgba(16, 24, 40, 0.06)',
        'custom-dark': '0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
      },
      fontFamily: {
        'amita': ['"Amita"', 'cursive'], 
        'josefin': ['"Josefin Sans"', 'sans-serif'],
         'roboto': ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [nextui()]
}
