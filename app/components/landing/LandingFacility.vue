<script setup lang="ts">
import facility01 from '@/assets/images/facility-01.jpg'
import facility02 from '@/assets/images/facility-02.jpg'
import facility03 from '@/assets/images/facility-03.jpg'
</script>
<template>
  <section id="facility" class="bg-white py-5 lg:py-28">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:gap-21"
    >
      <div
        class="relative hidden h-97.5 grid-cols-[1.2fr_.8fr] grid-rows-2 gap-2.5 sm:h-142.5 lg:grid"
      >
        <div class="group relative row-span-2 overflow-hidden rounded-s-lg">
          <img
            :src="facility01"
            alt="DigiLink customer service team"
            class="size-full object-cover brightness-75 saturate-75 transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-[#071b31]/90 via-transparent to-transparent"
          />
        </div>

        <div class="group relative overflow-hidden rounded-e-lg">
          <img
            :src="facility02"
            alt="Team planning at a table"
            class="size-full object-cover brightness-75 saturate-75 transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-[#071b31]/90 via-transparent to-transparent"
          />
        </div>

        <div class="group relative overflow-hidden rounded-e-lg">
          <img
            :src="facility03"
            alt="Professionals working together"
            class="size-full object-cover brightness-75 saturate-75 transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-[#071b31]/90 via-transparent to-transparent"
          />
        </div>

        <span
          class="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-[#041c30]/80 px-3 py-2 text-[9px] font-bold text-white backdrop-blur"
        >
          <i class="size-1.5 rounded-full bg-emerald-400" />
          100% real DigiLink facility
        </span>
      </div>
      <div class="lg:max-w-none">
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-600 uppercase">
          Inside DigiLink
        </p>
        <h2
          class="mt-5 text-5xl leading-[1.12] font-semibold tracking-tighter text-[#0c2947] lg:mt-3 lg:text-[clamp(2.25rem,4vw,3.25rem)] lg:leading-tight"
        >
          A real operation.<br />Ready to scale.
        </h2>
        <p
          class="mt-6 max-w-140 text-[15px] leading-7 text-[#688096] lg:mt-5 lg:max-w-none lg:text-base"
        >
          Our Isla de Margarita delivery center brings trained bilingual teams, dedicated
          workstations, and hands-on operational leadership together under one roof.
        </p>
        <div class="mt-8 divide-y divide-[#dfebf1] lg:mt-6">
          <div
            v-for="item in [
              {
                icon: 'i-lucide-clock-3',
                title: 'True timezone alignment',
                text: 'EST-aligned teams collaborating with your operation in real time — no overnight handoffs.'
              },
              {
                icon: 'i-lucide-messages-square',
                title: 'Bilingual by nature',
                text: 'English and Spanish fluency with cultural proximity to North American and LATAM customers.'
              },
              {
                icon: 'i-lucide-server',
                title: 'Enterprise-grade resilience',
                text: 'Redundant fiber connectivity, backup power, monitored systems, and secure workstations.'
              }
            ]"
            :key="item.title"
            class="flex gap-4 py-5 lg:gap-3 lg:py-4"
          >
            <div
              class="size-10 shrink-0 rounded-lg bg-cyan-50 p-2.5 outline outline-cyan-300 lg:p-2"
            >
              <UIcon :name="item.icon" class="h-full w-full flex-1 font-light text-cyan-300" />
            </div>
            <span class="grid gap-1">
              <b class="font-medium text-[#0c2947]">{{ item.title }}</b>
              <small class="text-xs leading-5 text-[#688096]">{{ item.text }}</small>
            </span>
          </div>
        </div>
        <a
          href="#contact"
          class="mt-10 flex items-center gap-2 text-xs font-bold text-cyan-600 lg:mt-5 lg:text-cyan-700"
        >
          Discover our delivery center
          <UIcon name="i-lucide-arrow-right" />
        </a>
      </div>
    </div>
  </section>
</template>
