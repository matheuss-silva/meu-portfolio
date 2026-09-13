export function useScrollReveal(options = {}) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!import.meta.client || !target.value) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      isVisible.value = true
      return
    }

    if (!('IntersectionObserver' in window)) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.14,
        rootMargin: options.rootMargin ?? '0px 0px -8% 0px'
      }
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { target, isVisible }
}
