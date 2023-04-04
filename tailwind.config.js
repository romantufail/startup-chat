/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f2f9f9',
          200: '#DAEEEF',
          800: '#3cb9bc'
        },
        secondary: {
          100: '#b6b5bd',
          200: '#858585',
          800: '#666666'
        }, 
        dark: {
          800: '#232323'
        }
      }
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false // <== disable this!
  // },
}