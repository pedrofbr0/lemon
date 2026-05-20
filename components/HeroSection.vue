<script setup lang="ts">
import { Motion } from 'motion-v'

const { band } = useBandData()

const root = ref<HTMLElement | null>(null)
const headlineRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client) return
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap) return

  const ctx = $gsap.context(() => {
    const chars = headlineRef.value?.querySelectorAll('[data-split-char]') ?? []
    if (chars.length) {
      $gsap.set(chars, { yPercent: 110, opacity: 0 })
      $gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'expo.out',
        stagger: 0.04,
        delay: 0.15,
      })
    }

    $gsap.to('[data-hero-bg]', {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: {
        trigger: root.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    $gsap.to('[data-scroll-hint]', {
      opacity: 0,
      y: 20,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: root.value,
        start: 'top top',
        end: '+=200',
        scrub: true,
      },
    })
  }, root.value!)

  onBeforeUnmount(() => ctx.revert())
})
</script>

<template>
  <section
    ref="root"
    class="relative isolate min-h-[100svh] overflow-hidden bg-preto pt-24 grain"
    aria-label="abertura"
  >
    <!-- Plano de fundo: grid + radial -->
    <div data-hero-bg class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-grid-faint bg-grid-faint opacity-50" />
      <div class="absolute -top-40 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full
                  bg-[radial-gradient(closest-side,rgba(255,209,93,0.18),rgba(0,22,125,0.12),transparent_70%)]
                  blur-2xl" />
      <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-preto via-preto/60 to-transparent" />
    </div>

    <!-- Topbar de metadata -->
    <div class="container-edge flex items-end justify-between pt-6 pb-12">
      <div class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/60">
        <p>{{ band.origin }}</p>
        <p>est. {{ band.foundedYear }}</p>
      </div>
      <div class="hidden md:block font-mono text-[11px] uppercase tracking-extra-wide text-creme/60 text-right">
        <p>↘ formação</p>
        <p class="text-creme">quinteto · 5 vozes</p>
      </div>
    </div>

    <!-- Headline -->
    <div class="container-edge">
      <h1
        ref="headlineRef"
        class="font-display text-mega text-creme leading-[0.82] uppercase overflow-hidden"
      >
        <span class="block overflow-hidden">
          <UiSplitChars :text="band.name" />
        </span>
      </h1>

      <!-- Subtítulo editorial em duas colunas -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }"
        as="div"
        class="mt-10 grid grid-cols-12 gap-gutter items-end"
      >
        <div class="col-span-12 md:col-span-7 lg:col-span-6">
          <p class="font-editorial italic text-lede text-creme text-balance">
            Quinteto de emo de Uberlândia. Tocamos
            <span class="text-coral not-italic font-sans">MCR, Green Day, Blink-182, Paramore</span>
            — e mais um setlist que <em>não acaba</em>.
            Autoral <span class="text-ouro not-italic font-sans">em breve</span>.
          </p>
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-start-9 lg:col-span-4">
          <div class="border-t border-creme/20 pt-4 space-y-3">
            <p class="eyebrow">próximas datas · 2026</p>
            <div class="flex flex-wrap gap-3">
              <a href="#shows" class="btn-coral">
                Ver agenda
                <span aria-hidden="true">↘</span>
              </a>
              <a
                href="#manifesto"
                class="inline-flex items-center gap-3 border border-creme/30 px-5 py-4
                       font-mono text-[11px] uppercase tracking-extra-wide text-creme
                       hover:bg-creme hover:text-preto transition-colors duration-300"
              >
                Sobre a banda
              </a>
            </div>
          </div>
        </div>
      </Motion>
    </div>

    <!-- Sinal técnico inferior -->
    <div class="container-edge mt-section pb-10 flex items-end justify-between">
      <p data-scroll-hint class="eyebrow flex items-center gap-3">
        <span class="inline-block h-px w-10 bg-creme/50" />
        role pra baixo · {{ band.tagline }}
      </p>
      <div class="hidden md:flex items-center gap-6 font-mono text-[10px] uppercase tracking-extra-wide text-creme/40">
        <span>ED. 01</span>
        <span>—</span>
        <span>VERSÃO 2026.05</span>
      </div>
    </div>

    <!-- Marquee inferior -->
    <div class="absolute bottom-0 left-0 right-0 border-t border-b border-creme/15 bg-preto py-3 overflow-hidden">
      <UiMarqueeText
        text="LEMON · emo · uberlândia · ao vivo"
        :repeat="8"
      >
        <span class="font-display text-2xl tracking-tight uppercase text-creme">
          LEMON
          <span class="text-coral mx-2">·</span>
          emo ao vivo
          <span class="text-coral mx-2">·</span>
          uberlândia / mg
        </span>
      </UiMarqueeText>
    </div>
  </section>
</template>
