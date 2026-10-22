<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const { locale } = useI18n()

// ---------------------------------------------------------------------------
// Global <head> tags applied to every page.
// Per-page useSeoMeta() / useHead() calls will override these as needed.
// ---------------------------------------------------------------------------
useHead({
  // %s is replaced by the page-level `title` set in useSeoMeta().
  titleTemplate: '%s | Digilink Corporation',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // Matches the primary brand color for browser chrome on mobile.
    { name: 'theme-color', content: '#0a1628' },
    // Fallback author for pages that don't set one explicitly.
    { name: 'author', content: 'Digilink Corporation' },
    // Opt into Google's rich-results features.
    { name: 'robots', content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // Apple touch icon for iOS home-screen bookmarks.
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  htmlAttrs: {
    lang: () => locale.value
  }
})

// ---------------------------------------------------------------------------
// Global Open Graph / Twitter Card defaults.
// Individual pages override title, description, and ogImage.
// ---------------------------------------------------------------------------
useSeoMeta({
  // Fallback title used if a page does not call useSeoMeta({ title }).
  title: 'Bilingual B2B Customer Support & Technology Teams',
  description:
    'Build a bilingual, high-performance team backed by 20+ years of operational experience.',
  ogSiteName: 'Digilink Corporation',
  ogType: 'website',
  // Fallback OG image used if a page-level defineOgImageScreenshot() isn't resolved yet.
  ogImage: '/og-default.png',
  ogImageAlt: 'Digilink Corporation — Bilingual B2B Customer Support & Technology Teams',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  // Twitter / X card defaults.
  twitterCard: 'summary_large_image',
  twitterSite: '@digilinkco',
  twitterCreator: '@digilinkco'
})
</script>
