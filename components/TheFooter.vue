<script setup lang="ts">
const { band } = useBandData()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative bg-preto text-creme border-t border-creme/15 pt-16 pb-10">
    <div class="container-edge">
      <!-- Wordmark gigante decorativo -->
      <div class="font-display text-mega uppercase leading-[0.85] tracking-tightest text-creme/10 select-none">
        {{ band.name }}
      </div>

      <div class="mt-12 grid grid-cols-12 gap-gutter border-t border-creme/15 pt-8">
        <div class="col-span-12 md:col-span-4">
          <p class="font-mono text-[11px] uppercase tracking-extra-wide text-creme/60">
            {{ band.name }} · {{ band.origin }}
          </p>
          <p class="mt-3 font-editorial italic text-creme/80">
            {{ band.tagline }}.
          </p>
        </div>

        <nav class="col-span-6 md:col-span-3" aria-label="rodapé · navegação">
          <p class="eyebrow mb-3">site</p>
          <ul class="space-y-2 font-mono text-xs uppercase tracking-wide">
            <li><a href="#manifesto" class="link-rev">manifesto</a></li>
            <li><a href="#shows" class="link-rev">shows</a></li>
            <li><a href="#disco" class="link-rev">autoral</a></li>
            <li><a href="#galeria" class="link-rev">galeria</a></li>
            <li><a href="#contato" class="link-rev">contato</a></li>
          </ul>
        </nav>

        <nav class="col-span-6 md:col-span-3" aria-label="rodapé · redes">
          <p class="eyebrow mb-3">acompanhe</p>
          <ul class="space-y-2 font-mono text-xs uppercase tracking-wide">
            <li><a href="#" class="link-rev">instagram ↗</a></li>
            <li><a href="#" class="link-rev">tiktok ↗</a></li>
            <li><a href="#" class="link-rev">youtube ↗</a></li>
          </ul>
        </nav>

        <div class="col-span-12 md:col-span-2 text-right">
          <p class="eyebrow mb-3">© {{ year }}</p>
          <p class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/40">
            todos os direitos reservados
          </p>
        </div>
      </div>

      <!-- Linha de créditos -->
      <div class="mt-12 flex flex-col md:flex-row gap-3 md:gap-0 md:items-center md:justify-between border-t border-creme/15 pt-6">
        <p class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/30">
          design + dev · estúdio próprio · 2026
        </p>
        <p class="font-mono text-[10px] uppercase tracking-extra-wide text-creme/30">
          construído com nuxt 4 · vue 3 · gsap · motion
        </p>
      </div>
    </div>
  </footer>
</template>
