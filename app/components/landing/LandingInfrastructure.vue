<script setup lang="ts">
import dataCenter from '@/assets/images/datacenter.webp'
import desk from '@/assets/images/desk.webp'

const features = [
  {
    icon: 'i-lucide-server',
    title: 'On-site infrastructure',
    text: 'Dedicated server and network equipment within our delivery environment.'
  },
  {
    icon: 'i-lucide-lock-keyhole',
    title: 'Controlled workplace',
    text: 'Managed workstations inside a supervised professional delivery hub.'
  },
  {
    icon: 'i-lucide-layers-3',
    title: 'Operational continuity',
    text: 'Centralized systems and on-site technical support keep programs connected.'
  }
]
</script>

<template>
  <section id="infrastructure" class="bg-[#071b31] py-18 text-white sm:py-28">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[1fr_.92fr] lg:items-center lg:gap-24"
    >
      <div>
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-400 uppercase">
          Secure by design
        </p>
        <h2
          class="mt-3 max-w-145 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em]"
        >
          Your operation is backed by real infrastructure.
        </h2>
        <p class="mt-5 max-w-140 leading-7 text-slate-300">
          Our on-site technology environment gives every client a more controlled, reliable
          foundation than a scattered work-from-home model.
        </p>
        <div class="mt-6 divide-y divide-white/10">
          <div v-for="feature in features" :key="feature.title" class="flex gap-4 py-4">
            <span
              class="grid size-9 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400"
            >
              <UIcon :name="feature.icon" class="size-4" />
            </span>
            <span class="grid gap-1">
              <b class="text-[13px]">{{ feature.title }}</b>
              <small class="text-[11px] leading-5 text-slate-400">{{ feature.text }}</small>
            </span>
          </div>
        </div>
        <div
          class="mt-5 flex items-center gap-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-emerald-400"
        >
          <UIcon name="i-lucide-check" class="size-4 shrink-0" />
          <span class="grid gap-0.5"
            ><b class="text-[10px] text-emerald-100">Security is an operational advantage</b
            ><small class="text-[8px] text-emerald-100/50"
              >Infrastructure, people, and process in one accountable location.</small
            ></span
          >
        </div>
      </div>
      <figure
        class="relative order-last h-90 overflow-hidden rounded-xl border border-cyan-400/30 sm:h-140 lg:order-0"
      >
        <img
          :src="dataCenter"
          alt="Network server hardware"
          class="size-full object-cover brightness-75 saturate-75"
        />
        <div
          class="absolute inset-0 bg-linear-to-br from-[#02111f]/90 via-transparent to-transparent"
        />
        <div
          class="absolute inset-0 bg-linear-to-tr from-[#02111f]/90 via-transparent to-transparent"
        />
        <figcaption
          class="absolute top-4 left-4 flex items-center gap-2 rounded-lg border border-white/15 bg-[#021424]/80 px-3 py-2 text-cyan-400 backdrop-blur"
        >
          <UIcon name="i-lucide-lock-keyhole" />
          <span class="grid text-[8px] tracking-[.13em] text-slate-400 uppercase">
            Digilink infrastructure
            <b class="text-[11px] tracking-normal text-white normal-case">On-site & controlled</b>
          </span>
        </figcaption>
        <div class="absolute bottom-5 left-5 flex items-center gap-2">
          <span
            class="size-2 rounded-full border-2 border-emerald-400 ring-6 ring-emerald-400/15 motion-safe:animate-[ping_1.5s_infinite]"
          />
          <span class="grid gap-0.5"
            ><b class="text-[12px]">Network core</b
            ><small class="text-[8px] text-slate-300">Inside our delivery hub</small></span
          >
        </div>
      </figure>
    </div>
    <figure
      class="relative mx-auto mt-14 h-45 w-[calc(100%-2rem)] max-w-295 overflow-hidden rounded-xl border border-white/10 sm:mt-20 sm:w-[calc(100%-3rem)]"
    >
      <img
        :src="desk"
        alt="Digilink operations floor"
        class="size-full object-cover brightness-40 saturate-75"
      />
      <div class="absolute inset-0 bg-linear-to-r from-[#071b31] via-[#071b31]/70 to-transparent" />
      <figcaption class="absolute inset-y-0 left-6 grid content-center gap-3 sm:left-9">
        <span class="text-[8px] font-bold tracking-[.16em] text-cyan-400 uppercase"
          >The Digilink difference</span
        ><b class="text-xl leading-snug sm:text-2xl"
          >People, technology, and accountability<br class="hidden sm:block" />
          in one accountable operation.</b
        >
      </figcaption>
    </figure>
  </section>
</template>
