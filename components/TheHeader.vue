<script setup lang="ts">
import { useScroll, useWindowSize } from '@vueuse/core'

const { band } = useBandData()

const { y } = useScroll(window)
const { width } = useWindowSize()

const scrolled = computed(() => y.value > 24)
const isMobile = computed(() => width.value < 768)
const mobileOpen = ref(false)

const links = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Shows', href: '#shows' },
  { label: 'Disco', href: '#disco' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Imprensa', href: '#imprensa' },
  { label: 'Contato', href: '#contato' },
]

function go(href: string) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-preto/85 backdrop-blur-md border-b border-creme/10 py-3'
      : 'bg-transparent py-5'"
  >
    <div class="container-edge flex items-center justify-between">
      <NuxtLink to="/" class="group inline-flex items-center" :aria-label="`${band.name} — home`">
        <img
          src="/brand/logo_fundo_escuro_transparente.png"
          :alt="band.name"
          class="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          draggable="false"
        >
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8" aria-label="navegação principal">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/70 hover:text-creme link-rev"
          @click.prevent="go(l.href)"
        >
          {{ l.label }}
        </a>
      </nav>

      <!-- CTA desktop -->
      <a
        href="#shows"
        class="hidden md:inline-flex btn-coral !py-3 !px-5 text-[10px]"
        @click.prevent="go('#shows')"
      >
        Próximos shows
        <span aria-hidden="true">↘</span>
      </a>

      <!-- Toggle mobile -->
      <button
        v-if="isMobile"
        type="button"
        class="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        :aria-expanded="mobileOpen"
        aria-label="abrir menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="block h-px w-6 bg-creme transition-transform" :class="mobileOpen && 'translate-y-[3px] rotate-45'" />
        <span class="block h-px w-6 bg-creme transition-transform" :class="mobileOpen && '-translate-y-[3px] -rotate-45'" />
      </button>
    </div>

    <!-- Drawer mobile -->
    <Transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden fixed inset-0 top-[56px] z-40 bg-preto"
      >
        <nav class="container-edge flex flex-col gap-6 py-12" aria-label="menu mobile">
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="font-display text-4xl text-creme hover:text-coral transition-colors"
            @click.prevent="go(l.href)"
          >
            {{ l.label }}
          </a>
          <a href="#contato" class="btn-coral mt-6 w-fit" @click.prevent="go('#contato')">
            Contratação
            <span aria-hidden="true">↘</span>
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
