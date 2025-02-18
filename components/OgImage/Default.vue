<script lang="ts" setup>
/**
 * @credits NuxtLabs <https://nuxtlabs.com/>
 * @see https://github.com/nuxt/nuxt.com/blob/main/components/OgImage/Docs.vue
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
  headline: 'headline',
})

const config = useRuntimeConfig()

const title = computed(() => (props.title || '').slice(0, 60))
const description = computed(() => (props.description || '').slice(0, 200))
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center bg-[#1b1b1f]">
    <div class="w-[800px] pl-[100px]">
      <p class="text-[24px] text-[#00DC82] mb-4 font-semibold">
        {{ config.public.title }}
      </p>

      <h1
        v-if="title"
        class="w-[600px] m-0 text-6xl font-semibold mb-4 text-white flex items-center"
      >
        <span>{{ title }}</span>
      </h1>
      <p
        v-if="description"
        class="text-3xl w-full text-[#E4E4E7] leading-tight"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
