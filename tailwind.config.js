/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple':'#1e2139',
        'pale-purple': '#7c5dfa',
        'dark-green': '#264426',
        'dark-blue': '#141625'
      },
      width:{
        'custom': '42rem'
      }
    },
  },
  plugins: [],
}

