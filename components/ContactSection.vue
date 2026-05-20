<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
useScrollReveal(root, { selector: '[data-reveal]', stagger: 0.1 })

const channels = [
  {
    title: 'Contratação',
    detail: 'Booking · bares · festas · festivais',
    email: 'producao@lemon.band',
    name: 'Rodolfo Magalhães · responde direto',
  },
  {
    title: 'Imprensa',
    detail: 'Press kit · entrevistas · fotos em alta',
    email: 'imprensa@lemon.band',
    name: 'João Vitor · comunicação',
  },
  {
    title: 'Parcerias',
    detail: 'Selos · coletivos · projetos especiais',
    email: 'contato@lemon.band',
    name: 'a banda inteira lê',
  },
]

const socials = [
  { label: 'Instagram', url: '#' },
  { label: 'TikTok', url: '#' },
  { label: 'YouTube', url: '#' },
]
</script>

<template>
  <section
    id="contato"
    ref="root"
    class="relative bg-coral text-preto py-section overflow-hidden"
    aria-labelledby="contact-title"
  >
    <!-- Texturas -->
    <div aria-hidden="true" class="absolute inset-0 opacity-20 bg-grid-faint bg-grid-faint pointer-events-none" />
    <div aria-hidden="true" class="absolute -bottom-32 -right-20 h-[60vh] w-[60vh] rounded-full bg-azul-royal/40 blur-3xl pointer-events-none" />

    <div class="container-edge relative">
      <header class="grid grid-cols-12 gap-gutter mb-16 items-end">
        <div class="col-span-12 md:col-span-3" data-reveal>
          <p class="eyebrow !text-preto/70">06 · contato</p>
        </div>
        <h2
          id="contact-title"
          class="col-span-12 md:col-span-9 font-display text-giga uppercase leading-[0.85] display-mix text-balance"
          data-reveal
        >
          Chama a gente
          <em class="font-editorial italic">pra tocar</em>.
        </h2>
      </header>

      <!-- Canais -->
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <li
          v-for="c in channels"
          :key="c.title"
          class="border-t-2 border-preto pt-6 group"
          data-reveal
        >
          <p class="font-mono text-[10px] uppercase tracking-extra-wide text-preto/60">{{ c.detail }}</p>
          <p class="mt-2 font-display text-4xl uppercase leading-none">{{ c.title }}</p>
          <a
            :href="`mailto:${c.email}`"
            class="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide
                   border-b border-preto pb-1 hover:gap-4 transition-all duration-300"
          >
            {{ c.email }} <span aria-hidden="true">↘</span>
          </a>
          <p class="mt-4 font-editorial italic text-preto/80">{{ c.name }}</p>
        </li>
      </ul>

      <!-- Rodapé do bloco: mascote + recado + socials -->
      <div class="mt-section grid grid-cols-12 gap-gutter items-center" data-reveal>
        <!-- Mascote LEMON -->
        <div class="col-span-12 md:col-span-5 flex justify-center md:justify-start">
          <BrandPineapple
            variant="cool"
            :animated="true"
            :rotate="-6"
            class="w-[240px] md:w-[320px] lg:w-[380px] max-w-full"
          />
        </div>

        <div class="col-span-12 md:col-span-7 space-y-8">
          <p class="font-editorial italic text-3xl md:text-4xl leading-tight text-balance">
            A gente toca em bar pequeno, festa universitária, festival, casa de amigo. <br>
            Manda mensagem.
          </p>
          <ul class="flex flex-wrap gap-x-6 gap-y-3">
            <li v-for="s in socials" :key="s.label">
              <a
                :href="s.url"
                target="_blank"
                rel="noopener"
                class="font-mono text-xs uppercase tracking-extra-wide link-rev"
              >
                {{ s.label }} ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
