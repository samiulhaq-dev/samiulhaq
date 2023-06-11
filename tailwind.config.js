/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish : "#282C33",
        pinkish : "#C778DD",
        greyish : "#ABB2BF"
      }
    },
  },
  plugins: [],
}