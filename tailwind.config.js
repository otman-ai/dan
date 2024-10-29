/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-1":"#000000",
        "color-2":"#FFFFFF",
        "color-3":"#A9B9CB",
        "color-4":"#FFD300",
        "color-5":"#FFAA00"
      }
    },
  },
  plugins: [],
}