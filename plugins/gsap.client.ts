// plugins/gsap.client.ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  gsap.registerPlugin(ScrollTrigger)

  // Defaults editoriais — easing cinematográfico em tudo.
  gsap.defaults({
    ease: 'expo.out',
    duration: 1.1,
  })

  // Re-mede triggers depois que fontes carregam (evita layout shift quebrando posições).
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh())
  }

  // Limpa ao trocar de rota
  nuxtApp.hook('page:finish', () => {
    ScrollTrigger.refresh()
  })

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})
