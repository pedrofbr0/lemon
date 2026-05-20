<script setup lang="ts">
/**
 * Sticker de abacaxi reutilizável.
 *
 * Variantes:
 *  - `cool`        → abacaxi com óculos escuros (mascote principal)
 *  - `silhouette`  → silhueta preta com folha vermelha
 *  - `plain`       → amarelo simples sem óculos
 */
const props = withDefaults(
  defineProps<{
    variant?: 'cool' | 'silhouette' | 'plain'
    /** Animação leve de bobbing/wiggle */
    animated?: boolean
    /** Aplica contorno branco grosso (estilo sticker recortado) */
    sticker?: boolean
    /** Rotação em graus */
    rotate?: number
  }>(),
  {
    variant: 'silhouette',
    animated: false,
    sticker: true,
    rotate: 0,
  },
)

const src = computed(() => {
  switch (props.variant) {
    case 'cool':
      return '/brand/mascot.png'
    case 'plain':
      return '/brand/pineapple.svg'
    default:
      return '/brand/pineapple-silhouette.svg'
  }
})

const style = computed(() => ({
  transform: `rotate(${props.rotate}deg)`,
}))
</script>

<template>
  <img
    :src="src"
    :class="[
      sticker && (variant === 'cool' ? 'sticker-thick' : 'sticker'),
      animated && (variant === 'cool' ? 'animate-bob' : 'animate-wiggle'),
    ]"
    :style="style"
    alt=""
    aria-hidden="true"
    draggable="false"
  >
</template>
