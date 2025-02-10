<script setup>
const leftStyle = computed(() => {
  return {
    '--tw-gradient-from': 'pink-500 var(--tw-gradient-from-position)',
  }
})

const rightStyle = computed(() => {
  return {
    '--tw-gradient-to': 'pink-500 var(--tw-gradient-to-position)',
  }
})
</script>

<template>
  <div
    class="light-bar w-full relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden z-0"
  >
    <div
      class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"
    >
      <div
        v-motion
        :initial="{ width: '320px', opacity: 0.5 }"
        :enter="{ width: '480px', opacity: 1 }"
        :duration="1600"
        :style="leftStyle"
        class="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-primary-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      ></div>
      <div
        v-motion
        class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-primary-500 text-white [--conic-position:from_290deg_at_center_top]"
        :initial="{ width: '320px', opacity: 0.5 }"
        :enter="{ width: '480px', opacity: 1 }"
        :duration="1600"
        :style="rightStyle"
      ></div>
      <div
        class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"
      ></div>
      <div
        class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"
      ></div>
      <div
        class="absolute bg-pink-500 inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
      ></div>
      <div
        class="absolute bg-pink-400 inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
      ></div>
      <div
        class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] blur-sm"
        :initial="{ width: '320px', opacity: 0.5 }"
        :enter="{ width: '480px', opacity: 1 }"
        :duration="1600"
        :style="rightStyle"
      ></div>

      <div
        class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"
      ></div>
    </div>
  </div>
</template>
