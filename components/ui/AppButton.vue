<script setup>
defineProps({
  tag: { type: String, default: 'button' },
  href: { type: String, default: null },
  variant: { type: String, default: 'solid' },
  dot: { type: Boolean, default: false },
  arrow: { type: Boolean, default: false }
})
</script>

<template>
  <component
    :is="href ? 'a' : tag"
    :href="href"
    class="app-button"
    :class="`app-button--${variant}`"
  >
    <span v-if="dot" class="app-button__dot" aria-hidden="true" />
    <span class="app-button__label"><slot /></span>
    <span v-if="arrow" class="app-button__arrow" aria-hidden="true">→</span>
  </component>
</template>

<style scoped>
.app-button {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  transition:
    transform 420ms var(--ease-spring),
    background var(--duration-hover) var(--ease-out),
    border-color var(--duration-hover) var(--ease-out),
    box-shadow 420ms var(--ease-out);
  min-height: 44px;
}

.app-button::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.32), transparent 70%);
  transform: translateX(-120%);
  transition: transform 650ms var(--ease-spring);
}

.app-button:hover::before {
  transform: translateX(120%);
}

.app-button--solid {
  background: var(--accent);
  color: var(--accent-contrast);
  border: 1px solid var(--accent);
}

.app-button--solid:hover {
  background: var(--accent-hover);
  transform: translateY(-3px) scale(1.015);
  box-shadow: 0 14px 34px color-mix(in srgb, var(--accent) 22%, transparent);
}

.app-button--outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.app-button--outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.app-button--ghost {
  background: rgba(20, 20, 20, 0.4);
  color: var(--text-secondary);
  border: 1px solid var(--border-soft);
}

.app-button--ghost:hover {
  color: var(--text-primary);
  border-color: var(--border);
}

.app-button__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}

.app-button__arrow {
  display: inline-block;
  transition: transform var(--duration-hover) var(--ease-out);
}

.app-button:hover .app-button__arrow,
.app-button:focus-visible .app-button__arrow {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .app-button {
    transition: none;
  }
  .app-button--solid:hover {
    transform: none;
  }
  .app-button__arrow {
    transition: none;
  }
  .app-button:hover .app-button__arrow,
  .app-button:focus-visible .app-button__arrow {
    transform: none;
  }
}
</style>
