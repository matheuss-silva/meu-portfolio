<script setup>
import { projects } from '~/data/projects'

const {
  track,
  currentIndex,
  isDragging,
  isAnimating,
  canScrollPrev,
  canScrollNext,
  scrollNext,
  scrollPrev,
  onScroll,
  onPointerDown,
  onPointerMove,
  endDrag,
  onClickCapture,
  onKeydown
} = useHorizontalScroll()
</script>

<template>
  <div
    class="carousel"
    :class="{
      'carousel--dragging': isDragging,
      'carousel--animating': isAnimating
    }"
  >
    <div class="carousel__header">
      <div class="carousel__nav">
        <button
          type="button"
          class="carousel__arrow"
          :disabled="!canScrollPrev"
          aria-label="Projeto anterior"
          data-cursor-hover
          @click="scrollPrev"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          class="carousel__arrow"
          :disabled="!canScrollNext"
          aria-label="Próximo projeto"
          data-cursor-hover
          @click="scrollNext"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <div class="carousel__viewport">
      <ul
        ref="track"
        class="carousel__track"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Projetos selecionados"
        tabindex="0"
        @scroll.passive="onScroll"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="endDrag"
        @pointercancel="endDrag"
        @click.capture="onClickCapture"
        @keydown="onKeydown"
      >
        <li
          v-for="(project, index) in projects"
          :key="project.slug"
          class="carousel__slide"
          :class="{ 'carousel__slide--active': currentIndex === index }"
          data-carousel-slide
          role="group"
          aria-roledescription="slide"
          :aria-label="`${index + 1} de ${projects.length}: ${project.title}`"
          :aria-current="currentIndex === index ? 'true' : undefined"
        >
          <ProjectCard :project="project" />
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.carousel {
  --slide-gap: clamp(16px, 2vw, 28px);
  --slide-width: min(460px, calc(100% - 32px));
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.carousel__header {
  position: absolute;
  right: calc(100% + clamp(32px, 5vw, 64px) + 24px);
  bottom: 32px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.carousel__nav {
  display: flex;
  gap: 10px;
}

.carousel__arrow {
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

.carousel__arrow svg {
  width: 16px;
  height: 16px;
}

.carousel__arrow:not(:disabled):hover {
  color: var(--accent-contrast);
  border-color: var(--accent);
  background: var(--accent);
  transform: translateY(-2px);
}

.carousel__arrow:disabled {
  cursor: default;
  opacity: 0.28;
}

.carousel__viewport {
  min-width: 0;
  overflow: hidden;
}

.carousel__track {
  display: flex;
  align-items: stretch;
  gap: var(--slide-gap);
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  touch-action: pan-x pan-y;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  padding: 4px 0 10px;
}

.carousel__track::after {
  content: '';
  flex: 0 0 max(0px, calc(100% - var(--slide-width) - var(--slide-gap)));
}

.carousel__track:focus-visible {
  outline: 1px solid var(--accent);
  outline-offset: 5px;
}

.carousel__track::-webkit-scrollbar {
  display: none;
}

.carousel--dragging .carousel__track {
  cursor: grabbing;
}

.carousel__slide {
  flex: 0 0 var(--slide-width);
  min-width: 0;
  opacity: 0.52;
  transform: scale(0.965);
  transform-origin: center left;
  transition:
    opacity 480ms var(--ease-out),
    transform 480ms var(--ease-out);
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 900px) {
  .carousel {
    --slide-width: min(460px, calc(100% - 72px));
  }
}

@media (max-width: 900px) {
  .carousel__header {
    right: calc(100% - var(--slide-width) + 20px);
  }
}

@media (max-width: 560px) {
  .carousel {
    gap: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__slide,
  .carousel__arrow {
    transition: none;
  }
}
</style>
