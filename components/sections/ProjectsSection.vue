<script setup>
import { portfolio } from '~/data/portfolio'

const { projectsIntro } = portfolio
</script>

<template>
  <section id="projetos" class="projects section section-border">
    <div class="container projects__grid">
      <div class="projects__intro">
        <RevealText tag="div" :mask="false" variant="left">
          <SectionLabel>{{ projectsIntro.eyebrow }}</SectionLabel>
        </RevealText>
        <RevealText tag="h2" :delay="80" class="section-title projects__title">{{ projectsIntro.title }}</RevealText>
        <RevealText tag="p" :mask="false" variant="left" :delay="180" class="projects__description">{{ projectsIntro.description }}</RevealText>
      </div>

      <RevealText tag="div" :mask="false" variant="right" :delay="100" class="projects__carousel">
        <ProjectCarousel />
      </RevealText>
    </div>
  </section>
</template>

<style scoped>
.projects {
  /* .projects__intro já se autocentraliza verticalmente (sticky + align-self: center),
     então não precisa do mesmo respiro de scroll-margin das demais seções. */
  scroll-margin-top: 0;
}

.projects__grid {
  display: grid;
  grid-template-columns: minmax(260px, 340px) 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.projects__intro {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  align-self: center;
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

.projects__carousel {
  min-width: 0;
}

@media (max-width: 900px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .projects__intro {
    position: static;
    align-self: start;
  }
}
</style>
