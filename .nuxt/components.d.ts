
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const BrandPineapple: typeof import("../components/BrandPineapple.vue")['default']
export const ContactSection: typeof import("../components/ContactSection.vue")['default']
export const DiscographySection: typeof import("../components/DiscographySection.vue")['default']
export const GallerySection: typeof import("../components/GallerySection.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const ManifestoSection: typeof import("../components/ManifestoSection.vue")['default']
export const PressSection: typeof import("../components/PressSection.vue")['default']
export const ShowsSection: typeof import("../components/ShowsSection.vue")['default']
export const TheFooter: typeof import("../components/TheFooter.vue")['default']
export const TheHeader: typeof import("../components/TheHeader.vue")['default']
export const UiMarqueeText: typeof import("../components/ui/MarqueeText.vue")['default']
export const UiSplitChars: typeof import("../components/ui/SplitChars.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Motion: typeof import("motion-v")['Motion']
export const AnimatePresence: typeof import("motion-v")['AnimatePresence']
export const LayoutGroup: typeof import("motion-v")['LayoutGroup']
export const MotionConfig: typeof import("motion-v")['MotionConfig']
export const ReorderGroup: typeof import("motion-v")['ReorderGroup']
export const ReorderItem: typeof import("motion-v")['ReorderItem']
export const M: typeof import("motion-v")['M']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyBrandPineapple: LazyComponent<typeof import("../components/BrandPineapple.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../components/ContactSection.vue")['default']>
export const LazyDiscographySection: LazyComponent<typeof import("../components/DiscographySection.vue")['default']>
export const LazyGallerySection: LazyComponent<typeof import("../components/GallerySection.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyManifestoSection: LazyComponent<typeof import("../components/ManifestoSection.vue")['default']>
export const LazyPressSection: LazyComponent<typeof import("../components/PressSection.vue")['default']>
export const LazyShowsSection: LazyComponent<typeof import("../components/ShowsSection.vue")['default']>
export const LazyTheFooter: LazyComponent<typeof import("../components/TheFooter.vue")['default']>
export const LazyTheHeader: LazyComponent<typeof import("../components/TheHeader.vue")['default']>
export const LazyUiMarqueeText: LazyComponent<typeof import("../components/ui/MarqueeText.vue")['default']>
export const LazyUiSplitChars: LazyComponent<typeof import("../components/ui/SplitChars.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyMotion: LazyComponent<typeof import("motion-v")['Motion']>
export const LazyAnimatePresence: LazyComponent<typeof import("motion-v")['AnimatePresence']>
export const LazyLayoutGroup: LazyComponent<typeof import("motion-v")['LayoutGroup']>
export const LazyMotionConfig: LazyComponent<typeof import("motion-v")['MotionConfig']>
export const LazyReorderGroup: LazyComponent<typeof import("motion-v")['ReorderGroup']>
export const LazyReorderItem: LazyComponent<typeof import("motion-v")['ReorderItem']>
export const LazyM: LazyComponent<typeof import("motion-v")['M']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
