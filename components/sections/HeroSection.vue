<script setup>
import { portfolio } from '~/data/portfolio'
import { getContactHref } from '~/data/contact'

const lines = [
  { text: portfolio.hero.line1, variant: 'filled' },
  { text: portfolio.hero.line2, variant: 'outline' },
  { text: portfolio.hero.line3, variant: 'accent' }
]
</script>

<template>
  <section id="top" class="hero section">
    <div class="hero__glow" aria-hidden="true" />
    <div class="container hero__inner">
      <p class="hero__eyebrow eyebrow">{{ portfolio.hero.eyebrow }}</p>

      <OutlineHeading tag="h1" size="display" :lines="lines" />

      <div class="hero__footer">
        <div class="hero__footer-left">
          <p class="hero__description">{{ portfolio.hero.description }}</p>

          <div class="hero__actions">
            <a href="#projetos" class="hero__link hero__link--primary">
              {{ portfolio.hero.ctaPrimary }}
              <span aria-hidden="true">↗</span>
            </a>
            <a :href="getContactHref()" class="hero__link">
              {{ portfolio.hero.ctaSecondary }}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  padding-top: calc(var(--header-height) + 40px);
  padding-bottom: clamp(48px, 8vw, 96px);
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  top: 10%;
  left: 50%;
  width: 900px;
  height: 900px;
  transform: translateX(-50%);
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 65%);
  pointer-events: none;
  z-index: -1;
  animation: hero-glow-drift 9s var(--ease-smooth) infinite alternate;
}

.hero__inner {
  width: 100%;
}

.hero__eyebrow {
  margin-bottom: clamp(16px, 3vw, 28px);
  letter-spacing: 0.16em;
  animation: hero-fade-up var(--duration-enter) var(--ease-out) both;
}

.hero__footer {
  margin-top: clamp(28px, 5vw, 56px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.hero__footer-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero__description {
  max-width: 50ch;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  animation: hero-fade-up var(--duration-enter) var(--ease-out) both;
  animation-delay: 200ms;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 28px;
  animation: hero-fade-up var(--duration-enter) var(--ease-out) both;
  animation-delay: 320ms;
}

.hero__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-primary);
  padding-bottom: 4px;
  border-bottom: 1px solid var(--border);
  transition:
    border-color var(--duration-hover) var(--ease-out),
    color var(--duration-hover) var(--ease-out);
}

.hero__link span {
  display: inline-block;
  transition: transform var(--duration-hover) var(--ease-out);
}

.hero__link:hover,
.hero__link:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
}

.hero__link:hover span,
.hero__link:focus-visible span {
  transform: translate(2px, -2px);
}

.hero__link--primary {
  color: var(--accent);
  border-color: var(--accent);
}

@keyframes hero-fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-glow-drift {
  from {
    opacity: 0.62;
    transform: translateX(-52%) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateX(-48%) scale(1.08);
  }
}

@media (max-width: 640px) {
  .hero {
    align-items: center;
    padding-top: calc(var(--header-height) + 24px);
  }

  .hero__footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .hero__actions {
    gap: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__glow {
    animation: none;
  }
}

</style>
