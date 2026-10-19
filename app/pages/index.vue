<script setup lang="ts">
const { t } = useI18n()

// ---------------------------------------------------------------------------
// Per-page SEO meta — overrides the global defaults set in app.vue.
// Reactive getter functions ensure titles/descriptions update on locale change.
// ---------------------------------------------------------------------------
useSeoMeta({
  title: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
  ogTitle: () => t('seo.homeTitle'),
  ogDescription: () => t('seo.homeDescription'),
  // twitterImage is automatically sourced from the OG image by most crawlers,
  // but setting it explicitly guarantees correct card rendering on X/Twitter.
  twitterTitle: () => t('seo.homeTitle'),
  twitterDescription: () => t('seo.homeDescription')
})

// ---------------------------------------------------------------------------
// Schema.org structured data for the home page.
// defineWebSite() emits the global site entity (name, url, searchAction).
// defineWebPage() marks this as the homepage.
// defineService() describes the primary B2B offering for rich results.
// ---------------------------------------------------------------------------
useSchemaOrg([
  defineWebSite({
    name: 'Digilink Corporation',
    description: () => t('seo.homeDescription')
  }),
  defineWebPage({
    '@type': 'WebPage',
    name: () => t('seo.homeTitle'),
    description: () => t('seo.homeDescription')
  }),
  defineService({
    name: () => t('seo.homeTitle'),
    description: () => t('seo.homeDescription'),
    serviceType: 'B2B customer support and outsourced call center operations',
    areaServed: 'Worldwide',
    provider: { '@id': '#identity' }
  })
])

// ---------------------------------------------------------------------------
// OG Image via Playwright screenshot.
// NOTE: Do NOT gate this with `import.meta.server`. Nuxt SEO's prerender
// crawler runs during the build phase and needs this call to execute
// unconditionally so the screenshot task is registered for every route.
// ---------------------------------------------------------------------------
defineOgImageScreenshot({
  delay: 1000
})
</script>

<template>
  <LandingHero />
  <LandingServices />
  <LandingFacility />
  <LandingInfrastructure />
  <LandingPartners />
  <LandingContact />
</template>
