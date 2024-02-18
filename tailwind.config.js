/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': 'hsl(200, 100%, 50%)',
        'base-blue-dark': 'hsl(200, 100%, 30%)',
        'base-dark-gray': 'rgb(59, 59, 59)',
        'base-light-gray': 'rgb(133, 133, 133)',
        'base-light-black': '#161a1d',
        lime: '#00FF00'
      },
      lineHeight: {
        '85px': '85px'
      },
      margin: {
        18: '72px',
        '-4.75': '19px'
      },
      padding: {
        19: '76px'
      }
    }
  },
  plugins: [require('daisyui')]
}
