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
        textBlue: "#0058FF",
        hoverBlue: "#0077FF",
        whiteGray: "#F8F8F9",
        textGray: "#5F5F66",
        border : '#E3E3E3',
        yellow: '#ECBA08',
        green2: "#009A3E",
      },
      backgroundImage:{
        saly : 'url("images/Saly-1.png")',
        saly2 : 'url("images/Saly2.svg")'
      },
      width:{
        '1/7' : '17%',
      },
      zIndex :{
        '5' : "5",
      },
      borderRadius:{
        'xl' : '10px',
      }
    },
  },
  plugins: [],
}
