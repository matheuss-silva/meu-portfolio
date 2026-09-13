<script setup>
const { initTheme } = useTheme()
const menuOpen = ref(false)
const headerScrolled = ref(false)
const scrollSentinel = ref(null)

let scrollObserver = null

onMounted(() => {
  initTheme()
  if (window.matchMedia('(pointer: coarse)').matches) {
    document.documentElement.classList.add('touch-device')
  }

  if (scrollSentinel.value && 'IntersectionObserver' in window) {
    scrollObserver = new IntersectionObserver(
      ([entry]) => {
        headerScrolled.value = !entry.isIntersecting
      },
      { threshold: 0 }
    )
    scrollObserver.observe(scrollSentinel.value)
  }
})

onBeforeUnmount(() => {
  scrollObserver?.disconnect()
})
</script>

<template>
  <div class="app-shell">
    <PageLoader />

    <a href="#top" class="skip-link">Pular para o conteúdo</a>
    <div ref="scrollSentinel" class="scroll-sentinel" aria-hidden="true" />

    <CustomCursor />
    <SiteHeader :scrolled="headerScrolled" @open-menu="menuOpen = true" />
    <SiteMenu :open="menuOpen" @close="menuOpen = false" />

    <main id="main">
      <NuxtPage />
    </main>

    <SiteFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
}

.scroll-sentinel {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: var(--header-height);
  pointer-events: none;
}
</style>
