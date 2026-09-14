<script setup>
import { portfolio } from '~/data/portfolio'

const { projectsIntro } = portfolio

const projectCarousel = ref(null)
const canScrollPrev = computed(() => projectCarousel.value?.canScrollPrev ?? false)
const canScrollNext = computed(() => projectCarousel.value?.canScrollNext ?? false)

const scrollPrev = () => projectCarousel.value?.scrollPrev()
const scrollNext = () => projectCarousel.value?.scrollNext()
</script>

<template>
  <section id="projetos" class="projects section section-border">
    <div class="container projects__grid">
      <div class="projects__intro">
        <div class="projects__copy">
          <RevealText tag="div" :mask="false" variant="left">
            <SectionLabel>{{ projectsIntro.eyebrow }}</SectionLabel>
          </RevealText>
          <RevealText tag="h2" :delay="80" class="section-title projects__title">{{ projectsIntro.title }}</RevealText>
          <RevealText tag="p" :mask="false" variant="left" :delay="180" class="projects__description">{{ projectsIntro.description }}</RevealText>
        </div>

        <div class="projects__nav" aria-label="Navegação dos projetos">
          <button
            type="button"
            class="projects__arrow"
            :disabled="!canScrollPrev"
            aria-label="Projeto anterior"
            data-cursor-hover
            @click="scrollPrev"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            class="projects__arrow"
            :disabled="!canScrollNext"
            aria-label="Próximo projeto"
            data-cursor-hover
            @click="scrollNext"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <RevealText tag="div" :mask="false" variant="right" :delay="100" class="projects__carousel">
        <ProjectCarousel ref="projectCarousel" />
      </RevealText>
    </div>
  </section>
</template>

<style scoped>
.projects {
  /* Mantém o início da seção alinhado ao fluxo visual do carrossel. */
  scroll-margin-top: 0;
}

.projects__grid {
  display: grid;
  grid-template-columns: minmax(260px, 340px) 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.projects__intro {
  align-self: stretch;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
}

.projects__copy {
  grid-row: 2;
}

.projects__title {
  margin-top: 8px;
  font-size: clamp(2.2rem, 3.6vw, 3.4rem);
  line-height: calc(0.88em + 4px);
  white-space: pre-line;
}

.projects__description {
  margin-top: 20px;
  color: var(--text-secondary);
}

.projects__nav {
  grid-row: 3;
  align-self: end;
  justify-self: end;
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  transform: translateX(8px);
}

.projects__arrow {
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface);
  display: grid;
  place-items: center;
  color: var(--text-primary);
  transition:
    color 260ms var(--ease-out),
    border-color 260ms var(--ease-out),
    background-color 260ms var(--ease-out),
    transform 260ms var(--ease-out),
    opacity 260ms var(--ease-out);
}

.projects__arrow:not(:disabled):hover {
  color: var(--accent-contrast);
  border-color: var(--accent);
  background: var(--accent);
  transform: translateY(-2px);
}

.projects__arrow:disabled {
  cursor: default;
  opacity: 0.28;
}

.projects__carousel {
  min-width: 0;
}

@media (max-width: 900px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .projects__intro {
    display: block;
    align-self: start;
  }

  .projects__nav {
    margin-top: 28px;
    margin-bottom: 0;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .projects__arrow {
    transition: none;
  }
}
</style>
