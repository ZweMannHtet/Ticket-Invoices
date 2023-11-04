/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple':'#050e4f',
        'pale-purple': '#7c5dfa',
        'dark-green': '#264426',
        'dark-blue': '#141625',
        'red': '#ec5757',
        'dark-purple': '#252945',
        'content-color': '#141625',
        'input-color': '#1e2139',
        'text-back': '#22274f'
      },
      width:{
        'custom': '70rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

