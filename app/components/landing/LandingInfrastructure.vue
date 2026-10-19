<script setup lang="ts">
import dataCenter from '@/assets/images/datacenter.webp'
import desk from '@/assets/images/desk.webp'

const { t } = useI18n()
const features = computed(() => [
  {
    icon: 'i-lucide-server',
    title: t('home.infrastructure.features.0.title'),
    text: t('home.infrastructure.features.0.text')
  },
  {
    icon: 'i-lucide-lock-keyhole',
    title: t('home.infrastructure.features.1.title'),
    text: t('home.infrastructure.features.1.text')
  },
  {
    icon: 'i-lucide-layers-3',
    title: t('home.infrastructure.features.2.title'),
    text: t('home.infrastructure.features.2.text')
  }
])
</script>

<template>
  <section id="infrastructure" class="bg-matisse-950 py-18 text-white sm:py-28">
    <div
      data-reveal
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[1fr_.92fr] lg:items-center lg:gap-24"
    >
      <div data-reveal-item>
        <p class="text-bright-blue-400 text-[11px] font-bold tracking-[.16em] uppercase">
          {{ t('home.infrastructure.eyebrow') }}
        </p>
        <h2
          class="mt-3 max-w-145 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          {{ t('home.infrastructure.title') }}
        </h2>
        <p class="text-oslo-gray-200 mt-5 max-w-140 leading-7">
          {{ t('home.infrastructure.description') }}
        </p>
        <div class="mt-6 divide-y divide-white/10">
          <div v-for="feature in features" :key="feature.title" class="flex gap-4 py-4">
            <span
              class="bg-bright-blue-400/18 text-bright-blue-400 ring-bright-blue-400/20 grid size-9 shrink-0 place-items-center rounded-lg ring-1"
            >
              <UIcon :name="feature.icon" class="size-4" />
            </span>
            <span class="grid gap-1">
              <b class="text-[13px]">{{ feature.title }}</b>
              <small class="text-oslo-gray-300 text-[11px] leading-5">{{ feature.text }}</small>
            </span>
          </div>
        </div>
        <div
          class="border-bright-blue-400/40 bg-bright-blue-400/10 text-bright-blue-400 mt-5 flex items-center gap-3 rounded-lg border px-4 py-3"
        >
          <UIcon name="i-lucide-check" class="size-4 shrink-0" />
          <span class="grid gap-0.5">
            <b class="text-bright-blue-100 text-[10px]">{{
              t('home.infrastructure.calloutTitle')
            }}</b>
            <small class="text-bright-blue-100/50 text-[8px]">
              {{ t('home.infrastructure.calloutText') }}
            </small>
          </span>
        </div>
      </div>
      <figure
        data-reveal-item
        class="border-bright-blue-400/30 relative order-last h-90 overflow-hidden rounded-xl border sm:h-140 lg:order-0"
      >
        <img
          :src="dataCenter"
          :alt="t('home.infrastructure.dataCenterAlt')"
          width="1180"
          height="560"
          class="size-full object-cover brightness-75 saturate-75"
        />
        <div
          class="from-matisse-950/90 absolute inset-0 bg-linear-to-br via-transparent to-transparent"
        />
        <div
          class="from-matisse-950/90 absolute inset-0 bg-linear-to-tr via-transparent to-transparent"
        />
        <figcaption
          class="border-bright-blue-400/30 bg-matisse-950/90 text-bright-blue-400 absolute top-4 left-4 flex items-center gap-2 rounded-lg border px-3 py-2 backdrop-blur"
        >
          <UIcon name="i-lucide-lock-keyhole" />
          <span class="text-oslo-gray-300 grid text-[8px] tracking-[.13em] uppercase">
            {{ t('home.infrastructure.captionLabel') }}
            <b class="text-[11px] tracking-normal text-white normal-case">{{
              t('home.infrastructure.captionTitle')
            }}</b>
          </span>
        </figcaption>
        <div class="absolute bottom-5 left-5 flex items-center gap-3">
          <span
            class="size-2 rounded-full border-2 border-emerald-400 bg-emerald-400/90 ring-6 ring-emerald-400/15 motion-safe:animate-[ping_1.5s_infinite]"
          />
          <span class="grid gap-0.5"
            ><b class="text-[12px]">{{ t('home.infrastructure.networkCore') }}</b
            ><small class="text-oslo-gray-200 text-[8px]">{{
              t('home.infrastructure.networkText')
            }}</small></span
          >
        </div>
      </figure>
    </div>
    <figure
      data-reveal
      class="relative mx-auto mt-14 h-45 w-[calc(100%-2rem)] max-w-295 overflow-hidden rounded-xl border border-white/10 sm:mt-20 sm:w-[calc(100%-3rem)]"
    >
      <img
        data-reveal-image
        :src="desk"
        :alt="t('home.infrastructure.operationsAlt')"
        width="1180"
        height="360"
        class="size-full object-cover brightness-40 saturate-75"
      />
      <div
        class="from-matisse-950 via-matisse-950/70 absolute inset-0 bg-linear-to-r to-transparent"
      />
      <figcaption class="absolute inset-y-0 left-6 grid content-center gap-3 sm:left-9">
        <span class="text-bright-blue-400 text-[8px] font-bold tracking-[.16em] uppercase">{{
          t('home.infrastructure.difference')
        }}</span
        ><b class="text-xl leading-snug sm:text-2xl">{{
          t('home.infrastructure.differenceTitle')
        }}</b>
      </figcaption>
    </figure>
  </section>
</template>
