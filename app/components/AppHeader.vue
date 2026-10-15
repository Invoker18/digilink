<script setup lang="ts">
import logo from '~/assets/images/logo-digilink.png'

const menuOpen = ref(false)
const route = useRoute()
const homeAnchor = (anchor: string) => (route.path === '/' ? anchor : `/${anchor}`)

const links = [
  { label: 'Services', href: homeAnchor('#services') },
  { label: 'Development', href: '/software-development' },
  { label: 'Our advantage', href: homeAnchor('#facility') },
  { label: 'Contact', href: homeAnchor('#contact') }
]
</script>

<template>
  <header
    class="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#051628]/80 text-white backdrop-blur-lg sm:fixed"
  >
    <div
      class="mx-auto flex h-17 w-[calc(100%-2rem)] max-w-295 items-center justify-between gap-5 sm:h-20 sm:w-[calc(100%-3rem)]"
    >
      <a href="#top" aria-label="Digilink home">
        <img :src="logo" alt="Digilink Corporation" class="w-36 sm:w-44" />
      </a>
      <nav
        :class="
          menuOpen ? 'grid max-h-80 opacity-100' : 'max-h-0 opacity-0 sm:max-h-none sm:opacity-100'
        "
        class="absolute inset-x-0 top-17 overflow-hidden border-b border-white/10 bg-[#051628]/98 transition-all sm:static sm:flex sm:gap-7 sm:overflow-visible sm:border-0 sm:bg-transparent"
        aria-label="Main navigation"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="min-h-13.5 border-b border-white/10 px-6 py-4 text-[15px] text-white transition hover:text-cyan-300 sm:min-h-0 sm:border-0 sm:p-0 sm:text-[13px] sm:text-slate-300"
          @click="menuOpen = false"
          >{{ link.label }}</a
        >
      </nav>
      <UButton
        :to="homeAnchor('#contact')"
        size="sm"
        trailing-icon="i-lucide-arrow-right"
        class="hidden bg-cyan-400 font-bold text-[#03233d] hover:bg-cyan-300 sm:inline-flex"
        >Schedule a call</UButton
      >
      <UButton
        color="neutral"
        variant="ghost"
        :icon="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        :aria-expanded="menuOpen"
        class="text-white sm:hidden"
        @click="menuOpen = !menuOpen"
      />
    </div>
  </header>
</template>
