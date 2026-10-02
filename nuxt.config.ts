// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      script: [
        {
          src: "https://js.paystack.co/v1/inline.js"
        }],
      title: 'Almannan Charity Foundation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Almannan Charity Foundation supports vulnerable people and communities through practical, compassionate action.' }
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
      paystackKey: process.env.NUXT_PUBLIC_PAYSTACK_KEY || process.env.PAYSTACK_PUBLIC_KEY || "pk_test_7a0202a10e7cf616de8ebfa775251be01369dcf0"
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
