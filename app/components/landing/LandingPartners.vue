<script setup lang="ts">
import Printres from '@/assets/images/logo-printres.svg'
import Datalink from '@/assets/images/logo-datalink.png'
import Arche from '@/assets/images/logo-arche.webp'

type Partner = {
  name: string
  logo?: string
  logoClass: string
}

const partners: Partner[] = [
  { name: 'Printres', logo: Printres, logoClass: 'h-8 w-38' },
  { name: 'Datalink', logo: Datalink, logoClass: 'h-10 w-38' },
  { name: 'Arche', logo: Arche, logoClass: 'h-9 w-38 scale-150' }
]
</script>

<template>
  <section id="partners" class="bg-matisse-950 border-y border-white/10 py-8 sm:py-10">
    <div
      class="mx-auto flex w-[calc(100%-2rem)] flex-col gap-6 sm:w-[calc(100%-3rem)] lg:max-w-295 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      <p
        class="text-bright-blue-400 shrink-0 text-center text-[10px] font-bold tracking-[.16em] uppercase lg:text-left"
      >
        Trusted business partners
      </p>
      <div class="grid border-white/15 sm:grid-cols-3">
        <div
          v-for="(partner, index) in partners"
          :key="partner.name"
          :class="index ? 'border-t border-white/15 sm:border-t-0' : ''"
          class="flex min-h-16 items-center justify-center px-7 py-4 sm:min-w-52"
        >
          <img
            v-if="partner.logo"
            :src="partner.logo"
            :alt="`${partner.name} logo`"
            :class="partner.logoClass"
            class="object-contain"
          />
          <span v-else class="text-lg font-semibold tracking-[.04em] text-white">
            {{ partner.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
