// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: "",
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/ui-pro',
  ],
  css: ['~/assets/css/main.css'],
  uiPro: {
    license: "18664695-FBE3-4265-B599-794BC7843E8D",
  },
  colorMode: {
    preference: 'light',
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
