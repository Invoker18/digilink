// scroll-motion.client.ts
import type { gsap as GSAPType } from 'gsap'
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  let context: ReturnType<typeof GSAPType.context> | undefined
  let gsapInstance: typeof GSAPType | undefined
  let ScrollTriggerInstance: typeof ScrollTriggerType | undefined

  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const loadGsap = async () => {
    if (gsapInstance) return
    const gsapModule = await import('gsap')
    const scrollTriggerModule = await import('gsap/ScrollTrigger')
    const scrollToModule = await import('gsap/ScrollToPlugin')

    gsapInstance = gsapModule.gsap
    ScrollTriggerInstance = scrollTriggerModule.ScrollTrigger
    gsapInstance.registerPlugin(ScrollTriggerInstance, scrollToModule.ScrollToPlugin)
  }

  const scrollToHash = async (hash: string) => {
    const target = document.querySelector<HTMLElement>(hash)
    if (!target) return

    if (prefersReducedMotion()) {
      target.scrollIntoView()
      return
    }

    await loadGsap()
    const header = document.querySelector<HTMLElement>('header')
    const offset = (header?.offsetHeight ?? 0) + 16

    gsapInstance!.to(window, {
      duration: 1.1,
      ease: 'power3.inOut',
      overwrite: 'auto',
      scrollTo: { y: target, offsetY: offset }
    })
  }

  const handleAnchorClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
    const hash = link?.getAttribute('href')
    if (!hash || hash === '#') return

    const target = document.querySelector(hash)
    if (!target) return

    event.preventDefault()
    history.pushState(null, '', hash)
    scrollToHash(hash)
  }

  const createReveals = async () => {
    context?.revert()
    if (prefersReducedMotion()) return

    // 1. Cargamos GSAP (si no está cargado)
    await loadGsap()

    // 2. Ejecutamos EXACTAMENTE tu lógica original
    context = gsapInstance!.context(() => {
      gsapInstance!.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        const items = element.querySelectorAll<HTMLElement>('[data-reveal-item]')
        const targets = items.length ? items : element

        gsapInstance!.from(targets, {
          autoAlpha: 0,
          y: 28,
          duration: 0.72,
          ease: 'power3.out',
          stagger: items.length ? 0.1 : 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            once: true
          }
        })
      })

      gsapInstance!.utils.toArray<HTMLElement>('[data-reveal-image]').forEach((image) => {
        gsapInstance!.from(image, {
          scale: 1.08,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 82%',
            once: true
          }
        })
      })
    })
  }

  document.addEventListener('click', handleAnchorClick)

  // 3. Esperamos a que GSAP cargue y ejecutamos inmediatamente
  nuxtApp.hook('app:mounted', async () => {
    await createReveals()
    ScrollTriggerInstance?.refresh() // Ahora sí, ScrollTrigger existe
  })

  nuxtApp.hook('page:finish', () => {
    nextTick(async () => {
      await createReveals()
      ScrollTriggerInstance?.refresh()
    })
  })

  nuxtApp.vueApp.onUnmount(() => {
    document.removeEventListener('click', handleAnchorClick)
    context?.revert()
  })
})
