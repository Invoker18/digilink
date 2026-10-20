// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    '@vercel/speed-insights',
    '@vercel/analytics'
  ],

  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  telemetry: false,

  site: {
    // Nuxt SEO automatically uses localhost in dev — always point this at production.
    // Override per-environment with the NUXT_PUBLIC_SITE_URL env var in Vercel.
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.digilinkgroup.com',
    name: 'Digilink Corporation',
    description:
      'Bilingual B2B customer support, omnichannel call center operations, and dedicated technology teams.',
    defaultLocale: 'en',
    indexable: process.env.NODE_ENV === 'production' && process.env.NUXT_SITE_INDEXABLE !== 'false'
  },

  ui: {
    colorMode: false
  },

  // All pages are statically prerendered for Vercel edge delivery.
  routeRules: {
    '/': { prerender: true },
    '/software-development': { prerender: true },
    '/es': { prerender: true },
    '/es/software-development': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  vite: {
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollToPlugin', 'gsap/ScrollTrigger']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
        quoteProps: 'as-needed'
      }
    }
  },

  fonts: {
    defaults: {
      subsets: ['latin'], // Cuts down extra character weight files
      styles: ['normal'] // Disable italic unless strictly necessary for mobile viewports
    },
    families: [{ name: 'DM Sans', preload: true }]
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' }
    ]
  },

  // Robots: in production, allow SEO bots while blocking AI scrapers and non-search crawlers.
  // In dev/staging, crawling is blocked automatically via site.indexable.
  robots: {
    blockNonSeoBots: true
  },

  // Schema.org global identity — emitted as JSON-LD on every page.
  // `url` and `sameAs` are picked up by Google's Knowledge Graph.
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Digilink Corporation',
      url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.digilinkgroup.com',
      logo: '/logo.png',
      email: 'notifications@digilinkgroup.com',
      description:
        'Bilingual B2B customer support, omnichannel call center operations, and dedicated technology teams.',
      sameAs: ['https://www.linkedin.com/company/digilink-corporation'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        availableLanguage: ['English', 'Spanish']
      }
    }
  },

  // Sitemap auto-generates /sitemap.xml and /es/sitemap.xml.
  // `autoI18n: true` mirrors @nuxtjs/i18n prefix_except_default strategy.
  sitemap: {
    autoI18n: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' }
    ]
  }
})
