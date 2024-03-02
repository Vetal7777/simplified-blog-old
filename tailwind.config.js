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
    colors: {
      'main-1': 'rgb(133, 133, 133)',
      'main-2': '#1D232A',
      'primary-1': '#03FF00',
      white: '#FFFF',
      red: 'rgb(239 68 68)',
      black: 'rgb(0 0 0)'
    },
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
      lineHeight: {
        '85px': '85px'
      },
      margin: {
        4.75: '19px',
        18: '72px'
      },
      padding: {
        19: '76px'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    prefix: 'du-'
  }
}
