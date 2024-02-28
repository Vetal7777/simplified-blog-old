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
      animation: {
        'slide-in': 'slideIn 0.3s forwards'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0px)' }
        }
      },
      colors: {
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
        4.75: '19px'
      },
      padding: {
        19: '76px'
      }
    }
  },
  plugins: [require('daisyui')]
}
