<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription')
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
