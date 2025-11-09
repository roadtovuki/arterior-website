// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      {
        code: 'hr',
        language: 'hr-BA',
        name: 'Hrvatski',
        file: 'hr.json',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
    defaultLocale: 'hr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages: {
      about: {
        hr: '/o-nama',
        en: '/about-us',
      },
    },
  },
});
