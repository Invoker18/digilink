<script setup lang="ts">
import facility01 from '@/assets/images/facility-01.webp'
import facility02 from '@/assets/images/facility-02.webp'
import facility03 from '@/assets/images/facility-03.webp'
</script>
<template>
  <section id="facility" class="bg-white py-5 lg:py-28">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:gap-21"
    >
      <div
        class="relative hidden h-97.5 grid-cols-[1.2fr_.8fr] grid-rows-2 gap-2.5 sm:h-142.5 lg:grid"
      >
        <!-- Main Left Image -->
        <div class="group relative row-span-2 overflow-hidden rounded-l-lg">
          <img
            :src="facility01"
            alt="Digilink customer service team"
            class="size-full transform-gpu object-cover brightness-75 saturate-75 transition-transform duration-500 ease-out backface-hidden group-hover:scale-105"
          />
          <div
            class="from-matisse-950/90 absolute inset-0 bg-linear-to-t via-transparent to-transparent"
          />
        </div>

        <!-- Top Right Image -->
        <div class="group relative overflow-hidden rounded-tr-lg">
          <img
            :src="facility02"
            alt="Team planning at a table"
            class="size-full transform-gpu object-cover brightness-75 saturate-75 transition-transform duration-500 ease-out backface-hidden group-hover:scale-105"
          />
          <div
            class="from-matisse-950/90 absolute inset-0 bg-linear-to-t via-transparent to-transparent"
          />
        </div>

        <!-- Bottom Right Image -->
        <div class="group relative overflow-hidden rounded-br-lg">
          <img
            :src="facility03"
            alt="Professionals working together"
            class="size-full transform-gpu object-cover brightness-75 saturate-75 transition-transform duration-500 ease-out backface-hidden group-hover:scale-105"
          />
          <div
            class="from-matisse-950/90 absolute inset-0 bg-linear-to-t via-transparent to-transparent"
          />
        </div>

        <!-- Badge -->
        <div
          class="border-bright-blue-400/35 bg-matisse-950/90 text-bright-blue-400 absolute top-3 left-3 z-10 flex items-center gap-2 rounded-lg border px-2.5 py-2 shadow-[0_10px_24px_rgb(0_149_255/0.18)] backdrop-blur sm:py-3"
        >
          <UIcon name="i-lucide-sparkles" />
          <span class="grid">
            <b class="text-[11px] text-white">20+ years</b>
            <small class="text-oslo-gray-200 text-[8px]">Of operational excellence</small>
          </span>
        </div>
      </div>
      <div class="lg:max-w-none">
        <p class="text-bright-blue-600 text-[11px] font-bold tracking-[.16em] uppercase">
          Why Digilink
        </p>
        <h2
          class="text-matisse-950 mt-5 text-5xl leading-[1.12] font-semibold tracking-tighter lg:mt-3 lg:text-[clamp(2.25rem,4vw,3.25rem)] lg:leading-tight"
        >
          Experience that scales.<br />Service that performs.
        </h2>
        <p
          class="text-oslo-gray-600 mt-6 max-w-140 text-[15px] leading-7 lg:mt-5 lg:max-w-none lg:text-base"
        >
          For more than two decades, Digilink has paired skilled teams, disciplined processes, and
          hands-on leadership to deliver dependable customer and technical experiences.
        </p>
        <div class="divide-silver-200 mt-8 divide-y lg:mt-6">
          <div
            v-for="item in [
              {
                icon: 'i-lucide-clock-3',
                title: 'Aligned to your operation',
                text: 'Responsive coverage, shared workflows, and direct collaboration keep work moving without handoffs.'
              },
              {
                icon: 'i-lucide-messages-square',
                title: 'Customer-ready communication',
                text: 'English and Spanish-speaking teams deliver clear, empathetic experiences across every channel.'
              },
              {
                icon: 'i-lucide-server',
                title: 'Reliable by design',
                text: 'Resilient connectivity, backup power, monitored systems, and secure workstations protect continuity.'
              }
            ]"
            :key="item.title"
            class="flex gap-4 py-5 lg:gap-3 lg:py-4"
          >
            <div
              class="bg-bright-blue-50 outline-bright-blue-300 size-10 shrink-0 rounded-lg p-2.5 outline lg:p-2"
            >
              <UIcon
                :name="item.icon"
                class="text-bright-blue-500 h-full w-full flex-1 font-light"
              />
            </div>
            <span class="grid gap-1">
              <b class="text-matisse-950 font-medium">{{ item.title }}</b>
              <small class="text-oslo-gray-600 text-xs leading-5">{{ item.text }}</small>
            </span>
          </div>
        </div>
        <a
          href="#contact"
          class="text-bright-blue-600 hover:text-bright-blue-500 mt-10 flex items-center gap-2 text-xs font-bold transition lg:mt-5"
        >
          See how we work
          <UIcon name="i-lucide-arrow-right" />
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
