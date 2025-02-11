<script setup lang="ts">
interface Theme {
  icon: string
  value: string
}

const colorMode = useColorMode()

const colorTheme = toRef(colorMode.value)

watch(colorTheme, (value) => {
  colorMode.preference = value
})

const themes = ref<Theme[]>([
  {
    icon: 'line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition',
    value: 'dark',
  },
  {
    icon: 'line-md:sunny-filled-loop',
    value: 'light',
  },

])

const currentTheme = computed<Theme>(() => {
  const dataTheme = themes.value.find((data: Theme) => data.value !== colorMode.value)
  return dataTheme || { icon: '', value: '', changeValue: '' }
})

const switchTheme = (value: string): void => {
  colorMode.preference = value
}
</script>

<template>
  <div class="w-full flex border-b gap-3 border-slate-200  dark:border-neutral-900 justify-between p-5">
    <div class="flex gap-3 items-center">
      <NuxtLink
        to="/"
        class="text-secondary transition duration-300 ease-in-out hover:text-neutral-400"
      >
        home
      </NuxtLink>

      <NuxtLink
        to="/about"
        class="text-secondary transition duration-300 ease-in-out hover:text-neutral-400"
      >
        about
      </NuxtLink>

      <NuxtLink
        to="/form"
        class="text-secondary transition duration-300 ease-in-out hover:text-neutral-400"
      >
        form
      </NuxtLink>
    </div>

    <div class="flex gap-3">
      <NuxtLink to="/">
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
