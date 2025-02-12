// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'The Univuerse',
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
    pageTransition: { name: 'slide-fade', mode: 'out-in' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  // i18n: {
  //   vueI18n: './locales/i18n.config.ts',
  //   // if you are using custom path, default
  // },

  i18n: {
    lazy: true,
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [{ code: 'en', file: 'en', name: 'English' }, { code: 'fe', file: 'fe', name: 'France' }],
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },
  icon: {
    class: 'icon', // default <Icon> class applied
    mode: 'css', //
    serverBundle: {
      collections: ['tabler', 'logos', 'line-md', 'devicon'],
      externalizeIconsJson: true,
    },
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
})
