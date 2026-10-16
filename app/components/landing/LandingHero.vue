<script setup lang="ts">
import hero from '@/assets/images/hero.webp'
import RotatingText from '../bits/rotating-text.vue'
import CountUp from '../bits/count-up.vue'
const metrics = ref([
  { value: 99.9, suffix: '%', label: 'Operational uptime', duration: 2 },
  { value: 24, suffix: '/7', label: 'Bilingual coverage', duration: 1 },
  { value: 20, suffix: '+', label: 'Years of experience', duration: 1 },
  { value: 4.9, suffix: '/5', label: 'Client satisfaction', duration: 2 }
])
</script>

<template>
  <section
    :style="{ backgroundImage: `url(${hero})` }"
    class="relative isolate overflow-hidden bg-[#092942] bg-cover bg-position-[68%_center] pt-29 text-white sm:pt-43 lg:bg-center"
  >
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
      class="relative z-10 mx-auto flex min-h-105 w-full max-w-295 items-center px-5 sm:min-h-120 sm:px-8 lg:min-h-132 lg:pb-0 xl:px-0"
    >
      <div class="w-full lg:w-[58%]">
        <p
          class="text-bright-blue-500 flex items-center gap-2.5 text-[10px] font-bold tracking-[.16em] uppercase"
        >
          <span
            class="bg-bright-blue-500 ring-bright-blue-500/10 size-1.5 rounded-full ring-5 motion-safe:animate-[ping_1.5s_infinite]"
          />
          Digilink Corporation
        </p>
        <h1
          class="mt-5 max-w-160 text-[clamp(2.45rem,11vw,4.4rem)] leading-[1.04] font-bold tracking-tighter"
        >
          Exceptional customer care,
          <RotatingText
            :texts="['expertly', 'thoughtfully', 'reliably']"
            main-class-name="inline-flex text-bright-blue-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            stagger-from="last"
            :initial="{ y: '100%' }"
            :animate="{ y: 0 }"
            :exit="{ y: '-120%' }"
            :stagger-duration="0.025"
            split-level-class-name="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
            :rotation-interval="4000"
          />
          <br />
          <em class="text-bright-blue-500 not-italic"> delivered.</em>
        </h1>
        <p class="text-oslo-gray-200 mt-5 max-w-140 text-[15px] leading-7 sm:mt-6 sm:text-[17px]">
          Build a bilingual, high-performance team backed by 20+ years of operational experience,
          aligned to your hours, your culture, and your growth.
        </p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <UButton
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="bg-bright-blue-500 text-matisse-950 hover:bg-bright-blue-500 justify-center font-semibold"
          >
            Build your team
          </UButton>
          <UButton
            to="#services"
            size="xl"
            variant="outline"
            color="neutral"
            icon="i-lucide-play"
            class="justify-center border-white/25 bg-white/5 text-white hover:bg-white/10"
            >Explore services</UButton
          >
        </div>
        <div class="my-10 flex items-center gap-3">
          <div class="grid gap-2">
            <b class="text-[19px] leading-tight sm:text-[22px]">
              Our people.
              <br />
              <em class="text-bright-blue-500 not-italic">Your customer experience.</em>
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
          <CountUp :to="metric.value" :from="0" :duration="2" className="text-2xl " />
          <em class="text-bright-blue-500 text-sm not-italic">{{ metric.suffix }}</em>
        </div>
        <span class="text-oslo-gray-300 w-19 text-[9px] tracking-wide uppercase">{{
          metric.label
        }}</span>
      </div>
    </div>
  </section>
</template>
