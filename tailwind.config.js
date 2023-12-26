/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      centerDiv : {
        'centerObj' : 'flex justify-center items-center'
      }
    },
  },
  plugins: [],
}