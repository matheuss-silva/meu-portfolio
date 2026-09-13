<template>
  <div class="graphic landing-graphic" aria-hidden="true">
    <div class="landing-graphic__wire">
      <span class="landing-graphic__line landing-graphic__line--accent" />
      <span class="landing-graphic__line landing-graphic__line--wide" />
      <span class="landing-graphic__line landing-graphic__line--mid" />

      <button type="button" class="landing-graphic__cta">
        SOLICITAR
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <div class="landing-graphic__dots">
        <span class="is-accent" />
        <span />
        <span />
      </div>
    </div>

    <aside class="landing-graphic__side">
      <div class="landing-graphic__stat">
        <span class="landing-graphic__stat-bar"><i style="width: 82%" /></span>
        <span class="landing-graphic__stat-label">ENGAJAMENTO</span>
      </div>
      <div class="landing-graphic__stat">
        <span class="landing-graphic__stat-bar"><i class="is-accent" style="width: 64%" /></span>
        <span class="landing-graphic__stat-label">CONVERSÃO</span>
      </div>
      <div class="landing-graphic__stat">
        <span class="landing-graphic__stat-bar"><i style="width: 46%" /></span>
        <span class="landing-graphic__stat-label">VELOCIDADE</span>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.graphic {
  width: 100%;
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
}

.landing-graphic {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 0;
}

.landing-graphic__wire {
  padding: clamp(24px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  border-right: 1px solid var(--border-soft);
}

.landing-graphic__line {
  height: 12px;
  border-radius: 4px;
  background: var(--background-soft);
}

.landing-graphic__line--accent {
  width: 45%;
  height: 18px;
  background: var(--accent);
}

.landing-graphic__line--wide {
  width: 88%;
}

.landing-graphic__line--mid {
  width: 60%;
}

.landing-graphic__cta {
  margin-top: 10px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.landing-graphic__dots {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.landing-graphic__dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid var(--border);
}

.landing-graphic__dots span.is-accent {
  background: var(--accent);
  border-color: var(--accent);
}

.landing-graphic__side {
  padding: clamp(20px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.landing-graphic__stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.landing-graphic__stat-bar {
  display: block;
  height: 6px;
  border-radius: 4px;
  background: var(--background-soft);
  overflow: hidden;
}

.landing-graphic__stat-bar i {
  display: block;
  height: 100%;
  background: var(--text-secondary);
  border-radius: 4px;
}

.landing-graphic__stat-bar i.is-accent {
  background: var(--accent);
}

.landing-graphic__stat-label {
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .landing-graphic {
    grid-template-columns: 1fr;
  }

  .landing-graphic__wire {
    border-right: none;
    border-bottom: 1px solid var(--border-soft);
  }
}
</style>
