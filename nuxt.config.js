export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,

  experimental: {
    appManifest: false
  },

  vite: {
    resolve: {
      alias: {
        '#app-manifest': 'mocked-exports/empty'
      }
    }
  },

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Matheus Silva — Portfólio Digital',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Sites, interfaces e produtos digitais criados com estratégia, design e desenvolvimento.'
        },
        { name: 'theme-color', content: '#050505' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Matheus Silva — Portfólio Digital' },
        {
          property: 'og:description',
          content:
            'Sites, interfaces e produtos digitais criados com estratégia, design e desenvolvimento.'
        },
        { property: 'og:locale', content: 'pt_BR' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      noscript: [
        {
          innerHTML: '<style>.page-loader{display:none!important}</style>',
          tagPosition: 'head'
        }
      ]
    }
  },

  css: [
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/anton/400.css',
    '@fontsource/instrument-serif/400.css',
    '@fontsource/instrument-serif/400-italic.css',
    '~/assets/css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/typography.css',
    '~/assets/css/animations.css',
    '~/assets/css/main.css'
  ]
})
