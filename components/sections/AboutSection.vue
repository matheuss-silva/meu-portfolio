<script setup>
import { portfolio } from "~/data/portfolio";

const { about } = portfolio;
</script>

<template>
  <section id="sobre" class="about section section-border">
    <div class="container about__grid">
      <RevealText tag="div" :mask="false" variant="left" class="about__media">
        <SectionLabel>{{ about.eyebrow }}</SectionLabel>

        <div class="about__image-wrap">
          <span class="about__image-placeholder">ADICIONE SUA FOTO</span>
          <img
            v-if="about.image"
            :src="about.image"
            :alt="about.imageAlt"
            loading="lazy"
            width="520"
            height="640"
            class="about__image"
          />
        </div>
      </RevealText>

      <div class="about__content">
        <p class="editorial about__headline">
          <RevealText tag="span" :delay="80" class="about__headline-line">
            {{ about.headlineLine1 }}
          </RevealText>
          <RevealText tag="span" :delay="150" class="about__headline-line">
            {{ about.headlineLine2Prefix }}<span class="text-accent">{{ about.headlineHighlight }}</span>
          </RevealText>
          <RevealText tag="span" :delay="220" class="about__headline-line">
            {{ about.headlineLine3 }}
          </RevealText>
        </p>

        <RevealText
          tag="p"
          :mask="false"
          :delay="240"
          variant="right"
          class="about__description"
          >{{ about.description }}</RevealText
        >

        <RevealText tag="div" :mask="false" :delay="320" stagger :stagger-step="90" class="about__tags">
          <div v-for="group in about.technologyGroups" :key="group.label" class="about__tag-group">
            <span class="about__tag-label">{{ group.label }}</span>
            <ul class="about__tag-row">
              <li v-for="tag in group.tags" :key="tag">
                <AppTag>{{ tag }}</AppTag>
              </li>
            </ul>
          </div>
        </RevealText>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: minmax(260px, 380px) 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
}

@media (min-width: 1200px) {
  .about__grid {
    --about-horizontal-shift: clamp(60px, 4vw, 80px);
    width: calc(100% - var(--about-horizontal-shift));
    margin-left: var(--about-horizontal-shift);
  }
}

.about__image-wrap {
  position: relative;
  aspect-ratio: 4 / 5;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  overflow: hidden;
  transition: border-color var(--duration-hover) var(--ease-out);
}

.about__image-wrap:hover {
  border-color: var(--accent);
}

.about__image-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  text-transform: uppercase;
}

.about__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 500ms var(--ease-out);
}

.about__image-wrap:hover .about__image {
  transform: scale(1.04);
}

.about__badge {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: rgba(5, 5, 5, 0.7);
  backdrop-filter: blur(6px);
  border: 1px solid var(--border-soft);
  border-radius: 999px;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.about__badge-status {
  color: var(--accent);
  font-weight: 600;
}

.about__headline {
  font-size: clamp(1.8rem, 3.4vw, 2.8rem);
  line-height: 1.2;
  max-width: 24ch;
}

.about__headline-line {
  display: block;
}

.about__description {
  margin-top: 28px;
  color: var(--text-secondary);
  max-width: 58ch;
  line-height: 1.7;
}

.about__tags {
  margin-top: 32px;
  display: grid;
  gap: 18px;
}

.about__tag-group {
  display: grid;
  gap: 8px;
}

.about__tag-label {
  color: var(--text-muted);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.about__tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__image-wrap {
    max-width: 380px;
    margin-inline: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about__image-wrap:hover .about__image {
    transform: none;
  }
}
</style>
