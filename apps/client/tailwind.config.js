/** @type {import('tailwindcss').Config} */

export default {
 
  extend: "@repo/tailwind-config/tailwind.config.js",
  darkMode: 'selector',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '765px'},


      
    },
   
    container: {
      center: true,
    },
   
   extend:{
    colors:{
      'darktext':'#d1d0d0',
      'darkmode': 'rgb(40,40,40)',
      'lightmode':'#fff',
      'darkmodes1':'#ffffff1a'

    },
    backgroundImage: {
      'gradient-to-right': 'linear-gradient(to right, #FFFFFF, #FFEFBA)',
      'custom-bg-opacity': 'linear-gradient(to right, #FFFFFF, #FFEFBA)',
      'normal-gradient': 'linear-gradient(to right, #232526, #414345)'
    },
    

   }
  },
  plugins: [require("tailwindcss-animate")],
}