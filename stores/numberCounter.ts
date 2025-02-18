import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNumberCounter = defineStore('numberCounter', () => {
  const counter = ref(0)

  return { counter }
})
