// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Nuxt 4 compatibility flag — habilita o novo layout `app/` e defaults modernos.
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-10-01',

  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'motion-v/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  // SSR ligado por padrão — site é institucional/SEO crítico.
  ssr: true,

  // Otimização agressiva de imagens (banda = muita foto).
  image: {
    quality: 82,
    format: ['avif', 'webp'],
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1600,
      '4k': 2560,
    },
    densities: [1, 2],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Google Fonts — preconnect + display swap pra não bloquear render.
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500;700&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@300..700&family=JetBrains+Mono:wght@400;500&family=Permanent+Marker&display=swap',
        },
      ],
      meta: [
        { name: 'theme-color', content: '#050505' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  // Tailwind módulo aponta o config aqui pra editor TS pegar.
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    viewer: false,
  },

  nitro: {
    compressPublicAssets: { gzip: true, brotli: true },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  experimental: {
    payloadExtraction: true,
    viewTransition: false,
  },

  typescript: {
    strict: true,
    typeCheck: false, // ligue no CI com `pnpm typecheck`
  },

  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
})
