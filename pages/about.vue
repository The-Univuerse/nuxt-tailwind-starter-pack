<script lang="ts" setup>
import type { MaybeElement } from '@vueuse/core'

definePageMeta({ title: 'routes.about' })

const route = useRoute()

useSeoMeta({ description: () => `This is a description for the ${route.meta.title} page` })

const counterStore = useNumberCounter()
const { counter } = storeToRefs(counterStore)

const el = useTemplateRef<MaybeElement>('el')

const { playState } = useAnimate(
  el,
  [
    { clipPath: 'circle(20% at 0% 30%)' },
    { clipPath: 'circle(20% at 50% 80%)' },
    { clipPath: 'circle(20% at 100% 30%)' },
  ],
  {
    duration: 3000,
    iterations: 5,
    direction: 'alternate',
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  },
)
</script>

<template>
  <div class="text-white flex justify-center items-center w-full h-full p-5">
    <div class="flex gap-3 flex-col text-white">
      <p
        ref="el"
        :class="{ '-translate-y-1/2': playState === 'finished' }"
        class="text-transparent transition duration-500 ease-in-out font-extrabold text-6xl tracking-tight md:text-9xl bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text"
      >
        The Univuerse
      </p>

      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <p
          v-if="playState === 'finished'"
          class="text-secondary mt-3 text-lg md:text-xl text-center font-medium"
        >
          {{ $t('tagline') }} univuerse
        </p>
      </Transition>

      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <div
          v-if="playState === 'finished'"
          class="flex gap-3 justify-center mt-3"
        >
          <button
            class="cursor-pointer w-10 bg-neutral-400 flex items-center justify-center py-1 px-3 rounded-lg"
            @click="counter--"
          >
            <Icon
              name="tabler:minus"
              class="text-lg"
            />
          </button>

          <span class="text-black dark:text-neutral-400">{{ counter }}</span>

          <button
            class="cursor-pointer w-10 bg-neutral-400 flex items-center justify-center py-1 px-3 rounded-lg"
            @click="counter++"
          >
            <Icon
              name="tabler:plus"
              class="text-lg"
            />
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>
