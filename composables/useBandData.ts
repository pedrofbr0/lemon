// composables/useBandData.ts
import type { GalleryImage, Member, PressItem, Release, SetlistSong, Show } from '~/types'

/**
 * Conteúdo da banda. Centralizado aqui pra fácil migração futura
 * pra um CMS (Sanity / Directus / Storyblok). Quando migrar, basta
 * trocar este composable por uma chamada `useFetch('/api/band')`
 * sem mexer em nenhum componente.
 */
export const useBandData = () => {
  const band = readonly({
    name: 'LEMON',
    nameDisplay: 'Lemon',
    tagline: 'ainda dá tempo de ser dramático',
    origin: 'Uberlândia · MG · Brasil',
    foundedYear: 2024,
    bio: `LEMON é o nome que a gente deu pra esse azedo que não sai. Quinteto
de Uberlândia que cresceu ouvindo MCR em fone escondido do recreio,
decorando Welcome to the Black Parade no banco de trás do carro e
descobrindo que Green Day, Blink-182 e Fall Out Boy eram um jeito de
chorar sem ninguém ver.

A gente toca essas músicas em bares pequenos, festas e festivais —
porque essa música nunca saiu do peito. Autoral ainda não tem,
mas em breve vai ter. Por enquanto: setlist longa, cinco vozes no palco
e a vontade de cantar junto.`,
  })

  // Setlist real — agrupada por artista para exibição editorial.
  const setlist: SetlistSong[] = [
    // My Chemical Romance
    { title: 'The End', artist: 'My Chemical Romance' },
    { title: 'Dead!', artist: 'My Chemical Romance' },
    { title: 'I\'m Not Okay', artist: 'My Chemical Romance' },
    { title: 'Na Na Na', artist: 'My Chemical Romance' },
    { title: 'I Don\'t Love You', artist: 'My Chemical Romance' },
    { title: 'Welcome To The Black Parade', artist: 'My Chemical Romance' },
    { title: 'Helena', artist: 'My Chemical Romance' },
    { title: 'The Ghost Of You', artist: 'My Chemical Romance' },
    { title: 'Teenagers', artist: 'My Chemical Romance' },
    { title: 'Famous Last Words', artist: 'My Chemical Romance' },
    { title: 'Blood', artist: 'My Chemical Romance' },

    // Green Day
    { title: 'Holiday', artist: 'Green Day' },
    { title: 'Boulevard Of Broken Dreams', artist: 'Green Day' },
    { title: 'American Idiot', artist: 'Green Day' },
    { title: 'Basket Case', artist: 'Green Day' },

    // Blink-182
    { title: 'Up All Night', artist: 'Blink-182' },
    { title: 'First Date', artist: 'Blink-182' },
    { title: 'I Miss You', artist: 'Blink-182' },
    { title: 'All The Small Things', artist: 'Blink-182' },
    { title: 'Stay Together For The Kids', artist: 'Blink-182' },

    // Outros
    { title: 'The Ballad of Mona Lisa', artist: 'Panic! At The Disco' },
    { title: 'Misery Business', artist: 'Paramore' },
    { title: 'Sugar, We\'re Goin Down', artist: 'Fall Out Boy' },
    { title: 'Given Up', artist: 'Linkin Park' },
    { title: 'The Kill', artist: '30 Seconds to Mars' },
    { title: 'Além de Mim', artist: 'Fresno' },
  ]

  // Lista de artistas no setlist — derivada da setlist.
  const covers: string[] = Array.from(new Set(setlist.map(s => s.artist)))

  const members: Member[] = [
    { name: 'Rodolfo Magalhães', role: 'voz principal', initials: 'RM' },
    { name: 'João Vitor Nunes', role: 'guitarra / voz', initials: 'JV' },
    { name: 'Pedro "Bicão"', role: 'guitarra / voz', initials: 'PB' },
    { name: 'Rodrigo Siero', role: 'baixo / voz', initials: 'RS' },
    { name: 'João Pedro "Bãozin"', role: 'bateria / voz', initials: 'JP' },
  ]

  const shows: Show[] = [
    {
      id: 'udia-galpao-norte-2026-06-14',
      date: '2026-06-14T22:00:00-03:00',
      city: 'Uberlândia',
      uf: 'MG',
      venue: 'Galpão Norte',
      country: 'BR',
      status: 'on-sale',
      ticketUrl: '#',
      featured: true,
    },
    {
      id: 'sp-festa-emo-2026-07-19',
      date: '2026-07-19T23:00:00-03:00',
      city: 'São Paulo',
      uf: 'SP',
      venue: 'Festa Inverno É Pra Sentir · Carbono',
      country: 'BR',
      status: 'on-sale',
      ticketUrl: '#',
    },
    {
      id: 'bh-vibe-emo-2026-08-09',
      date: '2026-08-09T22:30:00-03:00',
      city: 'Belo Horizonte',
      uf: 'MG',
      venue: 'Festa Vibe Emo · Autêntica',
      country: 'BR',
      status: 'on-sale',
      ticketUrl: '#',
    },
    {
      id: 'mqv-uberlandia-2026-09-05',
      date: '2026-09-05T20:30:00-03:00',
      city: 'Uberlândia',
      uf: 'MG',
      venue: 'Festival Mais Que Viaduto · Palco Sul',
      country: 'BR',
      status: 'free',
      ticketUrl: '#',
      featured: true,
    },
    {
      id: 'goiania-bolacha-2026-09-26',
      date: '2026-09-26T21:00:00-03:00',
      city: 'Goiânia',
      uf: 'GO',
      venue: 'Bolacha Bar',
      country: 'BR',
      status: 'on-sale',
      ticketUrl: '#',
    },
    {
      id: 'ribeirao-pinguim-2026-10-18',
      date: '2026-10-18T22:00:00-03:00',
      city: 'Ribeirão Preto',
      uf: 'SP',
      venue: 'Pinguim Rock Bar',
      country: 'BR',
      status: 'soon',
    },
  ]

  // Sem autoral ainda — placeholder "em breve".
  const releases: Release[] = []

  // Imprensa pequena / cena local.
  const press: PressItem[] = [
    {
      outlet: 'Podcast Cabeça de Vinil',
      quote: 'A LEMON tem a urgência que faltava no emo brasileiro novo — sem nostalgia, com pressa.',
    },
    {
      outlet: 'Diário do Triângulo',
      quote: 'Quinteto uberlandense leva o emo de volta pros bares pequenos onde ele nasceu.',
    },
    {
      outlet: 'Cena Independente Newsletter',
      quote: 'Cinco vozes, setlist longa e público cantando tudo do começo ao fim.',
    },
    {
      outlet: 'Festival Mais Que Viaduto · curadoria',
      quote: 'Não dá pra ignorar uma banda que faz o público gritar refrão em pé.',
    },
  ]

  // Galeria com pesos diferentes pra montar uma grid editorial assimétrica.
  const gallery: GalleryImage[] = [
    { src: '/img/gallery-01.jpg', alt: 'LEMON ao vivo no Galpão Norte', credit: 'foto: arquivo da banda', span: 'xl' },
    { src: '/img/gallery-02.jpg', alt: 'Rodolfo Magalhães em ensaio', credit: 'foto: Caio Rocha', span: 'md' },
    { src: '/img/gallery-03.jpg', alt: 'Garagem dos primeiros ensaios', credit: 'foto: arquivo da banda', span: 'sm' },
    { src: '/img/gallery-04.jpg', alt: 'Show no Bolacha Bar · 2025', credit: 'foto: Luana Prado', span: 'lg' },
    { src: '/img/gallery-05.jpg', alt: 'Sessão de fotos · 2026', credit: 'arte: João Vitor', span: 'md' },
    { src: '/img/gallery-06.jpg', alt: 'Backstage Festa Inverno É Pra Sentir', credit: 'foto: equipe Carbono', span: 'sm' },
    { src: '/img/gallery-07.jpg', alt: 'Soundcheck no MQV', credit: 'foto: equipe +QV', span: 'lg' },
  ]

  return { band, members, covers, setlist, shows, releases, press, gallery }
}
