<script setup lang="ts">
import logo from '~/assets/images/logo-digilink.png'

const route = useRoute()
const homeAnchor = (anchor: string) => (route.path === '/' ? anchor : `/${anchor}`)
const currentYear = new Date().getFullYear()

const serviceLinks = [
  { label: 'Call Center', href: homeAnchor('#services') },
  { label: 'Technical Support', href: homeAnchor('#services') },
  { label: 'Software Development', href: '/software-development' }
]

const companyLinks = [
  { label: 'Our Advantage', href: homeAnchor('#facility') },
  { label: 'Infrastructure', href: homeAnchor('#infrastructure') },
  { label: 'Contact', href: homeAnchor('#contact') }
]
</script>

<template>
  <footer class="bg-matisse-950 text-oslo-gray-300 border-t border-white/10">
    <div
      class="mx-auto grid w-[calc(100%-2rem)] max-w-295 gap-10 py-14 sm:w-[calc(100%-3rem)] sm:py-18 lg:grid-cols-[1.35fr_.8fr_.8fr_1fr] lg:gap-12"
    >
      <div>
        <img :src="logo" alt="Digilink Corporation" class="w-40" />
        <p class="text-oslo-gray-300 mt-5 max-w-69 text-[12px] leading-6">
          Bilingual customer experience and technology teams, built for ambitious global brands.
        </p>
        <a
          :href="homeAnchor('#contact')"
          class="text-bright-blue-400 hover:text-bright-blue-300 mt-6 inline-flex items-center gap-2 text-[12px] font-bold transition"
          >Start a conversation <UIcon name="i-lucide-arrow-up-right" class="size-4"
        /></a>
      </div>

      <div class="grid content-start gap-3 text-[12px]">
        <b class="mb-2 text-[10px] tracking-[.14em] text-white uppercase">Services</b>
        <a
          v-for="link in serviceLinks"
          :key="link.label"
          :href="link.href"
          class="hover:text-bright-blue-400 w-fit transition"
          >{{ link.label }}</a
        >
      </div>

      <div class="grid content-start gap-3 text-[12px]">
        <b class="mb-2 text-[10px] tracking-[.14em] text-white uppercase">Company</b>
        <a
          v-for="link in companyLinks"
          :key="link.label"
          :href="link.href"
          class="hover:text-bright-blue-400 w-fit transition"
          >{{ link.label }}</a
        >
      </div>

      <div class="border-t border-white/10 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-9">
        <p class="text-bright-blue-400 text-[10px] font-bold tracking-[.14em] uppercase">
          Built for delivery
        </p>
        <p class="mt-3 text-[14px] leading-6 text-white">Real teams. Real accountability.</p>
        <p class="text-oslo-gray-300 mt-2 text-[11px] leading-5">
          An operational partner for teams that need dependable capacity and shared momentum.
        </p>
        <span class="text-oslo-gray-300 mt-5 flex items-center gap-2 text-[10px]">
          Bilingual teams, aligned to your operation
        </span>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div
        class="text-oslo-gray-400 mx-auto flex w-[calc(100%-2rem)] flex-col gap-3 py-5 text-[10px] sm:w-[calc(100%-3rem)] sm:flex-row sm:items-center sm:justify-between"
      >
        <span>© {{ currentYear }} Digilink Corporation. All rights reserved.</span>
        <span>Customer experience and technology delivery</span>
      </div>
    </div>
  </footer>
</template>
