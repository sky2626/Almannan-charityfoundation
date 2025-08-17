// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      script: [
        {
          src: "https://js.paystack.co/v1/inline.js"
        }],
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
    pageTransition: { name: 'page', mode: 'out-in' },

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      paystackKey: process.env.PAYSTACK_PUBLIC_KEY || "sk_test_a8492bf88093e91a900931f56e02acb8a9eeb1df" // Your key here
    }
  },
  modules: [ "@nuxt/image", 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
})
