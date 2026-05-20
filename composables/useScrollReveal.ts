// composables/useScrollReveal.ts
import { onMounted, onBeforeUnmount } from 'vue'

interface RevealOptions {
  /** seletor relativo ao container, default '[data-reveal]' */
  selector?: string
  /** distância em px do estado inicial */
  y?: number
  /** stagger entre filhos */
  stagger?: number
  /** ponto de start do ScrollTrigger */
  start?: string
  /** marca como once (default true) */
  once?: boolean
}

/**
 * Hook simples para revelar elementos quando entram na viewport.
 * GSAP é importado via plugin client-only, então este composable
 * só roda no browser.
 */
export function useScrollReveal(
  containerRef: Ref<HTMLElement | null>,
  opts: RevealOptions = {},
) {
  const {
    selector = '[data-reveal]',
    y = 40,
    stagger = 0.08,
    start = 'top 85%',
    once = true,
  } = opts

  let triggers: any[] = []

  onMounted(async () => {
    if (!import.meta.client || !containerRef.value) return
    // GSAP é registrado no plugin
    const { $gsap, $ScrollTrigger } = useNuxtApp() as any
    if (!$gsap || !$ScrollTrigger) return

    const items = containerRef.value.querySelectorAll(selector)
    if (!items.length) return

    $gsap.set(items, { y, opacity: 0 })

    const tween = $gsap.to(items, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: 'expo.out',
      stagger,
      scrollTrigger: {
        trigger: containerRef.value,
        start,
        once,
      },
    })

    triggers.push(tween.scrollTrigger)
  })

  onBeforeUnmount(() => {
    triggers.forEach(t => t?.kill?.())
    triggers = []
  })
}
