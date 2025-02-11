<script setup lang="ts">
import NuxtIconDark from '@/assets/icon/nuxt-dark.png'
import NuxtIconLight from '@/assets/icon/nuxt-light.png'
import TailwindcssDark from '@/assets/icon/tailwindcss-dark.svg'
import TailwindcssLight from '@/assets/icon/tailwindcss-light.svg'

const route = useRoute()
const colorMode = useColorMode()

definePageMeta({
  title: 'Home',
})

useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} - ${route.meta.title}`
  },
})

const featuresList = computed(() => {
  return [
    {
      icon: 'logos:nuxt-icon',
    },
    {
      icon: 'devicon:tailwindcss',
    },
    {
      icon: 'logos:pinia',
    },
    {
      icon: 'logos:pwa',
    },
    {
      icon: 'logos:vueuse',
    },
    {
      icon: 'devicon:veevalidate',
    },
    {
      icon: 'devicon:eslint',
    },
  ]
})

const nuxtIcon = computed(() => colorMode.value === 'light' ? NuxtIconLight : NuxtIconDark)
const tailwindcssIcon = computed(() => colorMode.value === 'light' ? TailwindcssLight : TailwindcssDark)
const headHero = computed(() => colorMode.value === 'light' ? 'text-accent' : 'text-transparent bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text')
</script>

<template>
  <div class="flex h-full relative text-white justify-center items-center">
    <ClientOnly>
      <div class="flex relative flex-col">
        <div class="flex justify-center">
          <NuxtLink
            href="https://github.com/andriferry/"
            target="_blank"
          >
            <div class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <ShimmerText class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
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
          class="mt-8 font-extrabold text-center text-6xl tracking-tight md:text-9xl"
          :class="headHero"
        >
          Welcome to the <br />

          <span class="text-transparent bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text">
            Univuerse
          </span>
        </h1>

        <p class="text-secondary mt-3 text-lg md:text-xl text-center font-medium">
          Save your crucial time with our univuerse
        </p>

        <div class="flex gap-5 mt-10 items-center justify-center">
          <img
            class="w-32 sm:w-36"
            :src="nuxtIcon"
            alt=""
          />
          <Icon
            name="tabler:plus"
            class="text-3xl text-secondary self-end"
          />
          <img
            class="w-32 sm:w-40 self-center"
            :src="tailwindcssIcon"
            alt=""
          />
        </div>

        <div class="flex justify-center">
          <div class="flex w-[250px] sm:w-full gap-5 mt-16 items-center flex-wrap justify-center">
            <Icon
              v-for="(data, index) in featuresList"
              :key="index"
              :name="data.icon"
              class="text-3xl text-secondary transition duration-300 ease-in-out dark:hover:text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
