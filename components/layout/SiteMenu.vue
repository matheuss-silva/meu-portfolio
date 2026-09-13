<script setup>
const props = defineProps({
  open: { type: Boolean, default: false }
})
const emit = defineEmits(['close'])

const links = [
  { label: 'Início', href: '#top' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' }
]

const panelRef = ref(null)
const firstLinkRef = ref(null)
const closeButtonRef = ref(null)
let lastFocused = null

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
    return
  }
  if (event.key === 'Tab') {
    const focusable = panelRef.value?.querySelectorAll('a, button')
    if (!focusable || focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
}

watch(
  () => props.open,
  async (isOpen) => {
    if (!import.meta.client) return
    if (isOpen) {
      lastFocused = document.activeElement
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
      await nextTick()
      closeButtonRef.value?.focus()
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeydown)
      lastFocused?.focus?.()
    }
  }
)

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKeydown)
  }
})
</script>

<template>
  <Transition name="menu-fade">
    <div v-if="open" class="site-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <div class="site-menu__backdrop" @click="emit('close')" />
      <div class="site-menu__panel" ref="panelRef">
        <div class="site-menu__top container">
          <span class="eyebrow">MENU</span>
          <button
            ref="closeButtonRef"
            type="button"
            class="site-menu__close"
            @click="emit('close')"
            aria-label="Fechar menu"
          >
            FECHAR
          </button>
        </div>

        <nav class="site-menu__nav container" aria-label="Navegação principal">
          <a
            v-for="(link, index) in links"
            :key="link.href"
            :ref="index === 0 ? (el) => (firstLinkRef = el) : undefined"
            :href="link.href"
            class="site-menu__link"
            @click="emit('close')"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.site-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
}

.site-menu__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
}

.site-menu__panel {
  position: absolute;
  inset: 0;
  background: var(--background);
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  overflow-y: auto;
  clip-path: inset(0 0 0 0);
}

.site-menu__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border-soft);
}

.site-menu__close {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 10px 20px;
  min-height: 44px;
  transition:
    color 280ms var(--ease-out),
    border-color 280ms var(--ease-out),
    background-color 280ms var(--ease-out),
    transform 420ms var(--ease-spring);
}

.site-menu__close:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.site-menu__nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.site-menu__link {
  position: relative;
  font-family: var(--font-display);
  text-transform: uppercase;
  font-size: clamp(2.4rem, 8vw, 5rem);
  line-height: 1.1;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-soft);
  padding-block: 12px;
  transition:
    color 320ms var(--ease-out),
    padding-left 520ms var(--ease-spring),
    opacity 320ms var(--ease-out);
}

.site-menu__link::after {
  content: '↗';
  position: absolute;
  top: 50%;
  right: 8px;
  color: var(--accent);
  font-family: var(--font-body);
  font-size: 0.3em;
  opacity: 0;
  transform: translate(-12px, -50%);
  transition:
    opacity 320ms var(--ease-out),
    transform 480ms var(--ease-spring);
}

.site-menu__link:hover {
  color: var(--accent);
  padding-left: 18px;
}

.site-menu__link:hover::after {
  opacity: 1;
  transform: translate(0, -50%);
}

.site-menu__nav:has(.site-menu__link:hover) .site-menu__link:not(:hover) {
  opacity: 0.34;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity var(--duration-menu) var(--ease-out);
}

.menu-fade-enter-active .site-menu__panel,
.menu-fade-leave-active .site-menu__panel {
  transition: clip-path 620ms var(--ease-spring);
}

.menu-fade-enter-active .site-menu__top,
.menu-fade-enter-active .site-menu__link {
  transition:
    opacity 480ms var(--ease-out),
    transform 620ms var(--ease-spring),
    color 320ms var(--ease-out),
    padding-left 520ms var(--ease-spring);
}

.menu-fade-enter-active .site-menu__top { transition-delay: 130ms; }
.menu-fade-enter-active .site-menu__link:nth-child(1) { transition-delay: 150ms; }
.menu-fade-enter-active .site-menu__link:nth-child(2) { transition-delay: 195ms; }
.menu-fade-enter-active .site-menu__link:nth-child(3) { transition-delay: 240ms; }
.menu-fade-enter-active .site-menu__link:nth-child(4) { transition-delay: 285ms; }
.menu-fade-enter-active .site-menu__link:nth-child(5) { transition-delay: 330ms; }

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-from .site-menu__panel,
.menu-fade-leave-to .site-menu__panel {
  clip-path: inset(0 0 100% 0);
}

.menu-fade-enter-from .site-menu__top,
.menu-fade-enter-from .site-menu__link {
  opacity: 0;
  transform: translateY(24px);
}

@media (prefers-reduced-motion: reduce) {
  .menu-fade-enter-active,
  .menu-fade-leave-active,
  .menu-fade-enter-active .site-menu__panel,
  .menu-fade-leave-active .site-menu__panel,
  .menu-fade-enter-active .site-menu__top,
  .menu-fade-enter-active .site-menu__link {
    transition: none;
  }

  .site-menu__link:hover,
  .site-menu__close:hover {
    transform: none;
  }
}

@media (max-height: 480px) {
  .site-menu__nav {
    justify-content: flex-start;
    gap: 0;
  }

  .site-menu__link {
    font-size: clamp(1.8rem, 7vw, 3rem);
    padding-block: 8px;
  }
}
</style>
