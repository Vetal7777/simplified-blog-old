import {
  animation,
  colors,
  keyframes,
  lineHeight,
  margin,
  padding
} from './config/tailwindcss'

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
    colors,
    extend: {
      animation,
      keyframes,
      lineHeight,
      margin,
      padding
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    prefix: 'du-'
  }
}
