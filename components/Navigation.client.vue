<script setup lang="ts">
const colorMode = useColorMode()
const {
  setLocale,
  locale,
} = useI18n()
const colorTheme = toRef(colorMode.value)

const themes = ref<Theme[]>([
  {
    icon: 'line-md:sunny-filled-loop',
    value: 'dark',
  },
  {
    icon: 'line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition',
    value: 'light',
  },

])

const allAvailableLocales = ref<Lang[]>([
  {
    title: 'en',
    value: 'en',
    changeValue: 'fr',
  },
  {
    title: 'fr',
    value: 'fr',
    changeValue: 'en',
  },
])

const currentTheme = computed<Theme>(() => {
  const dataTheme = themes.value.find((data: Theme) => data.value !== colorMode.value)
  return dataTheme || {
    icon: '',
    value: '',
    changeValue: '',
  }
})

const currentLang = computed<Lang>(() => {
  const currentDataLang = allAvailableLocales.value.find(item => item.value === locale.value)
  return currentDataLang || {
    title: '',
    value: '',
    changeValue: 'en',
  }
})

watch(colorTheme, (value) => {
  colorMode.preference = value
})

const switchTheme = (value: string): void => {
  colorMode.preference = value
}
</script>

<template>
  <div class="w-full flex border-b gap-3 border-slate-200  dark:border-neutral-900 justify-between p-5">
    <div class="flex gap-3 items-center">
      <NuxtLinkLocale
        to="/"
        class="text-secondary transition duration-300 ease-in-out hover:text-neutral-400"
      >
        {{ $t('routes.home') }}
      </NuxtLinkLocale>

      <NuxtLinkLocale
        to="/about"
        class="text-secondary transition duration-300 ease-in-out hover:text-neutral-400"
      >
        {{ $t('routes.about') }}
      </NuxtLinkLocale>

      <NuxtLinkLocale
        to="/form"
        class="text-secondary transition duration-300 ease-in-out hover:text-neutral-400"
      >
        {{ $t('routes.form') }}
      </NuxtLinkLocale>
    </div>

    <div class="flex gap-3">
      <button
        v-if="currentLang"
        class="cursor-pointer text-secondary transition duration-300 ease-in-out hover:text-neutral-400"
        @click="setLocale(currentLang.changeValue)"
      >
        {{ currentLang.title }}
      </button>

      <NuxtLink
        target="_blank"
        href="https://github.com/The-Univuerse/nuxt-tailwind-starter-pack"
      >
        <Icon
          name="line-md:github"
          class="text-2xl transition duration-300 ease-in-out hover:text-neutral-400 text-secondary"
        />
      </NuxtLink>

      <button
        class="cursor-pointer"
        @click="switchTheme(currentTheme.value)"
      >
        <Icon
          :name="currentTheme.icon"
          class="text-2xl transition duration-300 ease-in-out hover:text-neutral-400 text-secondary"
        />
      </button>
    </div>
  </div>
</template>
