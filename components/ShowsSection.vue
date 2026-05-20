<script setup lang="ts">
import { Motion } from 'motion-v'

const { shows } = useBandData()

const root = ref<HTMLElement | null>(null)
useScrollReveal(root, { selector: '[data-reveal]', stagger: 0.07 })

const dateParts = (iso: string) => {
  const d = new Date(iso)
  return {
    day: d.toLocaleDateString('pt-BR', { day: '2-digit' }),
    month: d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''),
    year: d.getFullYear().toString(),
    weekday: d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
  }
}

const statusLabel: Record<string, { text: string; cls: string }> = {
  'on-sale': { text: 'à venda', cls: 'text-ouro border-ouro/50' },
  'sold-out': { text: 'esgotado', cls: 'text-creme/40 border-creme/20 line-through' },
  soon: { text: 'em breve', cls: 'text-creme/60 border-creme/30' },
  free: { text: 'grátis', cls: 'text-azul-vivo border-azul-vivo/60' },
}
</script>

<template>
  <section
    id="shows"
    ref="root"
    class="relative bg-azul-royal text-creme py-section overflow-hidden"
    aria-labelledby="shows-title"
  >
    <!-- Texturas decorativas -->
    <div aria-hidden="true" class="absolute inset-0 opacity-30 bg-grid-faint bg-grid-faint pointer-events-none" />
    <div aria-hidden="true" class="absolute -top-32 right-0 h-96 w-96 rounded-full bg-coral/20 blur-3xl pointer-events-none" />

    <div class="container-edge relative">
      <header class="grid grid-cols-12 gap-gutter mb-16 md:mb-20 items-end">
        <div class="col-span-12 md:col-span-3" data-reveal>
          <p class="eyebrow text-creme/70">02 · agenda</p>
          <p class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/50 mt-2">
            turnê ruído branco · {{ shows.length }} datas
          </p>
        </div>
        <h2
          id="shows-title"
          class="col-span-12 md:col-span-9 font-display text-giga uppercase leading-[0.88] display-mix"
          data-reveal
        >
          Onde a banda <em class="font-editorial italic text-ouro">acontece</em>.
        </h2>
      </header>

      <!-- Tabela de shows -->
      <ul class="border-t border-creme/25">
        <li
          v-for="show in shows"
          :key="show.id"
          class="group relative border-b border-creme/25"
          data-reveal
        >
          <a
            :href="show.ticketUrl ?? '#'"
            class="grid grid-cols-12 gap-gutter items-center py-6 md:py-8 transition-colors duration-300 hover:bg-creme/5"
            :aria-disabled="show.status === 'soon'"
          >
            <!-- Data -->
            <div class="col-span-3 md:col-span-2 flex items-baseline gap-2">
              <span class="font-display text-5xl md:text-6xl leading-none">{{ dateParts(show.date).day }}</span>
              <span class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/70">
                {{ dateParts(show.date).month }} / {{ dateParts(show.date).year }}
              </span>
            </div>

            <!-- Cidade -->
            <div class="col-span-5 md:col-span-3">
              <p class="font-display text-2xl uppercase leading-none">
                {{ show.city }}<span v-if="show.uf" class="text-creme/50">/{{ show.uf }}</span>
              </p>
              <p class="mt-2 font-mono text-[11px] uppercase tracking-extra-wide text-creme/50">
                {{ dateParts(show.date).weekday }} · {{ show.country }}
              </p>
            </div>

            <!-- Venue -->
            <div class="col-span-12 md:col-span-4 md:order-none order-last">
              <p class="font-sans text-base md:text-lg text-creme/90">{{ show.venue }}</p>
            </div>

            <!-- Status + CTA -->
            <div class="col-span-4 md:col-span-3 flex items-center justify-end gap-4">
              <span
                class="inline-flex items-center px-3 py-1 border font-mono text-[10px] uppercase tracking-extra-wide"
                :class="statusLabel[show.status].cls"
              >
                {{ statusLabel[show.status].text }}
              </span>
              <span
                v-if="show.ticketUrl"
                class="hidden md:inline-flex font-mono text-[11px] uppercase tracking-extra-wide text-creme group-hover:text-coral transition-colors"
              >
                ingressos <span aria-hidden="true" class="ml-2">↘</span>
              </span>
            </div>
          </a>

          <!-- Badge em destaque -->
          <Motion
            v-if="show.featured"
            :initial="{ opacity: 0, x: -10 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
            class="absolute top-3 left-0 -translate-x-[calc(100%+12px)] hidden lg:flex items-center gap-2"
          >
            <span class="h-px w-8 bg-coral" />
            <span class="font-mono text-[10px] uppercase tracking-extra-wide text-coral">destaque</span>
          </Motion>
        </li>
      </ul>

      <!-- Rodapé da seção -->
      <div class="mt-12 flex flex-col md:flex-row gap-6 md:items-end md:justify-between" data-reveal>
        <p class="font-editorial italic text-2xl text-creme/90 max-w-md text-balance">
          Contratação fora desta lista? Estamos abertos.
        </p>
        <a href="#contato" class="btn-coral self-start md:self-end">
          Falar com produção
          <span aria-hidden="true">↘</span>
        </a>
      </div>
    </div>
  </section>
</template>
