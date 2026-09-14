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

defineExpose({
  canScrollPrev,
  canScrollNext,
  scrollPrev,
  scrollNext
})
</script>

<template>
  <div
    class="carousel"
    :class="{
      'carousel--dragging': isDragging,
      'carousel--animating': isAnimating
    }"
  >
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
  display: flex;
  flex-direction: column;
  min-width: 0;
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

@media (max-width: 560px) {
  .carousel {
    gap: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__slide {
    transition: none;
  }
}
</style>
