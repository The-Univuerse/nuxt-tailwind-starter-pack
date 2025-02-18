<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead()
const title = computed(() => t(route.meta?.title) ?? '')
</script>

<template>
  <div>
    <Html
      :lang="head.htmlAttrs?.lang"
      :dir="head.htmlAttrs?.dir"
    >
      <Body>
        <div class="h-screen bg-background">
          <Navigation />

          <div class="h-[90%]">
            <slot></slot>
          </div>
        </div>
      </Body>
    </Html>
  </div>

  <!-- <div class="h-screen bg-background">
    <Navigation />

    <div class="h-[90%]">
      <slot></slot>
    </div>
  </div> -->
</template>
