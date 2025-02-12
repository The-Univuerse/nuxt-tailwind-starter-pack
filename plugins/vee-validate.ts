/// Global Rules Registration https://vee-validate.logaretm.com/v4/guide/i18n/#using-vee-validatei18n

import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import fr from '@vee-validate/i18n/dist/locale/fr.json'
import { all } from '@vee-validate/rules'
import { configure, defineRule, Field, Form } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(all).forEach(([name, rule]) => {
    defineRule(name, rule)
  })

  configure({
    // validateOnChange: true,
    validateOnInput: true,
    generateMessage: localize({
      en,
      fr,
    }),
  })

  nuxtApp.vueApp.component('FormObserver', Form)

  nuxtApp.vueApp.component('FieldProvider', Field)
})
