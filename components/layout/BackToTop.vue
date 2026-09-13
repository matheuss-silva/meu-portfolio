<script setup>
const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 640
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <button
    type="button"
    class="back-to-top"
    :class="{ 'is-visible': visible }"
    @click="scrollTop"
    aria-label="Voltar ao topo"
    data-cursor-hover
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: var(--page-padding);
  bottom: calc(88px + env(safe-area-inset-bottom, 0px));
  z-index: 89;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  color: var(--text-primary);
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition:
    opacity var(--duration-hover) var(--ease-out),
    transform var(--duration-hover) var(--ease-out),
    border-color var(--duration-hover) var(--ease-out);
}

.back-to-top.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.back-to-top:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 640px) {
  .back-to-top {
    bottom: calc(148px + env(safe-area-inset-bottom, 0px));
    right: 18px;
    width: 40px;
    height: 40px;
  }
}
</style>
