<script setup lang="ts">
import logo from '~/assets/images/logo-digilink.png'

const menuOpen = ref(false)
const isScrolled = ref(false)
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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
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
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  observeHomeSections()
  watch(
    () => route.path,
    () => nextTick(observeHomeSections)
  )
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  sectionObserver?.disconnect()
})
</script>

<template>
  <header
    class="sticky inset-x-0 top-0 isolate z-50 -mb-17 text-white transition-[padding] duration-500 ease-out motion-reduce:transition-none sm:-mb-20"
    :class="isScrolled ? 'px-3 pt-2 sm:px-6 sm:pt-3' : 'px-0 pt-0'"
  >
    <div
      class="relative mx-auto flex h-17 w-full items-center justify-between gap-5 px-4 transition-all duration-500 ease-out motion-reduce:transition-none sm:h-20 sm:px-6"
      :class="[
        isScrolled
          ? 'bg-matisse-950/90 max-w-7xl rounded-lg border border-white/15 shadow-[0_10px_26px_rgb(6_31_56/0.26)] backdrop-blur-2xl sm:rounded-xl sm:px-8 sm:shadow-[0_14px_38px_rgb(6_31_56/0.3)]'
          : 'bg-matisse-950/98 max-w-none rounded-none border-b border-white/10 shadow-none backdrop-blur-lg sm:border sm:px-6',
        menuOpen && isScrolled ? 'rounded-b-none' : ''
      ]"
    >
      <a @click="goTop()" aria-label="Digilink home">
        <img :src="logo" alt="Digilink Corporation" class="w-36 cursor-pointer sm:w-44" />
      </a>
      <nav class="hidden sm:flex sm:items-center sm:gap-2 lg:gap-6" aria-label="Main navigation">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="
            isActiveLink(link.href)
              ? 'text-bright-blue-400 sm:text-white lg:after:scale-x-100'
              : 'sm:text-oslo-gray-200 text-white'
          "
          class="lg:after:via-bright-blue-400 relative px-1 py-2 text-[13px] font-medium transition-colors duration-200 hover:text-white lg:after:absolute lg:after:right-0 lg:after:bottom-0 lg:after:left-0 lg:after:h-px lg:after:origin-center lg:after:scale-x-0 lg:after:bg-linear-to-r lg:after:from-transparent lg:after:to-transparent lg:after:transition-transform lg:hover:after:scale-x-100"
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
        class="focus-visible:ring-bright-blue-400 text-white hover:bg-white/10 focus-visible:ring-2 active:bg-white/10 sm:hidden"
        @click="menuOpen = !menuOpen"
      />
    </div>
  </header>

  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out motion-reduce:transition-none"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-2 opacity-0"
    >
      <nav
        v-if="menuOpen"
        class="bg-matisse-950/95 fixed z-40 flex flex-col overflow-y-auto border border-white/15 px-5 py-2 shadow-[0_18px_32px_rgb(6_31_56/0.32)] backdrop-blur-2xl sm:hidden"
        :class="
          isScrolled
            ? 'top-19 right-3 left-3 rounded-b-lg border-t-0'
            : 'inset-x-0 top-17 rounded-b-lg border-t-0'
        "
        aria-label="Mobile navigation"
      >
        <a
          v-for="(link, index) in links"
          :key="link.href"
          :href="link.href"
          :class="[
            isActiveLink(link.href) ? 'text-bright-blue-400' : 'text-white',
            index < links.length - 1 ? 'border-b border-white/10' : ''
          ]"
          class="hover:text-bright-blue-300 flex min-h-15 items-center px-1 text-base font-medium transition-colors duration-200"
          @click="handleNavigation(link.href)"
          >{{ link.label }}</a
        >
      </nav>
    </Transition>
  </Teleport>
</template>
