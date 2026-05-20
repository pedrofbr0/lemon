<script setup lang="ts">
/**
 * Quebra um texto em palavras + caracteres preservando espaços e
 * adicionando data-split-char nas letras pra GSAP fazer stagger.
 * Mantém acessibilidade — o texto original fica em aria-label.
 */
interface Props {
  text: string
  tag?: string
  splitBy?: 'char' | 'word'
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  splitBy: 'char',
})

const tokens = computed(() => {
  if (props.splitBy === 'word') {
    return props.text.split(/(\s+)/).map(w => ({ type: /\s/.test(w) ? 'space' : 'word', value: w }))
  }
  return props.text.split('').map(c => ({ type: c === ' ' ? 'space' : 'char', value: c }))
})
</script>

<template>
  <component
    :is="tag"
    :aria-label="text"
    class="inline-block"
  >
    <template v-for="(token, i) in tokens" :key="i">
      <span
        v-if="token.type === 'space'"
        aria-hidden="true"
        class="inline-block"
        style="width: 0.25em"
      >&nbsp;</span>
      <span
        v-else
        aria-hidden="true"
        :data-split-char="splitBy"
        class="inline-block will-change-transform"
      >{{ token.value }}</span>
    </template>
  </component>
</template>
