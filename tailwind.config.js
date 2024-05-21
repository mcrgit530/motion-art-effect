/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-puple' : 'rgb(106,8,255)',
      },
    },
  },
  variants : {
    extend : {},
  },
  plugins: [],
}
