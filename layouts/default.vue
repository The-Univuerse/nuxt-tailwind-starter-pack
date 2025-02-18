<script setup lang="ts">
const head = useLocaleHead()
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
</template>
