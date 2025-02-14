import { setLocale } from '@vee-validate/i18n'

export default defineNuxtPlugin((nuxtApp) => {
  // called right after a new locale has been set
  nuxtApp.hook('i18n:localeSwitched', ({ oldLocale, newLocale }) => {
    setLocale(newLocale)
    console.log('onLanguageSwitched', oldLocale, newLocale)
  })
})
