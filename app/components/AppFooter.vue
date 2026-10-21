<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const homeAnchor = (anchor: string) =>
  route.path === localePath('/') ? anchor : `${localePath('/')}${anchor}`
const contactAnchor = () => {
  const contactRoutes = [localePath('/'), localePath('/software-development')]
  return contactRoutes.includes(route.path) ? '#contact' : `${localePath('/')}#contact`
}
const currentYear = new Date().getFullYear()

const serviceLinks = computed(() => [
  { label: t('footer.callCenter'), href: homeAnchor('#services') },
  { label: t('footer.technicalSupport'), href: homeAnchor('#services') },
  { label: t('footer.softwareDevelopment'), href: localePath('/software-development') }
])

const companyLinks = computed(() => [
  { label: t('footer.ourAdvantage'), href: homeAnchor('#facility') },
  { label: t('footer.infrastructure'), href: homeAnchor('#infrastructure') },
  { label: t('footer.contact'), href: contactAnchor() }
])
</script>

<template>
  <footer class="bg-matisse-950 text-oslo-gray-300 border-t border-white/10">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-10 py-14 sm:w-[calc(100%-3rem)] sm:py-18 lg:grid-cols-[1.35fr_.8fr_.8fr_1fr] lg:gap-12"
    >
      <div>
        <NuxtImg
          src="/images/logo-digilink.png"
          alt="Digilink Corporation"
          width="160"
          height="40"
          loading="lazy"
          decoding="async"
          format="webp"
          class="w-40"
        />
        <p class="text-oslo-gray-300 mt-5 max-w-69 text-[12px] leading-6">
          {{ t('footer.description') }}
        </p>
        <a
          :href="contactAnchor()"
          class="text-bright-blue-400 hover:text-bright-blue-300 mt-6 inline-flex items-center gap-2 text-[12px] font-bold transition"
          >{{ t('footer.startConversation') }} <UIcon name="i-lucide-arrow-up-right" class="size-4"
        /></a>
      </div>

      <div class="grid content-start gap-3 text-[12px]">
        <b class="mb-2 text-[10px] tracking-[.14em] text-white uppercase">{{
          t('footer.services')
        }}</b>
        <a
          v-for="link in serviceLinks"
          :key="link.label"
          :href="link.href"
          class="hover:text-bright-blue-400 w-fit transition"
          >{{ link.label }}</a
        >
      </div>

      <div class="grid content-start gap-3 text-[12px]">
        <b class="mb-2 text-[10px] tracking-[.14em] text-white uppercase">{{
          t('footer.company')
        }}</b>
        <a
          v-for="link in companyLinks"
          :key="link.label"
          :href="link.href"
          class="hover:text-bright-blue-400 w-fit transition"
          >{{ link.label }}</a
        >
      </div>

      <div class="border-t border-white/10 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-9">
        <p class="text-bright-blue-400 text-[10px] font-bold tracking-[.14em] uppercase">
          {{ t('footer.eyebrow') }}
        </p>
        <p class="mt-3 text-[14px] leading-6 text-white">
          {{ t('footer.title') }}
        </p>
        <p class="text-oslo-gray-300 mt-2 text-[11px] leading-5">
          {{ t('footer.copy') }}
        </p>
        <span class="text-oslo-gray-300 mt-5 flex items-center gap-2 text-[10px]">
          {{ t('footer.tagline') }}
        </span>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div
        class="text-oslo-gray-400 mx-auto flex w-[calc(100%-2rem)] flex-col gap-3 py-5 text-[10px] sm:w-[calc(100%-3rem)] sm:flex-row sm:items-center sm:justify-between"
      >
        <span>© {{ currentYear }} Digilink Corporation. {{ t('footer.copyright') }}</span>
        <span>{{ t('footer.bottomTagline') }}</span>
      </div>
    </div>
  </footer>
</template>
