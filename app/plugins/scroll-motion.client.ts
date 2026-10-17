import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let context: gsap.Context | undefined

  const scrollToHash = (hash: string) => {
    const target = document.querySelector<HTMLElement>(hash)
    if (!target) return

    const header = document.querySelector<HTMLElement>('header')
    const offset = (header?.offsetHeight ?? 0) + 16

    if (reducedMotion.matches) {
      target.scrollIntoView()
      return
    }

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

  const createReveals = () => {
    context?.revert()
    if (reducedMotion.matches) return

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

  nuxtApp.hook('app:mounted', () => {
    createReveals()
    ScrollTrigger.refresh()
  })

  nuxtApp.hook('page:finish', () => {
    nextTick(() => {
      createReveals()
      ScrollTrigger.refresh()
    })
  })

  nuxtApp.hook('app:beforeUnmount', () => {
    document.removeEventListener('click', handleAnchorClick)
    context?.revert()
  })
})
