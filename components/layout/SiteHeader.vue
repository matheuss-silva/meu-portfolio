<script setup>
import { portfolio } from '~/data/portfolio'

const { theme, toggleTheme } = useTheme()
const emit = defineEmits(['open-menu'])

defineProps({
  scrolled: { type: Boolean, default: false }
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="site-header__inner container">
      <a href="#top" class="site-header__brand" aria-label="Ir para o início">
        <span class="site-header__monogram">{{ portfolio.monogram }}</span>
        <span class="site-header__divider" aria-hidden="true" />
        <span class="site-header__name">{{ portfolio.name }}</span>
      </a>

      <div class="site-header__actions">
        <button
          type="button"
          class="site-header__theme"
          @click="toggleTheme"
          :aria-pressed="theme === 'light'"
          aria-label="Alternar tema"
        >
          <span class="site-header__theme-dot" aria-hidden="true" />
          <span class="site-header__theme-label">{{ theme === 'dark' ? 'LIGHT' : 'DARK' }}</span>
        </button>

        <button
          type="button"
          class="site-header__menu"
          @click="emit('open-menu')"
          aria-label="Abrir menu"
        >
          <span aria-hidden="true" class="site-header__menu-icon">
            <span />
            <span />
            <span />
          </span>
          <span class="site-header__menu-label">MENU</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  display: flex;
  align-items: center;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition:
    background-color var(--duration-hover) var(--ease-out),
    border-color var(--duration-hover) var(--ease-out);
  animation: header-fade-down var(--duration-enter) var(--ease-out) both;
}

.site-header.is-scrolled {
  background: rgba(5, 5, 5, 0.92);
  border-bottom-color: var(--border-soft);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

:root[data-theme='light'] .site-header.is-scrolled {
  background: rgba(244, 244, 240, 0.94);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.site-header__monogram {
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-primary);
}

.site-header__divider {
  width: 3px;
  height: 18px;
  background: var(--accent);
}

.site-header__name {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  white-space: nowrap;
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.site-header__theme {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  min-height: 40px;
  transition:
    border-color var(--duration-hover) var(--ease-out),
    transform var(--duration-hover) var(--ease-out);
}

.site-header__theme:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.site-header__theme-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  transition: transform var(--duration-hover) var(--ease-out);
}

.site-header__theme:hover .site-header__theme-dot {
  transform: scale(1.25);
}

.site-header__theme-label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.site-header__menu {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px 8px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  min-height: 40px;
  transition:
    border-color var(--duration-hover) var(--ease-out),
    transform var(--duration-hover) var(--ease-out);
}

.site-header__menu:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.site-header__menu-icon {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 16px;
}

.site-header__menu-icon span {
  display: block;
  height: 1.5px;
  width: 100%;
  background: var(--text-primary);
  transition: background var(--duration-hover) var(--ease-out);
}

.site-header__menu:hover .site-header__menu-icon span {
  background: var(--accent);
}

.site-header__menu-label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

@keyframes header-fade-down {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .site-header__name,
  .site-header__theme-label,
  .site-header__menu-label {
    display: none;
  }

  .site-header__divider {
    display: none;
  }

  .site-header__theme,
  .site-header__menu {
    padding: 10px;
    min-width: 44px;
    min-height: 44px;
    justify-content: center;
  }

  .site-header__actions {
    gap: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-header {
    animation: none;
    transition: none;
  }

  .site-header__theme,
  .site-header__menu,
  .site-header__theme-dot {
    transition: none;
  }

  .site-header__theme:hover,
  .site-header__menu:hover {
    transform: none;
  }

  .site-header__theme:hover .site-header__theme-dot {
    transform: none;
  }
}
</style>
