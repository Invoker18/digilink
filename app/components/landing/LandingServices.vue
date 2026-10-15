<script setup lang="ts">
const services = [
  {
    number: '01',
    icon: 'i-lucide-headset',
    title: 'Call Center',
    text: 'Bilingual voice, chat, email, and social support teams that represent your brand around the clock.',
    primary: true,
    points: ['EST-aligned coverage', 'English & Spanish agents', 'Live QA and coaching']
  },
  {
    number: '02',
    icon: 'i-lucide-wrench',
    title: 'Technical Support',
    text: 'Tier 1 and Tier 2 troubleshooting delivered by technically fluent, process-driven specialists.',
    primary: false
  },
  {
    number: '03',
    icon: 'i-lucide-code-2',
    title: 'Software Development',
    text: 'Dedicated development talent for web applications, integrations, product improvements, and ongoing delivery.',
    primary: false
  }
]

const waveBars = ['h-3', 'h-5', 'h-8', 'h-4', 'h-7']
</script>

<template>
  <section id="services" class="bg-[#f4f8fb] py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div class="mb-9 sm:mb-12">
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-600 uppercase">What we do</p>
        <div
          class="mt-4 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
        >
          <h2
            class="text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em] text-[#0c2947]"
          >
            Built around conversations that matter.
          </h2>
          <p
            class="max-w-120 text-[14px] leading-7 text-[#688096] sm:text-[15px] lg:self-end lg:text-right"
          >
            Our call center is the heart of Digilink. Add technical and development talent as your
            operation grows.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
        <article
          v-for="service in services"
          :key="service.title"
          :class="
            service.primary
              ? 'border-[#0c3554] bg-[#092039] text-white sm:col-span-full lg:col-span-6'
              : 'border-[#dce6ee] bg-white text-[#0c2947] lg:col-span-3'
          "
          class="group relative flex min-h-72 flex-col overflow-hidden rounded-lg border p-4 text-balance transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
        >
          <div
            v-if="service.primary"
            class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(0_200_245/12%)_1px,transparent_1px),linear-gradient(90deg,rgb(0_200_245/12%)_1px,transparent_1px)] mask-[linear-gradient(135deg,#000,transparent_68%)] bg-size-[34px_34px] opacity-35"
          />
          <div class="relative flex justify-between">
            <span
              :class="
                service.primary
                  ? 'bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/25'
                  : 'bg-cyan-50 text-cyan-600'
              "
              class="grid size-11 place-items-center rounded-lg text-xl transition duration-300 group-hover:scale-110"
              ><UIcon :name="service.icon"
            /></span>
            <small
              :class="service.primary ? 'text-cyan-200' : 'text-slate-400'"
              class="text-[10px]"
              >{{ service.number }}</small
            >
          </div>
          <p
            v-if="service.primary"
            class="relative mt-7 text-[10px] font-bold tracking-[.16em] text-cyan-300 uppercase"
          >
            Our core capability
          </p>
          <h3
            :class="service.primary ? 'mt-2 text-3xl tracking-[-.04em]' : 'mt-7 text-lg'"
            class="relative font-bold"
          >
            {{ service.title }}
          </h3>
          <p
            :class="service.primary ? 'text-slate-300' : 'text-[#688096]'"
            class="relative mt-3 text-[13px] leading-6"
          >
            {{ service.text }}
          </p>
          <div
            v-if="service.primary"
            class="relative mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3"
          >
            <span
              v-for="point in service.points"
              :key="point"
              class="flex items-center gap-2 text-[11px] text-cyan-50"
              ><UIcon name="i-lucide-check" class="size-3.5 shrink-0 text-cyan-300" />{{
                point
              }}</span
            >
          </div>
          <div v-if="service.primary" class="relative mt-auto flex items-end justify-between pt-6">
            <span
              ><b class="text-2xl text-cyan-300">24/7</b
              ><small class="ml-2 text-[10px] tracking-wide text-slate-400 uppercase"
                >coverage ready</small
              ></span
            ><span class="flex items-end gap-1"
              ><i
                v-for="height in waveBars"
                :key="height"
                class="w-1 rounded-full bg-cyan-300/70"
                :class="height"
            /></span>
          </div>
          <a
            :href="service.title === 'Software Development' ? '/software-development' : '#contact'"
            :class="service.primary ? 'mt-4 text-cyan-300' : 'mt-auto text-cyan-700'"
            class="relative flex items-center gap-2 pt-5 text-[12px] font-bold"
            >{{
              service.title === 'Software Development' ? 'Explore service' : 'Start a conversation'
            }}
            <UIcon name="i-lucide-arrow-right"
          /></a>
        </article>
      </div>
    </div>
  </section>
</template>
