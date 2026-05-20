<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-preto text-creme flex flex-col items-center justify-center px-gutter text-center">
    <p class="eyebrow mb-6">erro · {{ error.statusCode }}</p>
    <h1 class="font-display text-mega uppercase leading-[0.85]">
      {{ error.statusCode === 404 ? 'Página perdida' : 'Algo quebrou' }}
    </h1>
    <p class="mt-8 font-editorial italic text-2xl max-w-xl text-creme/80">
      {{ error.message || 'Tente voltar e seguir um dos caminhos do site.' }}
    </p>
    <button class="btn-coral mt-12" @click="handleError">
      Voltar pra home <span aria-hidden="true">↘</span>
    </button>
  </div>
</template>
