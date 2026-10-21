<script setup lang="ts">
import RotatingText from '../bits/rotating-text.vue'
import CountUp from '../bits/count-up.vue'

const { t } = useI18n()

const rotatingWords = computed(() => [
  t('home.hero.rotating.0'),
  t('home.hero.rotating.1'),
  t('home.hero.rotating.2')
])

const metrics = computed(() => [
  { value: 99.9, suffix: '%', label: t('home.hero.metrics.0') },
  { value: 24, suffix: '/7', label: t('home.hero.metrics.1') },
  { value: 20, suffix: '+', label: t('home.hero.metrics.2') },
  { value: 4.9, suffix: '/5', label: t('home.hero.metrics.3') }
])
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#092942] pt-29 text-white sm:pt-43">
    <NuxtImg
      src="/images/hero.webp"
      alt="Hero background"
      width="1920"
      height="1080"
      :preload="{ fetchPriority: 'high' }"
      loading="eager"
      fetchpriority="high"
      sizes="xs:320vw sm:640vw md:1024vw lg:1440vw"
      class="pointer-events-none absolute inset-2 h-full w-full object-cover blur-[3px] will-change-transform"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(9_41_66/.82)_0%,rgb(9_41_66/.72)_38%,rgb(9_41_66/.94)_100%)] lg:hidden"
    />
    <div
      class="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#092942_0%,rgb(9_41_66/.94)_29%,rgb(9_41_66/.55)_57%,rgb(9_41_66/.15)_100%)] lg:block"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(134_199_255/10%)_1px,transparent_1px),linear-gradient(90deg,rgb(134_199_255/10%)_1px,transparent_1px)] mask-[linear-gradient(90deg,#000,transparent_75%)] bg-size-[64px_64px] opacity-30"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute top-1/2 right-[max(3rem,calc((100vw-1180px)/2))] hidden h-102 w-102 -translate-y-1/2 lg:block"
    >
      <div class="absolute inset-0 rounded-full border border-white/10" />
      <div class="border-bright-blue-400/20 absolute inset-10 rounded-full border" />
      <div
        class="absolute inset-y-0 left-1/2 w-px bg-linear-to-b from-transparent via-white/15 to-transparent"
      />
      <div
        class="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"
      />
      <div class="border-bright-blue-400/45 absolute top-4 left-4 h-16 w-16 border-t border-l" />
      <div
        class="border-bright-blue-400/45 absolute right-4 bottom-4 h-16 w-16 border-r border-b"
      />
      <div
        class="bg-matisse-950/85 border-bright-blue-400/45 absolute top-1/2 left-1/2 grid size-31 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border shadow-[0_0_36px_rgb(32_178_255/0.22)] backdrop-blur-sm"
      >
        <UIcon name="i-lucide-headset" class="text-bright-blue-300 size-8" />
      </div>
      <div
        class="animate-orbit-spin pointer-events-none absolute inset-0 origin-center will-change-transform"
      >
        <span
          class="text-bright-blue-200 bg-bright-blue-400/15 animate-orbit-counter absolute top-[13%] left-0 flex origin-center items-center px-3 py-1 text-[9px] font-bold tracking-[.16em] whitespace-nowrap uppercase will-change-transform"
        >
          {{ t('home.hero.operations.label') }}
        </span>
        <span
          class="text-oslo-gray-100 bg-matisse-950/75 animate-orbit-counter absolute top-[29%] right-[-7%] flex origin-center items-center px-3 py-1 text-[9px] font-semibold tracking-[.12em] whitespace-nowrap uppercase will-change-transform"
        >
          {{ t('home.hero.operations.channels') }}
        </span>
        <span
          class="text-oslo-gray-100 bg-matisse-950/75 animate-orbit-counter absolute bottom-[22%] left-[-4%] flex origin-center items-center px-3 py-1 text-[9px] font-semibold tracking-[.12em] whitespace-nowrap uppercase will-change-transform"
        >
          {{ t('home.hero.operations.coverage') }}
        </span>
        <div
          class="text-bright-blue-200 animate-orbit-counter absolute right-[6%] bottom-[8%] flex origin-center items-center gap-2 text-[9px] font-bold tracking-[.12em] whitespace-nowrap uppercase will-change-transform"
        >
          <span
            class="bg-bright-blue-400 size-1.5 rounded-full shadow-[0_0_14px_rgb(32_178_255/0.9)]"
          />
          {{ t('home.hero.operations.status') }}
        </div>
      </div>
    </div>
    <div
      class="relative z-10 mx-auto flex min-h-105 w-full max-w-295 items-center px-5 sm:min-h-120 sm:px-8 lg:min-h-132 lg:pb-0 xl:px-0"
    >
      <div data-reveal class="w-full lg:w-[58%]">
        <p
          data-reveal-item
          class="text-bright-blue-500 flex items-center gap-2.5 text-[10px] font-bold tracking-[.16em] uppercase"
        >
          <span
            class="bg-bright-blue-500 ring-bright-blue-500/10 size-1.5 rounded-full ring-5 motion-safe:animate-[ping_1.5s_infinite]"
          />
          {{ t('home.hero.eyebrow') }}
        </p>
        <h1
          data-reveal-item
          class="mt-5 max-w-160 text-[clamp(2.45rem,11vw,4.4rem)] leading-[1.04] font-bold tracking-tighter"
        >
          <span class="block">{{ t('home.hero.titleStart') }}</span>
          <RotatingText
            :texts="rotatingWords"
            main-class-name="flex w-full text-bright-blue-500 overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
            :rotation-interval="4000"
          />

          <em class="text-bright-blue-500 block not-italic">{{ t('home.hero.titleEnd') }}</em>
        </h1>
        <p
          data-reveal-item
          class="text-oslo-gray-200 mt-5 max-w-140 text-[15px] leading-7 sm:mt-6 sm:text-[17px]"
        >
          {{ t('home.hero.description') }}
        </p>
        <div data-reveal-item class="mt-7 flex flex-col gap-3 sm:flex-row">
          <UButton
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="bg-bright-blue-500 text-matisse-950 hover:bg-bright-blue-500 justify-center font-semibold"
          >
            {{ t('home.hero.primaryAction') }}
          </UButton>
          <UButton
            to="#services"
            size="xl"
            variant="outline"
            color="neutral"
            icon="i-lucide-play"
            class="justify-center border-white/25 bg-white/5 text-white hover:bg-white/10"
          >
            {{ t('home.hero.secondaryAction') }}
          </UButton>
        </div>
        <div data-reveal-item class="my-10 flex items-center gap-3">
          <div class="grid gap-2">
            <b class="text-[19px] leading-tight sm:text-[22px]">
              {{ t('home.hero.statement') }}
              <br />
              <em class="text-bright-blue-500 not-italic">{{ t('home.hero.statementAccent') }}</em>
            </b>
          </div>
          <!-- <div class="flex">
            <b
              v-for="(avatar, index) in ['AM', 'CR', 'JS']"
              :key="avatar"
              :class="index ? '-ml-2 bg-[#c1bbed]' : 'bg-[#f0bd9b]'"
              class="grid size-7 place-items-center rounded-full border-2 border-matisse-950 text-[8px] text-matisse-950"
              >{{ avatar }}</b
            >
          </div>
          <p class="grid gap-0.5 text-[11px]">
            <strong>Real people. Real operations.</strong
            ><span class="text-[10px] text-slate-400">Built for ambitious global brands</span>
          </p> -->
        </div>
      </div>
    </div>
    <div
      class="bg-matisse-950/65 relative z-10 mx-auto grid w-full grid-cols-2 divide-y border-y border-white/10 backdrop-blur-sm sm:grid-cols-4"
    >
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="flex min-h-21 items-center justify-center gap-3 border-r border-white/10 last:border-0 sm:min-h-24"
      >
        <div class="flex items-center gap-1.5 font-bold">
          <CountUp class="text-2xl" :to="metric.value" />
          <em class="text-bright-blue-500 text-sm not-italic">{{ metric.suffix }}</em>
        </div>
        <span class="text-oslo-gray-300 w-19 text-[9px] tracking-wide uppercase">{{
          metric.label
        }}</span>
      </div>
    </div>
  </section>
</template>
