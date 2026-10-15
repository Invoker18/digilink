<script setup lang="ts">
const metrics = [
  ['99.9', '%', 'Operational uptime'],
  ['24', '/7', 'Bilingual coverage'],
  ['40', '%+', 'Average cost savings'],
  ['4.9', '/5', 'Client satisfaction']
]
</script>

<template>
  <section class="relative overflow-hidden bg-[#071b31] pt-29 text-white sm:pt-42">
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(121_181_214/10%)_1px,transparent_1px),linear-gradient(90deg,rgb(121_181_214/10%)_1px,transparent_1px)] mask-[linear-gradient(90deg,#000,transparent_75%)] bg-size-[64px_64px] opacity-30"
    />
    <div
      class="relative mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-2 lg:items-center lg:gap-17"
    >
      <div class="pb-0 lg:pb-22">
        <p
          class="flex items-center gap-2.5 text-[10px] font-bold tracking-[.16em] text-cyan-400 uppercase"
        >
          <span class="size-1.5 rounded-full bg-emerald-400 ring-5 ring-emerald-400/10" />
          DigiLink Corporation · Isla de Margarita
        </p>
        <h1
          class="mt-5 max-w-160 text-[clamp(2.45rem,11vw,4.4rem)] leading-[1.04] font-bold tracking-tighter"
        >
          Exceptional customer care, <em class="text-cyan-400 not-italic">island engineered.</em>
        </h1>
        <p class="mt-5 max-w-140 text-[15px] leading-7 text-slate-300 sm:mt-6 sm:text-[17px]">
          Build a bilingual, high-performance contact center team from Isla de Margarita, aligned to
          your hours, your culture, and your growth.
        </p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <UButton
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="justify-center bg-cyan-400 font-bold text-[#03233d] hover:bg-cyan-300"
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
        <div class="mt-7 flex items-center gap-3">
          <div class="flex">
            <b
              v-for="(avatar, index) in ['AM', 'CR', 'JS']"
              :key="avatar"
              :class="index ? '-ml-2 bg-[#c1bbed]' : 'bg-[#f0bd9b]'"
              class="grid size-7 place-items-center rounded-full border-2 border-[#071b31] text-[8px] text-[#071b31]"
              >{{ avatar }}</b
            >
          </div>
          <p class="grid gap-0.5 text-[11px]">
            <strong>Real people. Real operations.</strong
            ><span class="text-[10px] text-slate-400">Built for ambitious global brands</span>
          </p>
        </div>
      </div>
      <figure
        class="relative mt-2 h-95 overflow-hidden rounded-l-[88px] sm:h-110 lg:mt-0 lg:-mr-10 lg:h-132 lg:rounded-l-[180px]"
      >
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
          alt="Customer service team collaborating in a modern office"
          class="size-full object-cover brightness-70 saturate-75"
        />
        <div
          class="absolute inset-0 bg-linear-to-r from-[#071b31] via-transparent to-transparent"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-[#071b31]/90 via-transparent to-transparent"
        />
        <figcaption
          class="absolute inset-x-7 bottom-6 z-10 grid gap-2 sm:right-10 sm:bottom-10 sm:left-14 sm:gap-3"
        >
          <span class="text-[8px] tracking-[.16em] text-slate-300"
            ><i class="mr-2 inline-block size-1.5 rounded-full bg-emerald-400" />DIGILINK
            OPERATIONS</span
          ><b class="text-[19px] leading-tight sm:text-[22px]"
            >Our people.<br /><em class="text-cyan-400 not-italic">Your customer experience.</em></b
          >
        </figcaption>
        <div
          class="absolute top-5 right-2 z-10 flex items-center gap-2 rounded-lg border border-white/15 bg-[#041c30]/75 px-2.5 py-2 text-cyan-400 backdrop-blur sm:top-[31%] sm:right-4 sm:px-4 sm:py-3"
        >
          <UIcon name="i-lucide-sparkles" /><span class="grid"
            ><b class="text-[11px] text-white">94.8% CSAT</b
            ><small class="text-[8px] text-slate-300">Across active programs</small></span
          >
        </div>
        <div
          class="absolute right-2 bottom-20 z-10 flex items-center gap-2 rounded-lg border border-white/15 bg-[#041c30]/75 px-2.5 py-2 backdrop-blur sm:right-6 sm:bottom-29 sm:px-4 sm:py-3"
        >
          <UIcon name="i-lucide-headset" class="text-cyan-400" /><span class="grid"
            ><b class="text-[11px]">128 bilingual agents</b
            ><small class="hidden text-[8px] text-slate-300 sm:block"
              >Ready to represent your brand</small
            ></span
          >
        </div>
      </figure>
    </div>
    <div
      class="relative mx-auto mt-7 grid w-full snap-x snap-mandatory grid-cols-[repeat(4,190px)] overflow-x-auto border-t border-white/10 sm:mt-0 sm:w-[calc(100%-3rem)] sm:grid-cols-4 sm:overflow-visible"
    >
      <div
        v-for="metric in metrics"
        :key="metric[2]"
        class="flex min-h-21 snap-start items-center justify-center gap-3 border-r border-white/10 last:border-0 sm:min-h-24"
      >
        <strong class="text-2xl"
          >{{ metric[0] }}<em class="text-sm text-cyan-400 not-italic">{{ metric[1] }}</em></strong
        ><span class="w-19 text-[9px] tracking-wide text-slate-400 uppercase">{{ metric[2] }}</span>
      </div>
    </div>
  </section>
</template>
