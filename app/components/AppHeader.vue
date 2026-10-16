<script setup lang="ts">
import logo from '~/assets/images/logo-digilink.png'

const menuOpen = ref(false)
const route = useRoute()
const activeSection = ref('')
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

const isActiveLink = (href: string) => {
  if (href === '/software-development') return route.path === href
  return route.path === '/' && activeSection.value === href
}

const handleNavigation = (href: string) => {
  if (href.startsWith('#')) activeSection.value = href
  menuOpen.value = false
}

let sectionObserver: IntersectionObserver | undefined

const observeHomeSections = () => {
  sectionObserver?.disconnect()
  if (route.path !== '/') return

  activeSection.value = route.hash
  const sectionIds = links.map((link) => link.href).filter((href) => href.startsWith('#'))

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries.find((entry) => entry.isIntersecting)
      if (activeEntry) activeSection.value = `#${activeEntry.target.id}`
    },
    { rootMargin: '-35% 0px -55% 0px' }
  )

  sectionIds.forEach((href) => {
    const section = document.getElementById(href.slice(1))
    if (section) sectionObserver?.observe(section)
  })
}

onMounted(() => {
  observeHomeSections()
  watch(
    () => route.path,
    () => nextTick(observeHomeSections)
  )
})

onBeforeUnmount(() => sectionObserver?.disconnect())
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
        class="bg-matisse-950/98 absolute inset-x-0 top-17 overflow-hidden border-b border-white/10 transition-all sm:static sm:flex sm:items-center sm:gap-2 sm:overflow-visible sm:border-0 sm:bg-transparent lg:gap-6"
        aria-label="Main navigation"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="
            isActiveLink(link.href)
              ? 'text-bright-blue-400 sm:text-white lg:after:scale-x-100'
              : 'sm:text-oslo-gray-200 text-white'
          "
          class="lg:after:via-bright-blue-400 relative min-h-13.5 border-b border-white/10 px-6 py-4 text-[15px] font-medium transition-colors duration-200 hover:text-white sm:min-h-0 sm:border-0 sm:px-1 sm:py-2 sm:text-[13px] lg:after:absolute lg:after:right-0 lg:after:bottom-0 lg:after:left-0 lg:after:h-px lg:after:origin-center lg:after:scale-x-0 lg:after:bg-linear-to-r lg:after:from-transparent lg:after:to-transparent lg:after:transition-transform lg:after:duration-200 lg:hover:after:scale-x-100"
          @click="handleNavigation(link.href)"
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
