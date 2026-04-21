// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://dev.visualwebsiteoptimizer.com' }
      ],
      script: [
        {
          id: 'vwoCode',
          src: 'https://dev.visualwebsiteoptimizer.com/cloud-run-test/final/20001235.js'
        }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  }
})
