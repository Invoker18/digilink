<script setup lang="ts">
import SpotlightCard from '../bits/spotlight-card.vue'

const primaryService = {
  number: '01',
  icon: 'i-lucide-headset',
  title: 'Call Center',
  text: 'Bilingual voice, chat, email, and social support teams that represent your brand around the clock.',
  points: ['EST-aligned coverage', 'English & Spanish agents', 'Live QA and coaching']
}

const secondaryServices = [
  {
    number: '02',
    icon: 'i-lucide-wrench',
    title: 'Technical Support',
    text: 'Tier 1 and Tier 2 troubleshooting delivered by technically fluent, process-driven specialists.',
    href: '#contact',
    action: 'Start a conversation'
  },
  {
    number: '03',
    icon: 'i-lucide-code-2',
    title: 'Software Development',
    text: 'Dedicated development talent for web applications, integrations, product improvements, and ongoing delivery.',
    href: '/software-development',
    action: 'Explore service'
  }
]

const waveBars = ['h-3', 'h-5', 'h-8', 'h-4', 'h-7']
</script>

<template>
  <section id="services" class="bg-silver-50 py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div class="mb-9 sm:mb-12">
        <p class="text-bright-blue-600 text-[11px] font-bold tracking-[.16em] uppercase">
          What we do
        </p>
        <div
          class="mt-4 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
        >
          <h2
            class="text-matisse-950 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
          >
            Built around conversations that matter.
          </h2>
          <p
            class="text-oslo-gray-600 max-w-120 text-[14px] leading-7 sm:text-[15px] lg:self-end lg:text-right"
          >
            Our call center is the heart of Digilink. Add technical and development talent as your
            operation grows.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-88 lg:grid-cols-12">
        <article class="col-span-1 h-full min-h-72 sm:col-span-2 lg:col-span-6">
          <SpotlightCard
            spotlight-color="rgb(0 149 255 / 0.28)"
            class="border-bright-blue-400/25 bg-matisse-950 group relative flex h-full w-full flex-col overflow-hidden rounded-lg border p-4 text-balance text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
          >
            <div
              class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(32_178_255/18%)_1px,transparent_1px),linear-gradient(90deg,rgb(32_178_255/18%)_1px,transparent_1px)] mask-[linear-gradient(135deg,#000,transparent_68%)] bg-size-[34px_34px] opacity-45"
            />
            <div class="relative flex justify-between">
              <span
                class="bg-bright-blue-400/20 text-bright-blue-400 ring-bright-blue-400/35 grid size-11 place-items-center rounded-lg text-xl ring-1 transition duration-300 group-hover:scale-110"
              >
                <UIcon :name="primaryService.icon" />
              </span>
              <small class="text-bright-blue-400 text-[10px]">{{ primaryService.number }}</small>
            </div>
            <p
              class="text-bright-blue-400 relative mt-7 text-[10px] font-bold tracking-[.16em] uppercase"
            >
              Our core capability
            </p>
            <h3 class="relative mt-2 text-3xl font-bold tracking-[-.04em]">
              {{ primaryService.title }}
            </h3>
            <p class="text-oslo-gray-200 relative mt-3 text-[13px] leading-6">
              {{ primaryService.text }}
            </p>
            <div
              class="border-bright-blue-400/20 relative mt-6 grid gap-3 border-t pt-5 sm:grid-cols-3"
            >
              <span
                v-for="point in primaryService.points"
                :key="point"
                class="text-bright-blue-50 flex items-center gap-2 text-[11px]"
              >
                <UIcon name="i-lucide-check" class="text-bright-blue-400 size-3.5 shrink-0" />
                {{ point }}
              </span>
            </div>
            <div class="relative mt-auto flex items-end justify-between pt-6">
              <span>
                <b class="text-bright-blue-400 text-2xl">24/7</b>
                <small class="text-oslo-gray-300 ml-2 text-[10px] tracking-wide uppercase">
                  coverage ready
                </small>
              </span>
              <span class="flex items-end gap-1">
                <i
                  v-for="height in waveBars"
                  :key="height"
                  class="bg-bright-blue-400/85 w-1 rounded-full"
                  :class="height"
                />
              </span>
            </div>
            <a
              href="#contact"
              class="text-bright-blue-400 hover:text-bright-blue-300 relative mt-4 flex items-center gap-2 pt-5 text-[12px] font-bold transition"
            >
              Start a conversation <UIcon name="i-lucide-arrow-right" />
            </a>
          </SpotlightCard>
        </article>

        <article
          v-for="service in secondaryServices"
          :key="service.title"
          class="h-full min-h-72 lg:col-span-3"
        >
          <SpotlightCard
            spotlight-color="rgb(8 114 201 / 0.16)"
            class="group border-silver-200 text-matisse-950 relative flex h-full w-full flex-col overflow-hidden rounded-lg border bg-white p-4 text-balance transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
          >
            <div class="relative flex justify-between">
              <span
                class="bg-bright-blue-50 text-bright-blue-600 grid size-11 place-items-center rounded-lg text-xl transition duration-300 group-hover:scale-110"
                ><UIcon :name="service.icon"
              /></span>
              <small class="text-oslo-gray-400 text-[10px]">{{ service.number }}</small>
            </div>
            <h3 class="relative mt-7 text-lg font-bold">{{ service.title }}</h3>
            <p class="text-oslo-gray-600 relative mt-3 text-[13px] leading-6">{{ service.text }}</p>
            <a
              :href="service.href"
              class="text-bright-blue-600 hover:text-bright-blue-500 relative mt-auto flex items-center gap-2 pt-5 text-[12px] font-bold transition"
              >{{ service.action }} <UIcon name="i-lucide-arrow-right"
            /></a>
          </SpotlightCard>
        </article>
      </div>
    </div>
  </section>
</template>
