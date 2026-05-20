<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
useScrollReveal(root, { selector: '[data-reveal]', stagger: 0.12 })

const { band, members, covers, setlist } = useBandData()

// Agrupa o setlist por artista para exibição editorial.
const setlistByArtist = computed(() => {
  const map = new Map<string, string[]>()
  for (const s of setlist) {
    if (!map.has(s.artist)) map.set(s.artist, [])
    map.get(s.artist)!.push(s.title)
  }
  return Array.from(map, ([artist, songs]) => ({ artist, songs }))
})
</script>

<template>
  <section
    id="manifesto"
    ref="root"
    class="relative bg-preto py-section"
    aria-labelledby="manifesto-title"
  >
    <div class="container-edge">
      <!-- Header da seção -->
      <header class="grid grid-cols-12 gap-gutter mb-16 md:mb-24 items-end">
        <div class="col-span-12 md:col-span-3" data-reveal>
          <p class="eyebrow">01 · manifesto</p>
          <p class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/40 mt-2">
            quem somos · o que dói
          </p>
        </div>
        <h2
          id="manifesto-title"
          class="col-span-12 md:col-span-9 font-display text-giga uppercase leading-[0.88] display-mix text-balance"
          data-reveal
        >
          A música <em class="font-editorial italic">não saiu</em>
          do peito. <span class="text-coral">Agora</span> sai no palco.
        </h2>
      </header>

      <!-- Corpo do manifesto: duas colunas com regra entre -->
      <div class="grid grid-cols-12 gap-gutter">
        <div class="col-span-12 md:col-span-5 lg:col-span-4 md:border-r md:border-creme/15 md:pr-gutter" data-reveal>
          <p class="font-editorial italic text-2xl leading-snug text-creme text-balance">
            {{ band.tagline }}.
          </p>
          <div class="mt-10 space-y-1 font-mono text-[11px] uppercase tracking-extra-wide text-creme/50">
            <p>origem · {{ band.origin }}</p>
            <p>desde · {{ band.foundedYear }}</p>
            <p>formato · quinteto</p>
            <p>gênero · emo · pop punk</p>
            <p>autoral · em breve</p>
          </div>
        </div>

        <div class="col-span-12 md:col-span-7 lg:col-start-6 lg:col-span-7" data-reveal>
          <p class="font-sans text-lg md:text-xl leading-relaxed text-creme/85 text-pretty whitespace-pre-line">{{ band.bio }}</p>
        </div>
      </div>

      <!-- Setlist: agrupado por artista -->
      <div class="mt-20 md:mt-28 border-t border-creme/15 pt-10" data-reveal>
        <div class="flex items-baseline justify-between mb-8 flex-wrap gap-2">
          <p class="eyebrow">setlist · o que tocamos</p>
          <p class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/40">
            {{ setlist.length }} músicas · {{ covers.length }} artistas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-10">
          <div
            v-for="group in setlistByArtist"
            :key="group.artist"
            class="border-t border-creme/10 pt-5"
          >
            <p class="font-display text-2xl md:text-3xl uppercase leading-none text-creme">
              {{ group.artist }}
            </p>
            <p class="mt-1 font-mono text-[10px] uppercase tracking-extra-wide text-coral/80">
              {{ group.songs.length }} {{ group.songs.length === 1 ? 'música' : 'músicas' }}
            </p>
            <ul class="mt-4 space-y-1.5 font-sans text-[15px] text-creme/85">
              <li v-for="song in group.songs" :key="song" class="flex items-baseline gap-2">
                <span class="text-creme/30" aria-hidden="true">·</span>
                <span>{{ song }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="mt-10 font-editorial italic text-creme/60 text-balance max-w-2xl">
          E o que mais o público pedir — desde que a gente saiba os acordes.
        </p>
      </div>

      <!-- Membros -->
      <div class="mt-20 md:mt-28 border-t border-creme/15 pt-10" data-reveal>
        <div class="flex items-baseline justify-between mb-8">
          <p class="eyebrow">a banda</p>
          <p class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/40">{{ members.length }} / {{ members.length }} · ativos</p>
        </div>
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-gutter gap-y-10">
          <li v-for="(m, i) in members" :key="m.name" class="group" data-reveal>
            <span
              class="inline-flex h-12 w-12 items-center justify-center mb-4 border border-creme/30
                     font-mono text-xs group-hover:bg-coral group-hover:border-coral group-hover:text-creme
                     transition-colors duration-300"
            >
              {{ m.initials }}
            </span>
            <p class="font-display text-2xl tracking-tight uppercase text-creme leading-none">
              {{ m.name }}
            </p>
            <p class="mt-2 font-mono text-[11px] uppercase tracking-extra-wide text-creme/50">
              {{ m.role }}
            </p>
            <p class="mt-3 font-mono text-[10px] uppercase tracking-extra-wide text-creme/30">
              0{{ i + 1 }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
