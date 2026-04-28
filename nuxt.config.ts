// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Forest Log',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A field journal of my journey building with AI.' }
      ]
    }
  }
})
