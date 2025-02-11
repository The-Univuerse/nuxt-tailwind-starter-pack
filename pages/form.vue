<script setup lang="ts">
import type { PrivateFormContext } from 'vee-validate'

const form = ref < PrivateFormContext > ()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

// Form Event Validate https://vee-validate.logaretm.com/v4/api/form/#slots
const submit = async () => {
  try {
    const valid = await form.value?.validate()

    if (valid?.valid) {
      alert('Submit Success')
    }
  }
  catch (error) {
    throw error
  }
}
</script>

<template>
  <div class="text-accent dark:text-white flex justify-center items-center w-full h-full p-5">
    <div class="w-[450px] p-5 shadow-2xl bg-gray-200 dark:bg-secondary/30 flex flex-col gap-3 rounded-xl">
      <FormObserver ref="form">
        <FieldProvider
          v-slot="{ errors, field }"
          v-model="email"
          name="email"
          label="Email"
          rules="required|email"
        >
          <p class="mb-1">
            Email
          </p>
          <input
            v-bind="field"
            class="w-full rounded-lg p-2 border-secondary focus:outline-none border-2"
            type="text"
          />
          <p
            v-if="errors"
            class="text-sm mt-2 text-red-500"
          >
            {{ errors[0] }}
          </p>
        </FieldProvider>

        <FieldProvider
          v-slot="{ errors, field }"
          v-model="password"
          name="password"
          label="Password"
          rules="required"
        >
          <p class="mb-1">
            Password
          </p>
          <input
            v-bind="field"
            class="w-full rounded-lg p-2 border-secondary focus:outline-none border-2"
            type="password"
          />
          <p
            v-if="errors"
            class="text-sm mt-2 text-red-500"
          >
            {{ errors[0] }}
          </p>
        </FieldProvider>

        <FieldProvider
          v-slot="{ errors, field }"
          v-model="confirmPassword"
          name="username"
          label="Password"
          rules="confirmed:@password"
        >
          <p class="mb-1">
            Confirm Password
          </p>
          <input
            v-bind="field"
            class="w-full rounded-lg p-2 border-secondary focus:outline-none border-2"
            type="password"
          />

          <p
            v-if="errors"
            class="text-sm mt-2 text-red-500"
          >
            {{ errors[0] }}
          </p>
        </FieldProvider>

        <div class="text-end">
          <button
            class=" bg-white cursor-pointer text-black rounded-lg px-4 py-1"
            @click="submit"
          >
            Submit
          </button>
        </div>
      </FormObserver>
    </div>
  </div>
</template>
