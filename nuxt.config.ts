// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-8BMF09DZ7L",
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8BMF09DZ7L');
          `,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://www.candidatspresidentielles2027.fr",
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/ui-pro',
  ],
  nitro: {                                                                            
    prerender: {                                                                      
      routes: ['/sitemap.xml'],                                                       
    },                                                                                
  },
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
