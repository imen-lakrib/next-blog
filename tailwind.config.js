/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'dark':"#00172a",  // dark 
        'background': '#0f172a',  // dark blue
        'secondary': '#b9e0f2', // very light blue
        'sky': '#15a9e7', // sky blue
        'light-sky': '#48ccd4', //  light sky blue
        'dark-gray': '#131c31', //  dark gray
        'text': '#5b6a83', // text
        'error': 'red',
        
      }
    },
  },
  plugins: [],
}