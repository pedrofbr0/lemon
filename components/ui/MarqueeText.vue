<script setup lang="ts">
interface Props {
  text: string
  /** velocidade: 'slow' | 'normal' | 'fast' */
  speed?: 'slow' | 'normal' | 'fast'
  /** inverte direção */
  reverse?: boolean
  /** separador entre repetições */
  separator?: string
  /** quantas vezes repetir o conteúdo (mínimo 2 pra loop) */
  repeat?: number
}

const props = withDefaults(defineProps<Props>(), {
  speed: 'normal',
  reverse: false,
  separator: ' · ',
  repeat: 6,
})

const speedClass = computed(() => ({
  slow: 'animate-[marquee_60s_linear_infinite]',
  normal: 'animate-marquee',
  fast: 'animate-marquee-fast',
}[props.speed]))

const items = computed(() => Array.from({ length: props.repeat }, () => props.text))
</script>

<template>
  <div
    class="relative w-full overflow-hidden"
    role="presentation"
    aria-hidden="true"
  >
    <div
      :class="[speedClass, reverse && 'direction-reverse']"
      class="flex whitespace-nowrap will-change-transform"
      style="width: max-content"
    >
      <span
        v-for="(item, i) in items"
        :key="i"
        class="inline-flex items-center"
      >
        <slot>{{ item }}</slot>
        <span aria-hidden="true" class="mx-6 inline-block">{{ separator }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.direction-reverse {
  animation-direction: reverse;
}
</style>
