<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.developmentTitle'),
  description: () => t('seo.developmentDescription')
})
</script>

<template>
  <DevelopmentHero />
  <DevelopmentCapabilities />
  <DevelopmentWorkflow />
  <DevelopmentEngagement />
  <LandingContact variant="development" />
</template>
