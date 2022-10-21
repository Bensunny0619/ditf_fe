/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'background-white' : '#FFFFFF',
        'main-black' : '#2A3F54',
        'pastel-purple' : '#F0DCF8',
        'main-yellow' : '#FAF5E2',
        'sub-text' : '#8F9CA9',
      }
    },
  },
  plugins: [],
}
