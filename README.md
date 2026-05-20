# LEMON · site oficial

Landing page premium pra banda **LEMON**, construída com Nuxt 4. Estética
editorial brutalista — manifesto, agenda de turnê, disco em destaque, galeria,
imprensa e contato.

## Stack

- **Nuxt 4** (`future.compatibilityVersion: 4`) + **Vue 3** + **TypeScript**
- **Tailwind CSS** com design tokens semânticos (paleta de alto contraste)
- **GSAP** + **ScrollTrigger** pras animações cinematográficas
- **Motion for Vue** (`motion-v`) pras microinterações declarativas
- **@nuxt/image** com AVIF/WebP automático
- **@vueuse/nuxt** pra utilitários reativos (scroll, viewport, etc.)
- SEO completo via `useSeoMeta`/`useHead` + JSON-LD (MusicGroup + MusicEvent)

## Como rodar

```bash
pnpm install     # ou npm/yarn
pnpm dev         # localhost:3000
pnpm build       # build produção
pnpm generate    # static site (SSG)
pnpm preview     # preview do build
```

## Estrutura

```
arteria/
├── app.vue                          # raiz + overlay de ruído global
├── error.vue                        # 404/500 com identidade visual
├── nuxt.config.ts                   # módulos, SEO defaults, Nitro
├── tailwind.config.ts               # tokens, tipografia, animações
├── tsconfig.json
│
├── assets/
│   └── css/main.css                 # reset, variáveis, utilitários editoriais
│
├── components/
│   ├── TheHeader.vue                # nav fixa com toggle scroll
│   ├── TheFooter.vue                # rodapé com wordmark gigante
│   ├── HeroSection.vue              # abertura com GSAP + Motion
│   ├── ManifestoSection.vue         # bio + membros
│   ├── ShowsSection.vue             # agenda em tabela editorial
│   ├── DiscographySection.vue       # disco novo em destaque
│   ├── GallerySection.vue           # grid assimétrica
│   ├── PressSection.vue             # citações de imprensa
│   ├── ContactSection.vue           # contratação · imprensa · parcerias
│   └── ui/
│       ├── MarqueeText.vue          # esteira de texto infinita (CSS)
│       └── SplitChars.vue           # split de chars pra stagger
│
├── composables/
│   ├── useBandData.ts               # fonte única de conteúdo (→ CMS futuro)
│   └── useScrollReveal.ts           # wrapper GSAP ScrollTrigger
│
├── plugins/
│   └── gsap.client.ts               # registra GSAP só no client
│
├── pages/
│   └── index.vue                    # landing principal + JSON-LD
│
├── types/
│   └── index.ts                     # Show, Member, Release, etc.
│
└── public/
    ├── og/                          # imagens Open Graph (1200×630)
    ├── img/                         # fotos da banda
    └── favicon.svg
```

## Decisões de arquitetura

### Conteúdo
Todo o conteúdo da banda vive em `composables/useBandData.ts`. Quando rolar a
integração com CMS (Sanity / Directus / Storyblok), basta trocar esse composable
por uma chamada `useFetch('/api/band')` sem mexer em **nenhum componente**.

### Animações
- **GSAP** pra cenas pesadas (parallax na hero, scroll triggers, split chars).
- **Motion for Vue** pra microinterações declarativas inline nos templates
  (`<Motion :initial=... :animate=...>`). Os dois coexistem bem.
- Plugin GSAP é `client.ts` puro — zero peso no SSR/JS bundle inicial.
- `prefers-reduced-motion: reduce` é respeitado globalmente no `main.css`.

### Performance
- SSR com `payloadExtraction` ligado.
- Brotli + gzip em assets via Nitro.
- Fontes carregam com `display=swap` + `preconnect`.
- Imagens via `@nuxt/image` com AVIF/WebP e múltiplos densities (1x/2x).
- `prerender` da home — site institucional, SSG faz sentido.
- CSS code-split via Vite.

### SEO
- `useSeoMeta` com OG + Twitter Card completos.
- JSON-LD com `MusicGroup` + `MusicEvent` (cada show vira evento estruturado
  pro Google indexar como rich result na busca por shows/concertos).
- `htmlAttrs.lang = pt-BR`, canonical, theme-color, sitemap via Nitro
  prerender.

### Acessibilidade
- Foco visível com `outline` ouro de alto contraste.
- `prefers-reduced-motion` desliga animações.
- `aria-label`, `aria-expanded`, `aria-hidden` em todos os elementos
  apropriados.
- Hierarquia de headings respeitada (1 H1 só, demais H2/H3).

## Pendências / próximos passos

1. **Fotografia**: adicionar fotos reais em `/public/img/` — os componentes
   já estão preparados com `NuxtImg`. Fallback colorido aparece quando não
   há imagem (útil em dev).
2. **OG image**: gerar `og-arteria.jpg` (1200×630) em `/public/og/`.
3. **Favicon**: substituir `/public/favicon.svg` pelo logo final.
4. **Pixel/Analytics**: adicionar Plausible/Umami (privacy-first) no
   `nuxt.config.ts` via `app.head.script`.
5. **CMS**: migrar `useBandData` pra `useFetch` quando o cliente quiser
   editar conteúdo sem deploy.
6. **i18n** (opcional): se rolar turnê internacional, plugar `@nuxtjs/i18n`
   pra PT/EN.

## Paleta

| Token            | Hex       | Uso                                     |
|------------------|-----------|-----------------------------------------|
| `preto`          | `#050505` | Background dominante                    |
| `creme`          | `#FBE7B4` | Texto principal sobre preto             |
| `coral`          | `#EA4435` | Destaque, CTA, seção de contato         |
| `azul-royal`     | `#00167D` | Profundidade — seção de shows           |
| `azul-vivo`      | `#288AC8` | Acento secundário, status "grátis"      |
| `ouro`           | `#FFD15D` | Detalhes, foco, status "à venda"        |

## Tipografia

- **Display**: Anton — pôsteres, headlines mega
- **Editorial**: Fraunces (italic) — acentos serif dentro dos display
- **Body**: Inter — texto corrido
- **Mono**: JetBrains Mono — eyebrows, metadata técnica
