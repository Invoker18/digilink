<script setup lang="ts">
import desk from '@/assets/images/desk.webp'
import deskMobile from '@/assets/images/desk-mobile.webp'
import RotatingText from '@/components/bits/rotating-text.vue'

const { t } = useI18n()
const rotatingWords = computed(() => [
  t('development.hero.rotating.0'),
  t('development.hero.rotating.1'),
  t('development.hero.rotating.2')
])
const principles = computed(() => [
  {
    title: t('development.hero.principles.0.title'),
    text: t('development.hero.principles.0.text')
  },
  {
    title: t('development.hero.principles.1.title'),
    text: t('development.hero.principles.1.text')
  },
  { title: t('development.hero.principles.2.title'), text: t('development.hero.principles.2.text') }
])

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: deskMobile,
      media: '(max-width: 1023px)',
      fetchpriority: 'high'
    },
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: desk,
      media: '(min-width: 1024px)',
      fetchpriority: 'high'
    }
  ]
})
</script>

<template>
  <section class="bg-matisse-950 relative isolate overflow-hidden pt-29 text-white sm:pt-42">
    <div
      :style="{
        '--desk-mobile': `url(${deskMobile})`,
        '--desk-desktop': `url(${desk})`
      }"
      class="pointer-events-none absolute -inset-2 scale-[1.02] bg-(image:--desk-mobile) bg-cover bg-center blur-[3px] lg:bg-(image:--desk-desktop) lg:bg-center"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(6_31_56/.88)_0%,rgb(6_31_56/.72)_45%,rgb(6_31_56/.94)_100%)] lg:hidden"
    />
    <div
      class="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#061f38_0%,rgb(6_31_56/.94)_31%,rgb(6_31_56/.58)_58%,rgb(6_31_56/.22)_100%)] lg:block"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(134_199_255/10%)_1px,transparent_1px),linear-gradient(90deg,rgb(134_199_255/10%)_1px,transparent_1px)] mask-[linear-gradient(90deg,#000,transparent_75%)] bg-size-[64px_64px] opacity-30"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute top-1/2 right-[max(4rem,calc((100vw-1180px)/2))] hidden h-105 w-105 -translate-y-1/2 lg:block"
    >
      <div class="absolute inset-y-0 left-1/2 w-px bg-white/10" />
      <div class="absolute inset-x-0 top-1/2 h-px bg-white/10" />
      <div
        class="border-bright-blue-400/45 animate-systems-corner-top absolute top-7 left-7 h-18 w-18 origin-top-left border-t border-l will-change-transform"
      />
      <div
        class="border-bright-blue-400/45 animate-systems-corner-bottom absolute right-7 bottom-7 h-18 w-18 origin-bottom-right border-r border-b will-change-transform"
      />
      <div class="pointer-events-none absolute inset-0 origin-center">
        <span
          class="bg-bright-blue-400/15 text-bright-blue-200 absolute top-[14%] left-[8%] origin-center px-3 py-1 text-[9px] font-bold tracking-[.16em] uppercase"
          >{{ t('development.hero.map.product') }}</span
        >
        <span
          class="bg-bright-blue-400/15 text-bright-blue-200 absolute top-[14%] right-[4%] origin-center px-3 py-1 text-[9px] font-bold tracking-[.16em] uppercase"
          >{{ t('development.hero.map.systems') }}</span
        >
        <span
          class="bg-bright-blue-400/15 text-bright-blue-200 absolute bottom-[14%] left-[16%] origin-center px-3 py-1 text-[9px] font-bold tracking-[.16em] uppercase"
          >{{ t('development.hero.map.data') }}</span
        >
      </div>
      <span
        class="border-bright-blue-300 bg-matisse-950/85 text-bright-blue-300 animate-systems-core absolute top-1/2 left-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-[10px] font-bold tracking-[.16em] uppercase shadow-[0_0_36px_rgb(32_178_255/0.24)]"
        >{{ t('development.hero.map.delivery') }}</span
      >
      <span
        class="bg-bright-blue-400 animate-systems-node absolute top-[29%] left-[31%] size-2 rounded-full shadow-[0_0_20px_rgb(32_178_255/0.9)]"
      />
      <span
        class="bg-bright-blue-400 animate-systems-node animate-delay-1 absolute top-[31%] right-[28%] size-2 rounded-full shadow-[0_0_20px_rgb(32_178_255/0.9)]"
      />
      <span
        class="bg-bright-blue-400 animate-systems-node animate-delay-2 absolute bottom-[29%] left-[37%] size-2 rounded-full shadow-[0_0_20px_rgb(32_178_255/0.9)]"
      />
    </div>
    <div
      class="relative z-10 mx-auto flex min-h-120 w-[calc(100%-2rem)] max-w-295 items-center pb-16 sm:min-h-132 sm:w-[calc(100%-3rem)] sm:pb-24"
    >
      <div data-reveal class="w-full lg:w-[56%]">
        <p
          data-reveal-item
          class="text-bright-blue-400 flex items-center gap-2.5 text-[10px] font-bold tracking-[.16em] uppercase"
        >
          <span
            class="bg-bright-blue-400 ring-bright-blue-400/10 size-1.5 rounded-full ring-5 motion-safe:animate-[ping_1.5s_infinite]"
          />
          {{ t('development.hero.eyebrow') }}
        </p>
        <h1
          data-reveal-item
          class="mt-5 max-w-155 text-[clamp(2.6rem,7vw,5rem)] leading-[1.02] font-bold tracking-tighter"
        >
          <span class="block">{{ t('development.hero.titleStart') }}</span>
          <RotatingText
            :texts="rotatingWords"
            main-class-name="flex w-full text-bright-blue-400 overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
            :rotation-interval="4000"
          />
        </h1>
        <p
          data-reveal-item
          class="text-oslo-gray-200 mt-6 max-w-130 text-[16px] leading-7 sm:text-[18px]"
        >
          {{ t('development.hero.description') }}
        </p>
        <div data-reveal-item class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UButton
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="bg-bright-blue-500 text-matisse-950 hover:bg-bright-blue-400 justify-center font-bold"
          >
            {{ t('development.hero.primaryAction') }}
          </UButton>
          <UButton
            to="#capabilities"
            size="xl"
            variant="outline"
            color="neutral"
            class="justify-center border-white/25 bg-white/5 text-white hover:bg-white/10"
          >
            {{ t('development.hero.secondaryAction') }}
          </UButton>
        </div>
        <div data-reveal-item class="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <span v-for="principle in principles" :key="principle.title" class="grid gap-1"
            ><b class="text-bright-blue-400 text-xl">{{ principle.title }}</b
            ><small class="text-oslo-gray-300 text-[10px]">{{ principle.text }}</small></span
          >
        </div>
      </div>
    </div>
  </section>
</template>
