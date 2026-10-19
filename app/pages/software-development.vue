<script setup lang="ts">
const { t } = useI18n()

// ---------------------------------------------------------------------------
// Per-page SEO meta — overrides the global defaults set in app.vue.
// Reactive getter functions ensure titles/descriptions update on locale change.
// ---------------------------------------------------------------------------
useSeoMeta({
  title: () => t('seo.developmentTitle'),
  description: () => t('seo.developmentDescription'),
  ogTitle: () => t('seo.developmentTitle'),
  ogDescription: () => t('seo.developmentDescription'),
  // twitterImage is automatically sourced from the OG image by most crawlers,
  // but setting it explicitly guarantees correct card rendering on X/Twitter.
  twitterTitle: () => t('seo.developmentTitle'),
  twitterDescription: () => t('seo.developmentDescription')
})

// ---------------------------------------------------------------------------
// Schema.org structured data for the software development page.
// defineWebPage() with type 'WebPage' ensures correct page entity.
// defineService() describes the technology delivery offering for rich results.
// ---------------------------------------------------------------------------
useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    name: () => t('seo.developmentTitle'),
    description: () => t('seo.developmentDescription')
  }),
  defineService({
    name: () => t('seo.developmentTitle'),
    description: () => t('seo.developmentDescription'),
    serviceType: 'Custom B2B software development and dedicated engineering teams',
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
  <DevelopmentHero />
  <DevelopmentCapabilities />
  <DevelopmentWorkflow />
  <DevelopmentEngagement />
  <LandingContact variant="development" />
</template>
