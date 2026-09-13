<script setup>
import { stackCategories } from "~/data/stack";

const titleLines = ["FERRAMENTAS", "QUE FAZEM PARTE", "DO MEU PROCESSO."];

const updateSpotlight = (event) => {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
}
</script>

<template>
  <section id="stack" class="stack section section-border">
    <div class="container stack__layout">
      <header class="stack__intro">
        <RevealText tag="div" :mask="false" variant="left">
          <SectionLabel>TECNOLOGIAS</SectionLabel>
        </RevealText>

        <h2 class="stack__title">
          <RevealText
            v-for="(line, index) in titleLines"
            :key="line"
            tag="span"
            :delay="80 + index * 70"
          >{{ line }}</RevealText>
        </h2>
      </header>

      <ul class="stack__grid" aria-label="Tecnologias por categoria">
        <RevealText
          v-for="(item, index) in stackCategories"
          :key="item.number"
          tag="li"
          :mask="false"
          variant="scale"
          :delay="Math.min(index * 80, 320)"
        >
          <div class="stack-card" @pointermove="updateSpotlight">
            <div class="stack-card__top">
              <span class="stack-card__number">{{ item.number }}</span>
              <span class="stack-card__arrow" aria-hidden="true">↗</span>
            </div>

            <h3 class="stack-card__category">{{ item.category }}</h3>

            <ul class="stack-card__technologies">
              <li v-for="technology in item.technologies" :key="technology">
                {{ technology }}
              </li>
            </ul>
          </div>
        </RevealText>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.stack__layout {
  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) minmax(520px, 1.1fr);
  gap: clamp(48px, 7vw, 112px);
  align-items: center;
}

.stack__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 5.3vw, 5.5rem);
  font-weight: 400;
  line-height: 0.94;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.stack__title span {
  display: block;
}

.stack__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.stack-card {
  --pointer-x: 50%;
  --pointer-y: 50%;
  position: relative;
  height: 100%;
  min-height: 220px;
  padding: clamp(22px, 2.4vw, 32px);
  border: 1px solid var(--border-soft);
  background: var(--surface);
  overflow: hidden;
  transition:
    transform var(--duration-hover) var(--ease-out),
    border-color var(--duration-hover) var(--ease-out),
    box-shadow var(--duration-hover) var(--ease-out),
    background-color var(--duration-hover) var(--ease-out);
}

.stack-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(280px circle at var(--pointer-x) var(--pointer-y), var(--accent-soft), transparent 68%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 420ms var(--ease-out);
}

.stack-card__top {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.stack-card__number {
  font-family: var(--font-display);
  font-size: 2.35rem;
  line-height: 1;
  color: var(--text-muted);
  transition: color var(--duration-hover) var(--ease-out);
}

.stack-card__arrow {
  color: var(--accent);
  font-size: 1.15rem;
  opacity: 0;
  transform: translate(-5px, 5px);
  transition:
    opacity var(--duration-hover) var(--ease-out),
    transform var(--duration-hover) var(--ease-out);
}

.stack-card__category {
  position: relative;
  margin-top: 10px;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.1vw, 2rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

.stack-card__technologies {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  margin-top: 30px;
}

.stack-card__technologies li {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.35;
  transition: color var(--duration-hover) var(--ease-out);
}

.stack-card__technologies li:not(:last-child)::after {
  content: "·";
  color: var(--accent);
  font-size: 1rem;
  line-height: 1;
}

@media (hover: hover) {
  .stack-card:hover {
    transform: translateY(-7px) scale(1.012);
    border-color: color-mix(in srgb, var(--accent) 72%, var(--border));
    background: var(--surface-hover);
    box-shadow:
      0 22px 54px rgba(0, 0, 0, 0.28),
      inset 0 0 44px color-mix(in srgb, var(--accent-soft) 72%, transparent);
  }

  .stack-card:hover::before,
  .stack-card:hover .stack-card__arrow {
    opacity: 1;
  }

  .stack-card:hover .stack-card__arrow {
    transform: translate(0, 0) rotate(5deg);
  }

  .stack-card:hover .stack-card__number {
    color: var(--accent);
  }

  .stack-card:hover .stack-card__technologies li {
    color: var(--text-primary);
  }
}

@media (max-width: 1000px) {
  .stack__layout {
    grid-template-columns: 1fr;
  }

  .stack__intro {
    max-width: 720px;
  }
}

@media (max-width: 600px) {
  .stack__grid {
    grid-template-columns: 1fr;
  }

  .stack-card {
    min-height: 190px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stack-card:hover {
    transform: none;
  }
}
</style>
