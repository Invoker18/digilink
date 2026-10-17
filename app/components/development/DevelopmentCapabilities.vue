<script setup lang="ts">
import SpotlightCard from '@/components/bits/spotlight-card.vue'

const { t } = useI18n()

const capabilities = computed(() => [
  {
    icon: 'i-lucide-monitor-smartphone',
    title: t('development.capabilities.items.0.title'),
    text: t('development.capabilities.items.0.text'),
    layout: 'lg:col-span-7',
    featured: true
  },
  {
    icon: 'i-lucide-plug-zap',
    title: t('development.capabilities.items.1.title'),
    text: t('development.capabilities.items.1.text'),
    layout: 'lg:col-span-5'
  },
  {
    icon: 'i-lucide-shield-check',
    title: t('development.capabilities.items.2.title'),
    text: t('development.capabilities.items.2.text'),
    layout: 'lg:col-span-5'
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    title: t('development.capabilities.items.3.title'),
    text: t('development.capabilities.items.3.text'),
    layout: 'lg:col-span-7'
  }
])
</script>

<template>
  <section id="capabilities" class="bg-silver-50 py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div data-reveal class="max-w-200">
        <p class="text-bright-blue-600 text-[11px] font-bold tracking-[.16em] uppercase">
          {{ t('development.capabilities.eyebrow') }}
        </p>
        <h2
          class="text-matisse-950 mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          {{ t('development.capabilities.title') }}
        </h2>
        <p class="text-oslo-gray-600 mt-5 max-w-180 text-[15px] leading-7">
          {{ t('development.capabilities.description') }}
        </p>
      </div>
      <div data-reveal class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
        <article
          v-for="capability in capabilities"
          :key="capability.title"
          data-reveal-item
          :class="[capability.layout, 'min-h-56']"
        >
          <SpotlightCard
            spotlight-color="rgb(8 114 201 / 0.26)"
            :class="[
              'group relative h-full overflow-hidden rounded-lg border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl',
              capability.featured
                ? 'border-bright-blue-400/35 bg-matisse-950 hover:border-bright-blue-300 text-white'
                : 'border-silver-200 hover:border-bright-blue-300 bg-white'
            ]"
          >
            <div
              v-if="capability.featured"
              class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(32_178_255/18%)_1px,transparent_1px),linear-gradient(90deg,rgb(32_178_255/18%)_1px,transparent_1px)] mask-[linear-gradient(135deg,#000,transparent_68%)] bg-size-[34px_34px] opacity-45"
            />
            <span
              :class="
                capability.featured
                  ? 'bg-bright-blue-400/15 text-bright-blue-400'
                  : 'bg-bright-blue-50 text-bright-blue-600'
              "
              class="relative grid size-11 place-items-center rounded-lg text-xl transition group-hover:scale-110"
            >
              <UIcon :name="capability.icon" />
            </span>
            <h3
              :class="capability.featured ? 'text-white' : 'text-matisse-950'"
              class="relative mt-7 text-xl font-bold"
            >
              {{ capability.title }}
            </h3>
            <p
              :class="capability.featured ? 'text-oslo-gray-200' : 'text-oslo-gray-600'"
              class="relative mt-3 max-w-110 text-[13px] leading-6"
            >
              {{ capability.text }}
            </p>
          </SpotlightCard>
        </article>
      </div>
    </div>
  </section>
</template>
