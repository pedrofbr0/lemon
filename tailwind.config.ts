import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal — tokens semânticos primeiro.
        preto: '#050505',
        'preto-2': '#0d0d0d',
        creme: '#FBE7B4',
        'creme-2': '#F4D993',
        coral: '#EA4435',
        'coral-2': '#C8331C',
        'azul-royal': '#00167D',
        'azul-vivo': '#288AC8',
        ouro: '#FFD15D',

        // Aliases semânticos
        ink: '#050505',
        paper: '#FBE7B4',
        accent: '#EA4435',
        deep: '#00167D',
        spark: '#FFD15D',
      },
      fontFamily: {
        display: ['Anton', 'Impact', ...defaultTheme.fontFamily.sans],
        editorial: ['Fraunces', 'Georgia', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        // Identidade visual: handwritten / marker / sticker
        marker: ['"Permanent Marker"', '"Caveat"', 'cursive'],
        scribble: ['"Caveat"', '"Permanent Marker"', 'cursive'],
      },
      fontSize: {
        // Escala editorial — saltos grandes pra hierarquia agressiva.
        'mega': ['clamp(4rem, 14vw, 18rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'giga': ['clamp(2.75rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'kilo': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'lede': ['clamp(1.25rem, 1.8vw, 1.75rem)', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'extra-wide': '0.22em',
      },
      spacing: {
        'gutter': 'clamp(1.25rem, 3vw, 2.5rem)',
        'section': 'clamp(4rem, 10vw, 9rem)',
      },
      maxWidth: {
        'page': '1760px',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'grid-faint': 'linear-gradient(rgba(251,231,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,231,180,0.04) 1px, transparent 1px)',
        'scribble': "url('/brand/scribble-pattern.svg')",
        'grunge': "url('/brand/grunge-texture.svg')",
      },
      backgroundSize: {
        'grid-faint': '64px 64px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        'glitch-y': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '20%': { transform: 'translate3d(-2px,1px,0)' },
          '40%': { transform: 'translate3d(2px,-1px,0)' },
          '60%': { transform: 'translate3d(-1px,2px,0)' },
          '80%': { transform: 'translate3d(1px,-2px,0)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.78' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        glitch: 'glitch-y 320ms steps(4) 1',
        flicker: 'flicker 3.2s ease-in-out infinite',
        wiggle: 'wiggle 4.5s ease-in-out infinite',
        bob: 'bob 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
