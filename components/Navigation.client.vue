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
  return dataTheme || { icon: '', value: '' }
})

function switchTheme(value: string): void {
  // colorMode.preference = 'light'
  console.log(value)
}
</script>

<template>
  <div class="w-full z-20 flex border-b gap-3 border-neutral-900 text-white justify-end absolute p-5">
    <NuxtLink to="/">
      <Icon
        name="line-md:github"
        class="text-2xl transition duration-300 ease-in-out hover:text-white text-secondary"
      />
    </NuxtLink>

    <button
      class="cursor-pointer"
      @click="switchTheme(currentTheme.value)"
    >
      <Icon
        :name="currentTheme.icon"
        class="text-2xl transition duration-300 ease-in-out hover:text-white text-secondary"
      />
    </button>
  </div>
</template>
