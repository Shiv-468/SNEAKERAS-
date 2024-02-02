/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'gray1':(' 0px 2px 13px 0px #0000001A'),
        'card-sdw':(' rgba(0, 0, 0, 0.2) 23px 44px 47px 0px'),
        'btnsdw':('3px 5px 22px 0px #00000014'),
      },
      fontFamily:{
        'Roboto':('Roboto'),
        'Poppins':('Poppins'),
        'Josefin':('Josefin')
      }
    },
  },
  plugins: [],
}


