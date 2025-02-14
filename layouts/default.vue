<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead()
const title = computed(() => t(route.meta.title) ?? '')

const { titleApp } = useAppConfig()
</script>

<template>
  <div>
    <Html
      :lang="head.htmlAttrs?.lang"
      :dir="head.htmlAttrs?.dir"
    >
      <Head>
        <Title>{{ `${title.charAt(0).toUpperCase()}${title.slice(1)}` }} - {{ titleApp }}</Title>
        <template
          v-for="link in head.link"
          :key="link.hid"
        >
          <Link
            :id="link.hid"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template
          v-for="meta in head.meta"
          :key="meta.hid"
        >
          <Meta
            :id="meta.hid"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
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
