<script setup lang="ts">
const services = [
  {
    number: '01',
    icon: 'i-lucide-headset',
    title: 'Customer Experience',
    text: 'Empathetic bilingual support across voice, chat, email, and social, around the clock.'
  },
  {
    number: '02',
    icon: 'i-lucide-circle-help',
    title: 'Technical Helpdesk',
    text: 'Tier 1 and Tier 2 product support delivered by technically fluent, process-driven teams.'
  },
  {
    number: '03',
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Revenue Operations',
    text: 'High-converting outbound sales, lead qualification, retention, and win-back programs.'
  },
  {
    number: '04',
    icon: 'i-lucide-layers-3',
    title: 'Back Office',
    text: 'Accurate data processing, order management, QA, and administrative workflows at scale.'
  }
]
</script>

<template>
  <section id="services" class="bg-[#f4f8fb] py-18 sm:py-28">
    <div class="mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
      <div class="mb-8 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="text-[11px] font-bold tracking-[.16em] text-cyan-600 uppercase">What we do</p>
          <h2
            class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em] text-[#0c2947]"
          >
            One partner. Every conversation.
          </h2>
        </div>
        <p class="max-w-97.5 text-[14px] leading-7 text-[#688096] sm:text-[15px]">
          From first contact to long-term loyalty, we design dedicated teams around your customer
          journey.
        </p>
      </div>
      <div
        class="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
      >
        <article
          v-for="service in services"
          :key="service.title"
          class="flex min-h-72 w-[82vw] shrink-0 snap-start flex-col rounded-lg border border-[#dce6ee] bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl sm:w-auto"
        >
          <div class="flex justify-between">
            <span
              class="grid size-11 place-items-center rounded-lg bg-cyan-50 text-xl text-cyan-600"
              ><UIcon :name="service.icon" /></span
            ><small class="text-[10px] text-slate-400">{{ service.number }}</small>
          </div>
          <h3 class="mt-7 text-lg font-bold text-[#0c2947]">{{ service.title }}</h3>
          <p class="mt-3 text-[13px] leading-6 text-[#688096]">{{ service.text }}</p>
          <a
            href="#contact"
            class="mt-auto flex items-center gap-2 pt-5 text-[12px] font-bold text-cyan-700"
            >Explore service <UIcon name="i-lucide-arrow-right"
          /></a>
        </article>
      </div>
    </div>
  </section>
</template>
