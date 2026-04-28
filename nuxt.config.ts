// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    experimental: {
      sqliteConnector: 'native'
    },
    build: {
      markdown: {
        highlight: {
          theme: 'vitesse-dark',
          langs: ['ts', 'tsx', 'js', 'jsx', 'json', 'bash', 'sh', 'vue', 'css', 'html', 'md', 'yaml', 'python', 'go', 'rust']
        }
      }
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'AI Trail',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A field journal of my journey building with AI.' }
      ]
    }
  }
})
