<script setup>
import { contact } from '~/data/contact'

const props = defineProps({
  open: { type: Boolean, default: false }
})

const emit = defineEmits(['close'])

const panelRef = ref(null)
const closeButtonRef = ref(null)
const nameInputRef = ref(null)
const formStatus = ref('')
const form = reactive({
  name: '',
  email: '',
  message: ''
})

let previousFocusedElement = null
let previousBodyOverflow = ''

const isConfigured = (value) => Boolean(value && !value.startsWith('['))

const channels = computed(() => [
  {
    label: 'WHATSAPP',
    href: isConfigured(contact.whatsapp) ? contact.whatsapp : '#contact-form',
    external: true,
    available: isConfigured(contact.whatsapp)
  },
  {
    label: 'E-MAIL',
    href: isConfigured(contact.email) ? `mailto:${contact.email}` : '#contact-form',
    external: false,
    available: isConfigured(contact.email)
  },
  {
    label: 'LINKEDIN',
    href: isConfigured(contact.linkedin) ? contact.linkedin : '#contact-form',
    external: true,
    available: isConfigured(contact.linkedin)
  }
])

const close = () => emit('close')

const focusForm = (channel, event) => {
  if (channel.available) return
  event.preventDefault()
  nameInputRef.value?.focus()
}

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    close()
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = panelRef.value?.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])'
  )

  if (!focusableElements?.length) return

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

const submitForm = () => {
  if (!isConfigured(contact.email)) {
    formStatus.value = 'Configure seu e-mail de contato para ativar o envio.'
    return
  }

  const subject = encodeURIComponent(`Contato pelo portfólio — ${form.name}`)
  const body = encodeURIComponent(
    `Nome: ${form.name}\nE-mail: ${form.email}\n\nMensagem:\n${form.message}`
  )

  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
}

watch(
  () => props.open,
  async (isOpen) => {
    if (!import.meta.client) return

    if (isOpen) {
      previousFocusedElement = document.activeElement
      previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeydown)
      await nextTick()
      closeButtonRef.value?.focus()
    } else {
      document.body.style.overflow = previousBodyOverflow
      document.removeEventListener('keydown', onKeydown)
      previousFocusedElement?.focus?.()
    }
  }
)

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.body.style.overflow = previousBodyOverflow
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="contact-modal">
      <div
        v-if="open"
        class="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          class="contact-modal__backdrop"
          aria-label="Fechar janela de contato"
          @click="close"
        />

        <div ref="panelRef" class="contact-modal__panel">
          <header class="contact-modal__header">
            <span class="eyebrow eyebrow--accent">CONTATO</span>
            <button
              ref="closeButtonRef"
              type="button"
              class="contact-modal__close"
              aria-label="Fechar janela de contato"
              @click="close"
            >
              <span>FECHAR</span>
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <div class="contact-modal__content">
            <div class="contact-modal__intro">
              <h2 id="contact-modal-title" class="contact-modal__title">
                VAMOS<br />CONVERSAR<span>.</span>
              </h2>
              <p>Como prefere falar comigo?</p>
            </div>

            <div class="contact-modal__options">
              <nav class="contact-modal__channels" aria-label="Canais de contato">
                <a
                  v-for="channel in channels"
                  :key="channel.label"
                  :href="channel.href"
                  :target="channel.external && channel.available ? '_blank' : undefined"
                  :rel="channel.external && channel.available ? 'noopener noreferrer' : undefined"
                  class="contact-modal__channel"
                  @click="focusForm(channel, $event)"
                >
                  <span>{{ channel.label }}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </nav>

              <div class="contact-modal__divider" aria-hidden="true">
                <span>OU</span>
              </div>

              <form id="contact-form" class="contact-form" @submit.prevent="submitForm">
                <h3>DEIXE UMA MENSAGEM</h3>

                <label class="contact-form__field">
                  <span>NOME</span>
                  <input
                    ref="nameInputRef"
                    v-model.trim="form.name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    required
                  />
                </label>

                <label class="contact-form__field">
                  <span>E-MAIL</span>
                  <input
                    v-model.trim="form.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                  />
                </label>

                <label class="contact-form__field">
                  <span>MENSAGEM</span>
                  <textarea
                    v-model.trim="form.message"
                    name="message"
                    rows="4"
                    required
                  />
                </label>

                <button type="submit" class="contact-form__submit">
                  <span>ENVIAR</span>
                  <span aria-hidden="true">↗</span>
                </button>

                <p v-if="formStatus" class="contact-form__status" aria-live="polite">
                  {{ formStatus }}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.contact-modal {
  position: fixed;
  inset: 0;
  z-index: 400;
  display: grid;
  place-items: center;
  padding: clamp(10px, 2vw, 28px);
}

.contact-modal__backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.contact-modal__panel {
  position: relative;
  width: min(1500px, 100%);
  height: min(900px, calc(100dvh - clamp(20px, 4vw, 56px)));
  overflow-y: auto;
  background:
    radial-gradient(circle at 22% 42%, var(--accent-soft), transparent 38%),
    var(--background);
  border: 1px solid var(--border);
  box-shadow: 0 32px 100px rgba(0, 0, 0, 0.55);
}

.contact-modal__header {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px clamp(20px, 3vw, 44px);
  background: color-mix(in srgb, var(--background) 88%, transparent);
  border-bottom: 1px solid var(--border-soft);
  backdrop-filter: blur(10px);
}

.contact-modal__close {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 9px 16px;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition:
    opacity 420ms var(--ease-out),
    color var(--duration-hover) var(--ease-out),
    border-color var(--duration-hover) var(--ease-out),
    background-color var(--duration-hover) var(--ease-out),
    transform 380ms var(--ease-spring);
}

.contact-modal__close span:last-child {
  color: var(--accent);
  font-size: 1.2rem;
  line-height: 1;
  transition: transform 420ms var(--ease-spring);
}

.contact-modal__close:hover {
  color: var(--text-primary);
  border-color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.contact-modal__close:hover span:last-child {
  transform: rotate(90deg);
}

.contact-modal__content {
  display: grid;
  grid-template-columns: minmax(280px, 0.78fr) minmax(620px, 1.22fr);
  gap: clamp(48px, 7vw, 110px);
  align-items: center;
  min-height: calc(100% - 81px);
  padding: clamp(36px, 5vw, 84px);
}

.contact-modal__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(4rem, 7vw, 8.5rem);
  font-weight: 400;
  line-height: 0.86;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

.contact-modal__title span {
  color: var(--accent);
}

.contact-modal__intro p {
  margin-top: 28px;
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.4vw, 1.2rem);
}

.contact-modal__options {
  display: grid;
  grid-template-columns: minmax(210px, 0.9fr) 48px minmax(280px, 1.1fr);
  gap: clamp(18px, 2.6vw, 36px);
  align-items: stretch;
}

.contact-modal__channels {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.contact-modal__channel {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  padding: 18px 22px;
  color: var(--text-primary);
  border: 1px solid var(--border);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition:
    color var(--duration-hover) var(--ease-out),
    border-color var(--duration-hover) var(--ease-out),
    background-color var(--duration-hover) var(--ease-out),
    box-shadow 420ms var(--ease-out),
    transform 480ms var(--ease-spring);
}

.contact-modal__channel::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 480ms var(--ease-spring);
}

.contact-modal__channel span:last-child {
  color: var(--accent);
  transition: transform var(--duration-hover) var(--ease-out);
}

.contact-modal__channel:hover {
  color: var(--accent-contrast);
  border-color: var(--accent);
  transform: translateX(7px);
  box-shadow: -12px 14px 34px rgba(0, 0, 0, 0.22);
}

.contact-modal__channel:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.contact-modal__channel:hover span:last-child {
  color: var(--accent-contrast);
  transform: translate(3px, -3px) rotate(6deg);
}

.contact-modal__divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.contact-modal__divider::before,
.contact-modal__divider::after {
  content: '';
  width: 1px;
  flex: 1;
  background: var(--border-soft);
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form h3 {
  margin-bottom: 24px;
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 2.4vw, 2.4rem);
  font-weight: 400;
  letter-spacing: -0.01em;
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-block: 12px;
  border-bottom: 1px solid var(--border);
  transition:
    border-color 300ms var(--ease-out),
    background-color 300ms var(--ease-out),
    padding-inline 420ms var(--ease-spring);
}

.contact-form__field span {
  color: var(--text-muted);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  transition:
    color 260ms var(--ease-out),
    transform 380ms var(--ease-spring);
}

.contact-form__field input,
.contact-form__field textarea {
  width: 100%;
  padding: 2px 0;
  color: var(--text-primary);
  background: transparent;
  border: 0;
  outline: 0;
  font: inherit;
  resize: vertical;
}

.contact-form__field:focus-within {
  border-color: var(--accent);
  padding-inline: 10px;
  background: linear-gradient(90deg, var(--accent-soft), transparent 72%);
}

.contact-form__field:focus-within span {
  color: var(--accent);
  transform: translateX(2px);
}

.contact-form__submit {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  gap: 28px;
  min-height: 48px;
  margin-top: 26px;
  padding: 13px 22px;
  color: var(--accent-contrast);
  background: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  transition:
    background-color var(--duration-hover) var(--ease-out),
    transform var(--duration-hover) var(--ease-out);
}

.contact-form__submit span:last-child {
  transition: transform 420ms var(--ease-spring);
}

.contact-form__submit:hover {
  background: var(--accent-hover);
  transform: translateY(-4px) scale(1.015);
  box-shadow: 0 16px 40px color-mix(in srgb, var(--accent) 24%, transparent);
}

.contact-form__submit:hover span:last-child {
  transform: translate(4px, -4px) rotate(6deg);
}

.contact-form__status {
  margin-top: 14px;
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.4;
}

.contact-modal-enter-active,
.contact-modal-leave-active {
  transition: opacity 280ms var(--ease-out);
}

.contact-modal-enter-active .contact-modal__panel,
.contact-modal-leave-active .contact-modal__panel {
  transition:
    transform 620ms var(--ease-spring),
    opacity 360ms var(--ease-out),
    filter 520ms var(--ease-out);
}

.contact-modal-enter-active .contact-modal__header,
.contact-modal-enter-active .contact-modal__intro,
.contact-modal-enter-active .contact-modal__channels,
.contact-modal-enter-active .contact-modal__divider,
.contact-modal-enter-active .contact-form {
  transition:
    opacity 480ms var(--ease-out),
    filter 620ms var(--ease-out),
    transform 680ms var(--ease-spring);
}

.contact-modal-enter-active .contact-modal__header { transition-delay: 100ms; }
.contact-modal-enter-active .contact-modal__intro { transition-delay: 150ms; }
.contact-modal-enter-active .contact-modal__channels { transition-delay: 210ms; }
.contact-modal-enter-active .contact-modal__divider { transition-delay: 260ms; }
.contact-modal-enter-active .contact-form { transition-delay: 290ms; }

.contact-modal__channel:nth-child(1) { --channel-index: 0; }
.contact-modal__channel:nth-child(2) { --channel-index: 1; }
.contact-modal__channel:nth-child(3) { --channel-index: 2; }

.contact-modal-enter-active .contact-modal__channel {
  transition-delay: calc(220ms + var(--channel-index, 0) * 55ms);
}

.contact-modal-enter-from,
.contact-modal-leave-to {
  opacity: 0;
}

.contact-modal-enter-from .contact-modal__panel,
.contact-modal-leave-to .contact-modal__panel {
  opacity: 0;
  filter: blur(9px);
  transform: translateY(42px) scale(0.965);
}

.contact-modal-enter-from .contact-modal__header,
.contact-modal-enter-from .contact-modal__intro,
.contact-modal-enter-from .contact-modal__channels,
.contact-modal-enter-from .contact-modal__divider,
.contact-modal-enter-from .contact-form {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(24px);
}

.contact-modal-enter-from .contact-modal__channel {
  opacity: 0;
  transform: translateX(20px);
}

@media (max-width: 1100px) {
  .contact-modal__content {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .contact-modal__intro {
    max-width: 680px;
  }

  .contact-modal__title br {
    display: none;
  }
}

@media (max-width: 720px) {
  .contact-modal {
    padding: 0;
  }

  .contact-modal__panel {
    width: 100%;
    height: 100dvh;
    border: 0;
  }

  .contact-modal__content {
    gap: 40px;
    padding: 32px 20px 56px;
  }

  .contact-modal__title {
    font-size: clamp(3.4rem, 17vw, 5.2rem);
  }

  .contact-modal__options {
    grid-template-columns: 1fr;
  }

  .contact-modal__divider {
    flex-direction: row;
  }

  .contact-modal__divider::before,
  .contact-modal__divider::after {
    width: auto;
    height: 1px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-modal-enter-active,
  .contact-modal-leave-active,
  .contact-modal-enter-active .contact-modal__panel,
  .contact-modal-leave-active .contact-modal__panel {
    transition: none;
  }

  .contact-modal__channel:hover,
  .contact-modal__close:hover,
  .contact-form__submit:hover {
    transform: none;
  }

  .contact-modal-enter-active .contact-modal__header,
  .contact-modal-enter-active .contact-modal__intro,
  .contact-modal-enter-active .contact-modal__channels,
  .contact-modal-enter-active .contact-modal__divider,
  .contact-modal-enter-active .contact-form {
    transition: none;
  }
}
</style>
