// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Nuxt Tail',
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
    // layoutTransition: { name: 'slide-fade', mode: 'out-in' },
    pageTransition: { name: 'slide-fade', mode: 'out-in' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    // '@pinia/nuxt',
  ],
  icon: {
    class: 'icon', // default <Icon> class applied
    mode: 'css', //
    serverBundle: {
      collections: ['tabler', 'skill-icons', 'logos'],
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
