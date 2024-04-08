/** @type {import('tailwindcss').Config} */

export default {
 
  extend: "@repo/tailwind-config/tailwind.config.js",
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '600px'},


      
    },
   
    container: {
      center: true,
    },
   
   extend:{}
  },
  plugins: [require("tailwindcss-animate")],
}