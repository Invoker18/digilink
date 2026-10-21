// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    '@vercel/speed-insights',
    '@vercel/analytics',
    '@nuxt/image'
  ],

  devtools: {
    enabled: process.env.NODE_ENV !== 'production'
  },

  css: ['~/assets/css/main.css'],

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

  // Prerender all route paths (including i18n variants) statically
  routeRules: {
    '/': {
      swr: 3600, // Or whatever your current cache/SWR setting is
      cache: {
        varies: ['accept']
      }
    },
    '/software-development': {
      swr: 3600,
      cache: {
        varies: ['accept']
      }
    },
    '/es': {
      swr: 3600,
      cache: {
        varies: ['accept']
      }
    },
    '/es/software-development': {
      swr: 3600,
      cache: {
        varies: ['accept']
      }
    }
  },

  // Experimental flags for maximum speed on Vercel Edge
  experimental: {
    payloadExtraction: false, // Keeps pure static output clean of redundant json fetches
    inlineRouteRules: true
  },
  compatibilityDate: '2026-06-30',

  vite: {
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollToPlugin', 'gsap/ScrollTrigger']
    },
    build: {
      // Ensure smooth asset code-splitting
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/gsap')) {
              return 'gsap'
            }
          }
        }
      }
    }
  },
  telemetry: false,

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
      subsets: ['latin'],
      styles: ['normal'],
      fallbacks: {
        'sans-serif': ['system-ui', '-apple-system', 'sans-serif']
      }
    },
    families: [{ name: 'DM Sans', provider: 'google', preload: true }]
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

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
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
    zeroRuntime: true,
    autoI18n: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' }
    ]
  }
})
