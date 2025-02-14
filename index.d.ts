import type { PrivateFormContext } from 'vee-validate'
declare global {
  type UserValidation = PrivateFormContext
  interface Theme {
    icon: string
    value: string
  }

  interface Lang {
    title: string
    value: string
    changeValue: 'en' | 'fr'
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

export { global }
