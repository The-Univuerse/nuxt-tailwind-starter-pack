<script setup lang="ts">

import { computed, onMounted, ref } from 'vue'



const data = ref('')

const adata = ref('')

const daaaa = computed(() => {
  return 'ss'
})

function zeer() {
  const data = 1
  const data2 = 1 + data
}
function budi() {
  const data = 1
  const data2 = 1 + data
}

onMounted(() => {
  zeer()
  budi()
})
</script>

<template>
  <div class="bg-red-500">
    Hello
  </div>
</template>
