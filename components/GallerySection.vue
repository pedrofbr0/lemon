<script setup lang="ts">
const { gallery } = useBandData()

const root = ref<HTMLElement | null>(null)
useScrollReveal(root, { selector: '[data-reveal]', stagger: 0.08, start: 'top 90%' })

// Mapeia "span" pra classes responsivas — grid 12 col
const spanClass = (s?: string) => ({
  sm: 'md:col-span-3 row-span-1',
  md: 'md:col-span-4 row-span-1',
  lg: 'md:col-span-5 row-span-2',
  xl: 'md:col-span-7 row-span-2',
}[s ?? 'md'])
</script>

<template>
  <section
    id="galeria"
    ref="root"
    class="relative bg-creme text-preto py-section"
    aria-labelledby="gallery-title"
  >
    <div class="container-edge">
      <header class="grid grid-cols-12 gap-gutter mb-16 md:mb-20 items-end">
        <div class="col-span-12 md:col-span-3" data-reveal>
          <p class="eyebrow !text-preto/60">04 · imagem</p>
          <p class="font-mono text-[11px] uppercase tracking-extra-wide text-preto/50 mt-2">
            arquivo visual · 2022 — 2026
          </p>
        </div>
        <h2
          id="gallery-title"
          class="col-span-12 md:col-span-9 font-display text-giga uppercase leading-[0.88] text-preto display-mix"
          data-reveal
        >
          Imagem é <em class="font-editorial italic">linguagem</em>.
        </h2>
      </header>

      <!-- Grid de imagens assimétrica -->
      <div class="grid grid-cols-2 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-5">
        <figure
          v-for="(img, i) in gallery"
          :key="i"
          :class="[spanClass(img.span), 'relative overflow-hidden group bg-preto/5']"
          data-reveal
        >
          <!-- NuxtImg cuidaria das renditions otimizadas.
               Aqui mantemos como placeholder colorido pra você plugar quando rodar. -->
          <NuxtImg
            :src="img.src"
            :alt="img.alt"
            loading="lazy"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw md:50vw lg:33vw"
            placeholder
          />
          <!-- Fallback visual caso a imagem não exista -->
          <div class="absolute inset-0 bg-preto/90 flex items-center justify-center">
            <span class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/40">
              IMG {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>
          <!-- Overlay metadata em hover -->
          <figcaption
            class="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-preto/85 to-transparent
                   text-creme opacity-0 translate-y-2
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-500"
          >
            <p class="font-sans text-sm md:text-base text-balance">{{ img.alt }}</p>
            <p v-if="img.credit" class="mt-1 font-mono text-[10px] uppercase tracking-extra-wide text-creme/70">
              {{ img.credit }}
            </p>
          </figcaption>
        </figure>
      </div>

      <p class="mt-10 font-mono text-[11px] uppercase tracking-extra-wide text-preto/50" data-reveal>
        acesse o press kit completo em <a href="#contato" class="link-rev text-preto">contato</a> ↘
      </p>
    </div>
  </section>
</template>
