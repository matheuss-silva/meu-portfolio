<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <article class="project-card" data-card>
    <a
      :href="project.url"
      class="project-card__media"
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      draggable="false"
    >
      <span class="project-card__placeholder">ADICIONE A CAPA DO PROJETO</span>
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`Capa do projeto ${project.title}`"
        loading="lazy"
        width="640"
        height="440"
        class="project-card__image"
        draggable="false"
        @error="$event.target.style.display = 'none'"
      />
    </a>

    <div class="project-card__meta">
      <span class="eyebrow eyebrow--accent">{{ project.category }}</span>
      <div class="project-card__row">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <span v-if="project.year" class="project-card__year">{{ project.year }}</span>
      </div>
      <ul v-if="project.technologies?.length" class="project-card__technologies" aria-label="Tecnologias utilizadas">
        <li v-for="technology in project.technologies" :key="technology">
          {{ technology }}
        </li>
      </ul>
      <a
        :href="project.url"
        class="project-card__link"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
      >
        VER PROJETO
        <svg class="project-card__link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 520ms var(--ease-spring),
    border-color 320ms var(--ease-out),
    box-shadow 520ms var(--ease-out),
    background-color 320ms var(--ease-out);
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 3;
  border: 1px solid transparent;
  background: linear-gradient(115deg, transparent 30%, var(--accent-soft) 48%, transparent 66%);
  background-size: 250% 100%;
  background-position: 100% 0;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 300ms var(--ease-out),
    background-position 900ms var(--ease-spring);
}

.project-card__media {
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  background: var(--background-soft);
  overflow: hidden;
  -webkit-user-drag: none;
  user-select: none;
}

.project-card__media::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(to top, rgba(5, 5, 5, 0.32), transparent 45%);
  opacity: 0;
  transition: opacity 420ms var(--ease-out);
  pointer-events: none;
}

.project-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 850ms var(--ease-spring),
    filter 500ms var(--ease-out);
  z-index: 1;
  -webkit-user-drag: none;
}

.project-card__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  text-transform: uppercase;
  z-index: 0;
}

.project-card__meta {
  padding: clamp(20px, 2vw, 28px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 175px;
}

.project-card__meta > * {
  transition:
    color 300ms var(--ease-out),
    transform 500ms var(--ease-spring);
}

.project-card__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.project-card__title {
  font-family: var(--font-display);
  text-transform: uppercase;
  font-size: clamp(1.25rem, 1.65vw, 1.6rem);
  line-height: 0.98;
  letter-spacing: -0.01em;
}

.project-card__year {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.project-card__technologies li {
  padding: 5px 9px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-secondary);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  margin-top: auto;
  padding-top: 6px;
  transition: color var(--duration-hover) var(--ease-out);
}

.project-card__link-icon {
  transition: transform 420ms var(--ease-spring);
}

.project-card__link:hover {
  color: var(--accent);
}

@media (hover: hover) {
  .project-card:hover {
    transform: translateY(-7px);
    border-color: color-mix(in srgb, var(--accent) 68%, var(--border));
    background: var(--surface-hover);
    box-shadow: 0 24px 58px rgba(0, 0, 0, 0.32);
  }

  .project-card:hover::before {
    opacity: 1;
    background-position: -100% 0;
  }

  .project-card:hover .project-card__media::after {
    opacity: 1;
  }

  .project-card:hover .project-card__image {
    transform: scale(1.075);
    filter: saturate(1.08) contrast(1.03);
  }

  .project-card:hover .project-card__title {
    transform: translateX(4px);
  }

  .project-card__link:hover .project-card__link-icon {
    transform: translate(3px, -3px) rotate(5deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card__image,
  .project-card__link-icon,
  .project-card,
  .project-card::before,
  .project-card__meta > * {
    transition: none;
  }

  .project-card:hover {
    transform: none;
  }
}
</style>
