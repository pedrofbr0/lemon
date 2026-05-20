<script setup lang="ts">
const { band, press } = useBandData()

const root = ref<HTMLElement | null>(null)
useScrollReveal(root, { selector: '[data-reveal]', stagger: 0.1 })
</script>

<template>
  <section
    id="imprensa"
    ref="root"
    class="relative bg-preto text-creme py-section overflow-hidden"
    aria-labelledby="press-title"
  >
    <!-- Marquee superior -->
    <UiMarqueeText
      :text="`${band.name} · imprensa · 2025 — 2026`"
      :repeat="10"
      class="absolute top-0 left-0 right-0 border-b border-creme/15 py-3 opacity-40"
    >
      <span class="font-display text-2xl uppercase">{{ band.name }}</span>
      <span class="font-editorial italic text-2xl text-coral mx-3">no papel</span>
    </UiMarqueeText>

    <div class="container-edge pt-20">
      <header class="grid grid-cols-12 gap-gutter mb-16 items-end">
        <div class="col-span-12 md:col-span-3" data-reveal>
          <p class="eyebrow">05 · imprensa</p>
        </div>
        <h2
          id="press-title"
          class="col-span-12 md:col-span-9 font-display text-giga uppercase leading-[0.88] display-mix"
          data-reveal
        >
          O que <em class="font-editorial italic">disseram</em>.
        </h2>
      </header>

      <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-12">
        <li v-for="(p, i) in press" :key="p.outlet" class="border-t border-creme/15 pt-6" data-reveal>
          <p class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/40 mb-3">
            0{{ i + 1 }} · {{ p.outlet }}
          </p>
          <blockquote class="font-editorial italic text-2xl md:text-3xl leading-snug text-balance">
            <span class="text-coral mr-1">“</span>{{ p.quote }}<span class="text-coral ml-1">”</span>
          </blockquote>
        </li>
      </ul>
    </div>
  </section>
</template>
