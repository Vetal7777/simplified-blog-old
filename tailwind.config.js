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
      'primary-2': '#0000F6',
      white: '#FFFF',
      red: 'rgb(239 68 68)',
      black: 'rgb(0 0 0)'
    },
    extend: {
      animation: {
        'slide-from-right': 'slideFromRight 0.3s forwards',
        'slide-from-left': 'slideFromLeft 0.3s forwards',
        page: 'page 0.3s forwards'
      },
      keyframes: {
        slideFromRight: {
          '0%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-20px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        page: {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' }
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
        19: '76px',
        25: '100px'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    prefix: 'du-'
  }
}
