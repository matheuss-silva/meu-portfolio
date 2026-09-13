<script setup>
defineProps({
  active: { type: Boolean, default: false }
})
</script>

<template>
  <span class="app-tag" :class="{ 'app-tag--active': active }">
    <slot />
  </span>
</template>

<style scoped>
.app-tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
  background: transparent;
  transition:
    color var(--duration-hover) var(--ease-out),
    border-color var(--duration-hover) var(--ease-out),
    background-color var(--duration-hover) var(--ease-out),
    box-shadow 380ms var(--ease-out),
    transform 380ms var(--ease-spring);
}

.app-tag:hover {
  color: var(--text-primary);
  border-color: var(--accent);
  background: var(--accent-soft);
  box-shadow: 0 8px 26px color-mix(in srgb, var(--accent-soft) 55%, transparent);
  transform: translateY(-3px) scale(1.02);
}

.app-tag--active {
  color: var(--accent);
  border-color: var(--accent);
}

.app-tag--active:hover {
  color: var(--accent-hover);
}

@media (prefers-reduced-motion: reduce) {
  .app-tag:hover {
    transform: none;
  }
}
</style>
