<script setup lang="ts">
type Partner = {
  name: string
  logo?: string
  logoClass: string
}

const partners: Partner[] = [
  { name: 'Printres', logo: '/images/logo-printres.svg', logoClass: 'h-9 w-38' },
  { name: 'Datalink', logo: '/images/logo-datalink.svg', logoClass: 'h-12 w-38' },
  { name: 'Arche', logo: '/images/logo-arche.webp', logoClass: 'h-16 w-38 ' }
]

const { t } = useI18n()
</script>

<template>
  <section id="partners" class="bg-matisse-950 border-y border-white/10 py-8 sm:py-10">
    <div
      data-reveal
      class="mx-auto flex w-[calc(100%-2rem)] flex-col gap-6 sm:w-[calc(100%-3rem)] lg:max-w-295 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      <p
        data-reveal-item
        class="text-bright-blue-400 shrink-0 text-center text-[10px] font-bold tracking-[.16em] uppercase lg:text-left"
      >
        {{ t('home.partners.eyebrow') }}
      </p>
      <div data-reveal-item class="grid border-white/15 sm:grid-cols-3">
        <div
          v-for="(partner, index) in partners"
          :key="partner.name"
          :class="index ? 'border-t border-white/15 sm:border-t-0' : ''"
          class="flex min-h-16 items-center justify-center px-7 py-4 sm:min-w-52"
        >
          <LazyNuxtImg
            :src="partner.logo"
            :alt="t('home.partners.logo', { name: partner.name })"
            sizes="(max-width: 640px) 100vw, 152px"
            loading="lazy"
            decoding="async"
            :class="partner.logoClass"
            class="object-contain brightness-0 invert"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
