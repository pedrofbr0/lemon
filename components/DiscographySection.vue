<script setup lang="ts">
const { band } = useBandData()

const root = ref<HTMLElement | null>(null)
useScrollReveal(root, { selector: '[data-reveal]', stagger: 0.1 })
</script>

<template>
  <section
    id="disco"
    ref="root"
    class="relative bg-preto text-creme py-section overflow-hidden"
    aria-labelledby="disco-title"
  >
    <div class="container-edge relative">
      <header class="grid grid-cols-12 gap-gutter mb-16 md:mb-20 items-end">
        <div class="col-span-12 md:col-span-3" data-reveal>
          <p class="eyebrow">03 · obra</p>
          <p class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/40 mt-2">
            autoral · em produção
          </p>
        </div>
        <h2
          id="disco-title"
          class="col-span-12 md:col-span-9 font-display text-giga uppercase leading-[0.88] display-mix text-balance"
          data-reveal
        >
          A música que <em class="font-editorial italic">é</em>
          nossa <span class="text-coral">em breve</span>.
        </h2>
      </header>

      <!-- Pôster "em breve" -->
      <div class="grid grid-cols-12 gap-gutter items-start">
        <div class="col-span-12 md:col-span-7 lg:col-span-7" data-reveal>
          <div class="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-azul-royal grain">
            <div class="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <p class="eyebrow text-creme/70 mb-6">{{ band.name }} · autoral · 202?</p>
              <h3 class="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.85] text-creme">
                Em<br>Breve
              </h3>
              <div class="mt-12 flex items-center gap-3">
                <span class="h-px w-12 bg-coral" />
                <span class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/70">
                  primeiro autoral · em construção
                </span>
                <span class="h-px w-12 bg-coral" />
              </div>
            </div>
            <div class="absolute bottom-0 right-0 h-24 w-1/3 bg-coral" />
            <div class="absolute top-0 left-0 h-12 w-12 bg-ouro" />
          </div>
        </div>

        <!-- Texto + plataformas (placeholder) -->
        <div class="col-span-12 md:col-span-5 lg:col-start-9 lg:col-span-4 space-y-8" data-reveal>
          <p class="font-editorial italic text-2xl text-creme/90 leading-snug text-balance">
            Ainda não temos faixa autoral lançada. Estamos escrevendo —
            e a primeira música nossa chega assim que ficar pronta de verdade.
          </p>

          <ul class="space-y-3 border-y border-creme/15 py-6">
            <li class="flex items-baseline justify-between">
              <span class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/60">status</span>
              <span class="font-display text-2xl">EM ESCRITA</span>
            </li>
            <li class="flex items-baseline justify-between">
              <span class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/60">formato</span>
              <span class="font-display text-2xl">A DEFINIR</span>
            </li>
            <li class="flex items-baseline justify-between">
              <span class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/60">previsão</span>
              <span class="font-display text-2xl">EM BREVE</span>
            </li>
          </ul>

          <div class="space-y-3">
            <a
              href="#contato"
              class="block w-full justify-between border border-creme/30 px-7 py-4
                     font-mono text-xs uppercase tracking-extra-wide text-creme
                     hover:bg-creme hover:text-preto transition-colors duration-300
                     inline-flex items-center"
            >
              <span>Avise-me quando sair</span>
              <span aria-hidden="true">↘</span>
            </a>
            <a
              href="#shows"
              class="block w-full justify-between border border-creme/30 px-7 py-4
                     font-mono text-xs uppercase tracking-extra-wide text-creme
                     hover:bg-creme hover:text-preto transition-colors duration-300
                     inline-flex items-center"
            >
              <span>Enquanto isso: ver shows</span>
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
