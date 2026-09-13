<script setup>
import { portfolio } from "~/data/portfolio";

const { loader } = portfolio;

const DURATION = 900;

const progress = ref(0);
const isLeaving = ref(false);
const isVisible = ref(true);

const percentage = computed(() => Math.min(100, Math.round(progress.value)));

let rafId = null;
let startTime = null;
let hideTimer = null;
let leaveTimer = null;

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function step(timestamp) {
  if (!startTime) startTime = timestamp;
  const t = Math.min((timestamp - startTime) / DURATION, 1);
  progress.value = easeOutQuart(t) * 100;

  if (t < 1) {
    rafId = requestAnimationFrame(step);
  } else {
    finish();
  }
}

function finish() {
  document.body.style.overflow = "";

  hideTimer = window.setTimeout(() => {
    isLeaving.value = true;
    leaveTimer = window.setTimeout(() => {
      isVisible.value = false;
    }, 450);
  }, 150);
}

onMounted(() => {
  if (!import.meta.client) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReduced) {
    progress.value = 100;
    finish();
    return;
  }

  document.body.style.overflow = "hidden";
  rafId = requestAnimationFrame(step);
});

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId);
  if (hideTimer) window.clearTimeout(hideTimer);
  if (leaveTimer) window.clearTimeout(leaveTimer);
  document.body.style.overflow = "";
});
</script>

<template>
  <div
    v-if="isVisible"
    class="page-loader"
    :class="{ 'is-leaving': isLeaving }"
    aria-hidden="true"
  >
    <div class="page-loader__content">
      <p class="page-loader__subtitle">{{ loader.subtitle }}</p>
      <p class="page-loader__title">
        {{ loader.titlePrefix
        }}<span class="text-accent">{{ loader.titleHighlight }}</span
        >{{ loader.titleSuffix }}
      </p>
    </div>

    <div class="page-loader__footer">
      <div class="page-loader__track">
        <div class="page-loader__fill" :style="{ width: percentage + '%' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background);
  overflow: hidden;
  padding: clamp(32px, 6vh, 72px) var(--page-padding) clamp(20px, 4vw, 40px);
  transition: opacity 450ms var(--ease-out);
}

.page-loader.is-leaving {
  opacity: 0;
  pointer-events: none;
}

.page-loader__content {
  margin-block: auto;
  text-align: center;
  max-width: 96vw;
}

.page-loader__subtitle {
  font-family: var(--font-body);
  font-size: clamp(0.75rem, 1.1vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: clamp(20px, 2.5vw, 35px);
  max-width: none;
  white-space: nowrap;
  text-align: center;
  animation: page-loader-fade-up 600ms var(--ease-out) both;
}

.page-loader__title {
  font-family: var(--font-display);
  text-transform: uppercase;
  font-size: clamp(4.375rem, 9vw, 10.3125rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  overflow-wrap: break-word;
  color: var(--text-primary);
  animation: page-loader-fade-up 700ms var(--ease-out) both;
  animation-delay: 150ms;
}

@keyframes page-loader-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-loader__footer {
  width: 100%;
  flex-shrink: 0;
}

.page-loader__track {
  height: 2px;
  background: var(--border-soft);
  overflow: hidden;
}

.page-loader__fill {
  height: 100%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

@media (max-width: 640px) {
  .page-loader__subtitle {
    white-space: normal;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-loader {
    transition: none;
  }
}
</style>
