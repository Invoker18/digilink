<script setup lang="ts">
import SpotlightCard from '@/components/bits/spotlight-card.vue'

const { t } = useI18n()

const engagementModels = computed(() => [
  {
    title: t('development.engagement.models.0.title'),
    description: t('development.engagement.models.0.description'),
    points: [
      t('development.engagement.models.0.points.0'),
      t('development.engagement.models.0.points.1'),
      t('development.engagement.models.0.points.2')
    ]
  },
  {
    title: t('development.engagement.models.1.title'),
    description: t('development.engagement.models.1.description'),
    points: [
      t('development.engagement.models.1.points.0'),
      t('development.engagement.models.1.points.1'),
      t('development.engagement.models.1.points.2')
    ]
  }
])
</script>

<template>
  <section class="bg-white py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div data-reveal class="text-center">
        <p class="text-bright-blue-600 text-[11px] font-bold tracking-[.16em] uppercase">
          {{ t('development.engagement.eyebrow') }}
        </p>
        <h2
          class="text-matisse-950 mt-3 text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-.04em]"
        >
          {{ t('development.engagement.title') }}
        </h2>
      </div>
      <div data-reveal class="mx-auto mt-10 grid max-w-210 gap-4 md:grid-cols-2">
        <article
          v-for="model in engagementModels"
          :key="model.title"
          data-reveal-item
          class="min-h-full"
        >
          <SpotlightCard
            spotlight-color="rgb(8 114 201 / 0.26)"
            class="border-silver-200 hover:border-bright-blue-300 relative h-full rounded-lg border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <UIcon name="i-lucide-users-round" class="text-bright-blue-600 relative size-6" />
            <h3 class="text-matisse-950 relative mt-5 text-xl font-bold">
              {{ model.title }}
            </h3>
            <p class="text-oslo-gray-600 relative mt-2 text-[14px] leading-6">
              {{ model.description }}
            </p>
            <ul class="border-silver-200 relative mt-6 grid gap-3 border-t pt-5">
              <li
                v-for="point in model.points"
                :key="point"
                class="text-matisse-800 flex items-center gap-2 text-[12px] font-medium"
              >
                <UIcon name="i-lucide-check" class="text-bright-blue-500 size-4" />{{ point }}
              </li>
            </ul>
          </SpotlightCard>
        </article>
      </div>
    </div>
  </section>
</template>
