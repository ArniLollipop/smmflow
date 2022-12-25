/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue : "#1D4ED8",
        pressed : "#BBCAF366",
        red: "#DC3545",
        whiteBlue: "#096DFF",
        green : "#007C1B",
        gray : "#F7F7F7",
        darkGray : "#EEEEEE",
        textBlue: "#0058FF"
      },
      backgroundImage:{
        saly : 'url("images/Saly-1.png")',
      }
    },
  },
  plugins: [],
}
