<!-- eslint-disable @stylistic/arrow-parens -->
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { gsap } from 'gsap'

const menuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const activeSection = ref('')
const homeAnchor = (anchor: string) =>
  route.path === localePath('/') ? anchor : `${localePath('/')}${anchor}`
const contactAnchor = () => {
  const contactRoutes = [localePath('/'), localePath('/software-development')]
  return contactRoutes.includes(route.path) ? '#contact' : `${localePath('/')}#contact`
}

const links = computed(() => [
  { label: t('nav.services'), href: homeAnchor('#services') },
  { label: t('nav.advantage'), href: homeAnchor('#facility') },
  { label: t('nav.contact'), href: contactAnchor() },
  { label: t('nav.development'), href: localePath('/software-development') }
])

const languageItems = computed(
  () =>
    [
      {
        label: t('language.english'),
        active: false,
        slot: 'english',
        onSelect: () => navigateTo(switchLocalePath('en'))
      },
      {
        label: t('language.spanish'),
        active: false,
        slot: 'spanish',
        onSelect: () => navigateTo(switchLocalePath('es'))
      }
    ] satisfies DropdownMenuItem[]
)

const goHome = async () => {
  menuOpen.value = false
  activeSection.value = ''
  const homePath = localePath('/')

  if (route.path === homePath) {
    if (window.location.hash || window.location.search) {
      window.history.pushState(null, '', homePath)
    }
    await router.replace({ path: homePath, hash: '', query: {} }).catch(() => {})

    gsap.to(window, {
      duration: 0.8,
      ease: 'power3.out',
      overwrite: 'auto',
      scrollTo: 0
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    await navigateTo(homePath)
    if (window.location.hash || window.location.search) {
      window.history.pushState(null, '', homePath)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

const isActiveLink = (href: string) => {
  if (href === localePath('/software-development')) return route.path === href
  return route.path === localePath('/') && activeSection.value === href
}

const handleNavigation = (href: string) => {
  if (href.startsWith('#')) activeSection.value = href
  menuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  if (window.scrollY < 80) {
    activeSection.value = ''
  }
}

let sectionObserver: IntersectionObserver | undefined

const observeHomeSections = () => {
  sectionObserver?.disconnect()
  if (route.path !== localePath('/')) return

  activeSection.value = window.scrollY < 80 ? '' : route.hash
  const sectionIds = links.value.map((link) => link.href).filter((href) => href.startsWith('#'))

  sectionObserver = new IntersectionObserver(
    (entries) => {
      if (window.scrollY < 80) {
        activeSection.value = ''
        return
      }
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
    class="sticky inset-x-0 top-0 isolate z-50 -mb-17 text-white transition-[padding] duration-500 ease-out motion-reduce:transition-none md:-mb-20"
    :class="isScrolled ? 'px-3 pt-2 md:px-6 md:pt-3' : 'px-0 pt-0'"
  >
    <div
      class="relative h-17 transition-all duration-500 ease-out motion-reduce:transition-none md:h-20"
      :class="[
        isScrolled
          ? 'bg-matisse-950/90 mx-auto w-full max-w-7xl rounded-lg border border-white/15 shadow-[0_10px_26px_rgb(6_31_56/0.26)] backdrop-blur-2xl md:rounded-xl md:shadow-[0_14px_38px_rgb(6_31_56/0.3)]'
          : 'bg-matisse-950/98 w-full rounded-none border-b border-white/10 shadow-none backdrop-blur-lg md:border',
        menuOpen && isScrolled ? 'rounded-b-none' : ''
      ]"
    >
      <div
        class="mx-auto flex h-full items-center justify-between gap-5"
        :class="
          isScrolled
            ? 'w-full px-4 md:px-8'
            : 'w-[calc(100%-2rem)] max-w-295 md:w-[calc(100%-3rem)]'
        "
      >
        <a
          :href="localePath('/')"
          class="shrink-0"
          :aria-label="t('nav.home')"
          @click.prevent="goHome"
        >
          <NuxtImg
            src="/images/logo-digilink.png"
            alt="Digilink Corporation"
            width="176"
            height="44"
            decoding="async"
            fetchpriority="high"
            format="webp"
            class="w-36 cursor-pointer md:w-44"
          />
        </a>
        <nav class="hidden md:flex md:items-center md:gap-2 lg:gap-6" :aria-label="t('nav.main')">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            :class="
              isActiveLink(link.href)
                ? 'text-bright-blue-400 md:text-white lg:after:scale-x-100'
                : 'md:text-oslo-gray-200 text-white'
            "
            class="lg:after:via-bright-blue-400 relative px-1 py-2 text-[13px] font-medium transition-colors duration-200 hover:text-white lg:after:absolute lg:after:right-0 lg:after:bottom-0 lg:after:left-0 lg:after:h-px lg:after:origin-center lg:after:scale-x-0 lg:after:bg-linear-to-r lg:after:from-transparent lg:after:to-transparent lg:after:transition-transform lg:hover:after:scale-x-100"
            @click="handleNavigation(link.href)"
          >
            {{ link.label }}
          </a>
        </nav>
        <div class="ml-auto flex shrink-0 items-center gap-2 md:gap-3">
          <LazyUDropdownMenu
            :items="languageItems"
            :modal="false"
            :content="{ align: 'end', sideOffset: 8 }"
            :ui="{
              content:
                'bg-matisse-950/95 border-matisse-700/70 min-w-35 rounded-md border p-1 shadow-[0_12px_28px_rgb(6_31_56/0.32)] ring-0 backdrop-blur-xl',
              item: 'text-oslo-gray-200 text-[11px] font-medium before:bg-transparent data-active:before:bg-transparent data-highlighted:text-white data-highlighted:before:bg-white/8',
              itemTrailingIcon: 'text-bright-blue-400 size-3'
            }"
          >
            <UButton
              :aria-label="t('language.switcher')"
              :label="locale.toUpperCase()"
              icon="i-lucide-languages"
              trailing-icon="i-lucide-chevron-down"
              color="neutral"
              variant="ghost"
              class="text-oslo-gray-200 h-9 px-2 text-[10px] font-bold hover:bg-white/10 hover:text-white active:bg-transparent data-[state=open]:bg-transparent"
            />
            <template #english-trailing>
              <UIcon
                v-if="locale === 'en'"
                name="i-lucide-check"
                class="text-bright-blue-400 size-3"
              />
            </template>
            <template #spanish-trailing>
              <UIcon
                v-if="locale === 'es'"
                name="i-lucide-check"
                class="text-bright-blue-400 size-3"
              />
            </template>
          </LazyUDropdownMenu>
          <UButton
            :to="contactAnchor()"
            trailing-icon="i-lucide-arrow-right"
            class="bg-bright-blue-500 text-matisse-950 hover:bg-bright-blue-400 hidden font-semibold shadow-[0_8px_24px_rgb(0_149_255/0.25)] transition-all duration-300 ease-linear hover:scale-105 md:inline-flex"
          >
            {{ t('nav.getInTouch') }}
          </UButton>
          <UButton
            color="neutral"
            variant="ghost"
            :icon="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
            :aria-expanded="menuOpen"
            class="focus-visible:ring-bright-blue-400 text-white hover:bg-white/10 focus-visible:ring-2 active:bg-white/10 md:hidden"
            @click="menuOpen = !menuOpen"
          />
        </div>
      </div>
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
        class="bg-matisse-950/95 fixed z-40 flex flex-col overflow-y-auto border border-white/15 px-5 py-2 shadow-[0_18px_32px_rgb(6_31_56/0.32)] backdrop-blur-2xl md:hidden"
        :class="
          isScrolled
            ? 'top-19 right-3 left-3 rounded-b-lg border-t-0'
            : 'inset-x-0 top-17 rounded-b-lg border-t-0'
        "
        :aria-label="t('nav.main')"
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
        >
          {{ link.label }}
        </a>
      </nav>
    </Transition>
  </Teleport>
</template>
