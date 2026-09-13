<script setup>
import { portfolio } from '~/data/portfolio'
</script>

<template>
  <a href="#contato" class="floating-cta" data-cursor-hover>
    <span class="floating-cta__dot" aria-hidden="true" />
    <span class="floating-cta__label">{{ portfolio.floatingCta }}</span>
  </a>
</template>

<style scoped>
.floating-cta {
  position: fixed;
  right: var(--page-padding);
  bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  z-index: 90;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 16px 22px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: transform var(--duration-hover) var(--ease-out);
}

.floating-cta:hover {
  transform: translateY(-3px) scale(1.02);
}

.floating-cta__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-contrast);
}

@media (max-width: 640px) {
  .floating-cta {
    left: var(--page-padding);
    right: var(--page-padding);
    justify-content: center;
    padding: 14px 18px;
  }

  .floating-cta__label {
    font-size: 0.72rem;
  }
}
</style>
