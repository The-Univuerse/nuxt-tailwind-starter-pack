<script lang="ts" setup>
import type { MaybeElement } from '@vueuse/core'

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
          Save your crucial time with our univuerse
        </p>
      </Transition>
    </div>
  </div>
</template>
