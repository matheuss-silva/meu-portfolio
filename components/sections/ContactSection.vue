<script setup>
import { portfolio } from '~/data/portfolio'
import ContactModal from '~/components/contact/ContactModal.vue'

const { finalCta } = portfolio
const contactModalOpen = ref(false)
const lines = [
  { text: finalCta.titleLine1, variant: 'filled' },
  { text: finalCta.titleLine2, variant: 'filled' },
  { text: finalCta.outlineLine, variant: 'outline' },
  { words: finalCta.dynamicWords, variant: 'accent' }
]
</script>

<template>
  <section id="contato" class="contact section section-border">
    <div class="contact__glow" aria-hidden="true" />
    <div class="container contact__inner">
      <RevealText tag="div" :mask="false" variant="fade">
        <SectionLabel>{{ finalCta.eyebrow }}</SectionLabel>
      </RevealText>

      <OutlineHeading tag="h2" size="display" :lines="lines" />

      <RevealText tag="div" :mask="false" variant="scale" :delay="360">
        <AppButton
          tag="button"
          type="button"
          variant="solid"
          dot
          class="contact__cta"
          aria-haspopup="dialog"
          :aria-expanded="contactModalOpen"
          @click="contactModalOpen = true"
        >
          {{ finalCta.button }}
        </AppButton>
      </RevealText>
    </div>

    <ContactModal :open="contactModalOpen" @close="contactModalOpen = false" />
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
  padding-block: clamp(96px, 14vw, 180px);
  overflow: hidden;
}

.contact__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 700px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 65%);
  pointer-events: none;
  z-index: -1;
}

.contact__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact :deep(.section-label) {
  justify-content: center;
}

.contact :deep(.outline-heading__line) {
  text-align: center;
}

.contact :deep(.outline-heading--display span.outline-heading__line) {
  font-size: clamp(2.2rem, 6.5vw, 7.5rem);
}

.contact__cta {
  margin-top: clamp(36px, 5vw, 56px);
}
</style>
