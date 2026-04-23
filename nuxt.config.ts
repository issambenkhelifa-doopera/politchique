// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/ui-pro',
  ],
  css: ['~/assets/css/main.css'],
  uiPro: {
    license: "18664695-FBE3-4265-B599-794BC7843E8D",
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
