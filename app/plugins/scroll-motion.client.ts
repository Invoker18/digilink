/* eslint-disable @typescript-eslint/no-explicit-any */
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  let loadPromise: Promise<{
    gsap: typeof import('gsap').gsap
    ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
  }> | null = null

  let context: any

  // Safely cache the promise to prevent duplicate concurrent imports
  const loadGsap = () => {
    if (loadPromise) return loadPromise
    loadPromise = (async () => {
      const [{ gsap }, { ScrollToPlugin }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollToPlugin'),
        import('gsap/ScrollTrigger')
      ])
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
      return { gsap, ScrollTrigger }
    })()
    return loadPromise
  }

  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const scrollToHash = async (hash: string) => {
    const target = document.querySelector<HTMLElement>(hash)
    if (!target) return

    const header = document.querySelector<HTMLElement>('header')
    const offset = (header?.offsetHeight ?? 0) + 16

    if (prefersReducedMotion()) {
      target.scrollIntoView()
      return
    }

    const { gsap } = await loadGsap()
    gsap.to(window, {
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

    const { gsap } = await loadGsap()

    context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        const items = element.querySelectorAll<HTMLElement>('[data-reveal-item]')
        const targets = items.length ? items : element

        gsap.from(targets, {
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

      gsap.utils.toArray<HTMLElement>('[data-reveal-image]').forEach((image) => {
        gsap.from(image, {
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

  nuxtApp.hook('app:mounted', async () => {
    await createReveals()
    const { ScrollTrigger } = await loadGsap()
    ScrollTrigger?.refresh()
  })

  nuxtApp.hook('page:finish', () => {
    nextTick(async () => {
      await createReveals()
      const { ScrollTrigger } = await loadGsap()
      ScrollTrigger?.refresh()
    })
  })
})
