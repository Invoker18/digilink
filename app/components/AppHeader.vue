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

const goTop = () => {
  navigateTo('/')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header
    class="bg-matisse-950/98 sticky inset-x-0 top-0 z-20 -mb-17 border-b border-white/10 text-white backdrop-blur-lg sm:-mb-20"
  >
    <div
      class="mx-auto flex h-17 w-[calc(100%-2rem)] max-w-295 items-center justify-between gap-5 sm:h-20 sm:w-[calc(100%-3rem)]"
    >
      <a @click="goTop()" aria-label="Digilink home">
        <img :src="logo" alt="Digilink Corporation" class="w-36 cursor-pointer sm:w-44" />
      </a>
      <nav
        :class="
          menuOpen ? 'grid max-h-80 opacity-100' : 'max-h-0 opacity-0 sm:max-h-none sm:opacity-100'
        "
        class="bg-matisse-950/98 absolute inset-x-0 top-17 overflow-hidden border-b border-white/10 transition-all sm:static sm:flex sm:gap-7 sm:overflow-visible sm:border-0 sm:bg-transparent"
        aria-label="Main navigation"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="hover:text-bright-blue-400 sm:text-oslo-gray-300 min-h-13.5 border-b border-white/10 px-6 py-4 text-[15px] text-white transition sm:min-h-0 sm:border-0 sm:p-0 sm:text-[13px]"
          @click="menuOpen = false"
          >{{ link.label }}</a
        >
      </nav>
      <!-- <SpecularButton
        size="sm"
        :radius="7"
        tint="#4fabe1"
        :tint-opacity="0.16"
        :blur="12"
        text-color="#f1f7fe"
        line-color="#8dc8ec"
        base-color="#1c7cbc"
        :intensity="0.72"
        :shine-size="22"
        :shine-fade="34"
        :thickness="1.25"
        :proximity="180"
        :auto-animate="false"
        class="hidden sm:inline-flex"
        @click="navigateTo(homeAnchor('#contact'))"
      >
        <span class="inline-flex items-center gap-2">
          Schedule a call <UIcon name="i-lucide-arrow-right" class="size-3.5" />
        </span>
      </SpecularButton> -->
      <UButton
        :to="homeAnchor('#contact')"
        trailing-icon="i-lucide-arrow-right"
        class="bg-bright-blue-500 text-matisse-950 hover:bg-bright-blue-400 hidden font-semibold shadow-[0_8px_24px_rgb(0_149_255/0.25)] transition-all duration-300 ease-linear hover:scale-105 sm:inline-flex"
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
