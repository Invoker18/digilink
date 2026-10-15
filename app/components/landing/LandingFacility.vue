<template>
  <section id="facility" class="bg-white py-18 sm:py-28">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-9 sm:w-[calc(100%-3rem)] lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:gap-21"
    >
      <div class="relative grid h-97.5 grid-cols-[1.2fr_.8fr] grid-rows-2 gap-2.5 sm:h-142.5">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=850&q=85"
          alt="DigiLink customer service team"
          class="row-span-2 size-full rounded-lg object-cover saturate-75"
        />
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85"
          alt="Team planning at a table"
          class="size-full rounded-lg object-cover saturate-75"
        />
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=85"
          alt="Professionals working together"
          class="size-full rounded-lg object-cover saturate-75"
        />
        <span
          class="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-[#041c30]/80 px-3 py-2 text-[9px] font-bold text-white backdrop-blur"
        >
          <i class="size-1.5 rounded-full bg-emerald-400" />
          100% real DigiLink facility
        </span>
      </div>
      <div>
        <p class="text-[11px] font-bold tracking-[.16em] text-cyan-600 uppercase">
          Inside DigiLink
        </p>
        <h2
          class="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-tight font-bold tracking-[-.04em] text-[#0c2947]"
        >
          A real operation.<br />Ready to scale.
        </h2>
        <p class="mt-5 leading-7 text-[#688096]">
          Our Isla de Margarita delivery center brings trained bilingual teams, dedicated
          workstations, and hands-on operational leadership together under one roof.
        </p>
        <div class="mt-6 divide-y divide-[#dfebf1]">
          <div
            v-for="item in [
              {
                icon: 'i-lucide-clock-3',
                title: 'True timezone alignment',
                text: 'EST-aligned teams collaborating with your operation in real time.'
              },
              {
                icon: 'i-lucide-messages-square',
                title: 'Bilingual by nature',
                text: 'English and Spanish fluency with cultural proximity to your customers.'
              },
              {
                icon: 'i-lucide-server',
                title: 'Enterprise-grade resilience',
                text: 'Redundant connectivity, backup power, and secure workstations.'
              }
            ]"
            :key="item.title"
            class="flex gap-3 py-4"
          >
            <UIcon
              :name="item.icon"
              class="size-9 shrink-0 rounded-lg bg-cyan-50 p-2 text-cyan-700"
            /><span class="grid gap-1"
              ><b class="text-[13px]">{{ item.title }}</b
              ><small class="text-[12px] leading-5 text-[#688096]">{{ item.text }}</small></span
            >
          </div>
        </div>
        <a href="#contact" class="mt-5 flex items-center gap-2 text-[12px] font-bold text-cyan-700">
          Discover our delivery center
          <UIcon name="i-lucide-arrow-right" />
        </a>
      </div>
    </div>
  </section>
</template>
