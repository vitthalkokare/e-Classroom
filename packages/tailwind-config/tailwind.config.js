/** @type {import('tailwindcss').Config} */
export default{
  darkMode: ["class"],
  theme: {
    screens: {

      'sm': {'min': '0px', 'max': '400px'},
    },
    
    container: {
      center: true,
    },
   
    extend: {
     
    },
  },
  plugins: [require("tailwindcss-animate")],
}