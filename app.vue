<script setup lang="ts">
const { band } = useBandData()

// SEO global — sobrescrito por página quando necessário.
useSeoMeta({
  titleTemplate: (chunk) => (chunk ? `${chunk} · ${band.name}` : `${band.name} — ${band.tagline}`),
  ogSiteName: band.name,
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
})

useHead({
  bodyAttrs: { class: 'antialiased' },
})
</script>

<template>
  <div class="relative min-h-screen bg-preto text-creme">
    <NuxtLoadingIndicator color="#EA4435" :height="2" />
    <NuxtPage />
    <!-- Overlay de ruído global, fixo na viewport, decorativo. -->
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay opacity-[0.06] bg-noise"
    />
  </div>
</template>
