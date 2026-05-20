// types/index.ts
// Tipos centralizados para conteúdo. Em produção, viria de um CMS
// (Sanity, Storyblok ou Directus). Aqui ficam estáticos no /server/api.

export interface Show {
  id: string
  date: string // ISO
  city: string
  uf: string
  venue: string
  country: string
  status: 'on-sale' | 'sold-out' | 'soon' | 'free'
  ticketUrl?: string
  featured?: boolean
}

export interface Member {
  name: string
  role: string
  initials: string
}

export interface Release {
  id: string
  title: string
  type: 'lp' | 'ep' | 'single'
  year: number
  cover: string
  spotifyUrl?: string
  bandcampUrl?: string
  appleUrl?: string
  blurb: string
}

export interface PressItem {
  outlet: string
  quote: string
  url?: string
}

export interface GalleryImage {
  src: string
  alt: string
  credit?: string
  span?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface SetlistSong {
  title: string
  artist: string
}
