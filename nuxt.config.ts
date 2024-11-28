// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Almannan Charity foundation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Your website description' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/pat.svg' },
      ],
    },
  },

  modules: ["@nuxt/ui", "@nuxt/image"]
})