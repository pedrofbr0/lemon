<script setup lang="ts">
const { band, shows } = useBandData()

// SEO ROBUSTO ----------------------------------------------------------------
const title = `${band.name} — ${band.tagline}`
const description = `${band.name} é um quinteto de emo de Uberlândia (MG). Cover de MCR, Green Day, Blink-182, Paramore, Fall Out Boy e mais. Autoral em breve. Veja os próximos shows e fale com a banda.`
const ogImage = '/og/og-lemon.jpg' // 1200x630 — preparar em /public/og/
const siteUrl = 'https://lemon.band/'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogType: 'website',
  ogUrl: siteUrl,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  twitterCard: 'summary_large_image',
  author: band.name,
  themeColor: '#050505',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

// JSON-LD --------------------------------------------------------------------
// Dois schemas: MusicGroup (info da banda) e ItemList de Event (agenda).
const jsonLd = computed(() => {
  const musicGroup = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: band.name,
    foundingDate: String(band.foundedYear),
    foundingLocation: {
      '@type': 'Place',
      name: 'Uberlândia, Minas Gerais, Brasil',
    },
    genre: ['Emo', 'Pop Punk', 'Alternative Rock'],
    url: siteUrl,
    sameAs: [
      'https://instagram.com/lemon.band',
      'https://www.youtube.com/@lemon.band',
    ],
  }

  const events = shows.map(s => ({
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: `${band.name} em ${s.city}`,
    startDate: s.date,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: s.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: s.city,
        addressRegion: s.uf,
        addressCountry: s.country,
      },
    },
    performer: { '@type': 'MusicGroup', name: band.name },
    offers: s.ticketUrl
      ? {
          '@type': 'Offer',
          url: s.ticketUrl,
          availability:
            s.status === 'sold-out'
              ? 'https://schema.org/SoldOut'
              : 'https://schema.org/InStock',
          price: s.status === 'free' ? '0' : undefined,
          priceCurrency: 'BRL',
        }
      : undefined,
  }))

  return JSON.stringify([musicGroup, ...events])
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: jsonLd,
    },
  ],
})
</script>

<template>
  <div>
    <TheHeader />

    <main>
      <HeroSection />
      <ManifestoSection />
      <ShowsSection />
      <DiscographySection />
      <GallerySection />
      <PressSection />
      <ContactSection />
    </main>

    <TheFooter />
  </div>
</template>
