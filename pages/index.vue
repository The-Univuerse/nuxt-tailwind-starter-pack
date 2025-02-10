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
    <div class="flex absolute z-20 flex-col">
      <div class="flex justify-center">
        <NuxtLink href="https://github.com/andriferry/" target="_blank">
          <div
            class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          >
            <ShimmerText
              class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
            >
              ✨ Follow us on github
              <Icon
                name="tabler:arrow-narrow-right"
                class="text-xl ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
              />
            </ShimmerText>
          </div>
        </NuxtLink>
      </div>

      <h1
        class="mt-8 bg-gradient-to-br from-white via-emerald-100 to-emerald bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Welcome to the Univuerse
      </h1>

      <p class="text-secondary mt-2 text-xl text-center font-medium">
        Save your crucial time with our univuerse
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
