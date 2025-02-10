<script setup lang="ts">
const featuresList = computed(() => {
  return [
    {
      icon: 'skill-icons:nuxtjs-light',
    },
    {
      icon: 'skill-icons:tailwindcss-light',
    },
    {
      icon: 'skill-icons:pinia-light',
    },
    {
      icon: 'logos:pwa',
    },
    {
      icon: 'tabler:sun-moon',
    },
    {
      icon: 'tabler:seo',
    },
    {
      icon: 'logos:vueuse',
    },
  ]
})
</script>

<template>
  <div class="flex h-full relative text-white justify-center items-center">
    <div class="flex flex-col">
      <h1
        class="mt-8 bg-gradient-to-br from-white via-emerald-100 to-emerald bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Welcome to the Universe
      </h1>

      <p class="text-secondary mt-2 text-xl text-center font-medium">
        Save your crutial time with our universe
      </p>

      <div class="flex gap-5 mt-10 items-center justify-center">
        <img class="w-32 sm:w-36" src="/assets/icon/nuxt-dark.png" alt="" />
        <Icon name="tabler:plus" class="text-3xl text-secondary self-end" />
        <img class="w-32 sm:w-40 self-center" src="/assets/icon/tailwindcss-dark.svg" alt="" />
      </div>

      <div class="flex justify-center">
        <div class="flex w-[250px] sm:w-full gap-5 mt-16 items-center flex-wrap justify-center">
          <Icon
            v-for="(data, index) in featuresList"
            :key="index"
            :name="data.icon" class="text-3xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
