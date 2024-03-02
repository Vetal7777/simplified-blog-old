// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-icon', 'nuxt-vuefire'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/css/tailwindcss.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  vuefire: {
    config: {
      apiKey: 'AIzaSyDtKDEythOIke4meMEFJPpQhlgxFZN9Wc4',
      authDomain: 'simplified-blog-85da7.firebaseapp.com',
      projectId: 'simplified-blog-85da7',
      storageBucket: 'simplified-blog-85da7.appspot.com',
      messagingSenderId: '382785746458',
      appId: '1:382785746458:web:367553f5754ab3d4da43a3',
      measurementId: 'G-GDMW7KRXMT'
    }
  }
})
