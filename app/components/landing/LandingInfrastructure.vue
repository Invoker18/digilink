<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-server',
    title: 'On-site infrastructure',
    text: 'Dedicated server and network equipment within our delivery environment.'
  },
  {
    icon: 'i-lucide-lock-keyhole',
    title: 'Controlled workplace',
    text: 'Managed workstations inside a supervised professional facility.'
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
            <UIcon :name="feature.icon" class="mt-0.5 size-5 shrink-0 text-cyan-400" />
            <span class="grid gap-1"
              ><b class="text-[13px]">{{ feature.title }}</b
              ><small class="text-[11px] leading-5 text-slate-400">{{ feature.text }}</small></span
            >
          </div>
        </div>
      </div>
      <figure
        class="relative order-last h-90 overflow-hidden rounded-xl border border-cyan-400/30 sm:h-140 lg:order-0"
      >
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
          alt="Network server hardware"
          class="size-full object-cover brightness-75 saturate-75"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-[#02111f]/90 via-transparent to-transparent"
        />
        <figcaption
          class="absolute top-4 left-4 flex items-center gap-2 rounded-lg border border-white/15 bg-[#021424]/80 px-3 py-2 text-cyan-400 backdrop-blur"
        >
          <UIcon name="i-lucide-lock-keyhole" /><span
            class="grid text-[8px] tracking-[.13em] text-slate-400 uppercase"
            >DigiLink infrastructure<b class="text-[11px] tracking-normal text-white normal-case"
              >On-site & controlled</b
            ></span
          >
        </figcaption>
      </figure>
    </div>
  </section>
</template>
