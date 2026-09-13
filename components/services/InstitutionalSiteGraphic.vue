<template>
  <div class="graphic browser-graphic" aria-hidden="true">
    <div class="browser-graphic__bar">
      <span class="browser-graphic__dot" />
      <span class="browser-graphic__dot" />
      <span class="browser-graphic__dot" />
      <span class="browser-graphic__url" />
      <span class="browser-graphic__live">
        <span class="browser-graphic__live-dot" />
        AO VIVO
      </span>
    </div>

    <div class="browser-graphic__body">
      <div class="browser-graphic__content">
        <span class="browser-graphic__line browser-graphic__line--accent" />
        <span class="browser-graphic__line browser-graphic__line--wide" />
        <span class="browser-graphic__line browser-graphic__line--mid" />
        <span class="browser-graphic__line browser-graphic__line--accent-sm" />
      </div>
      <div class="browser-graphic__panel">
        <div class="browser-graphic__chart">
          <span style="height: 30%" />
          <span style="height: 55%" />
          <span style="height: 40%" />
          <span class="is-accent" style="height: 78%" />
        </div>
        <span class="browser-graphic__panel-label">DESEMPENHO</span>
      </div>
    </div>

    <div class="browser-graphic__footer">
      <span class="browser-graphic__node is-accent" />
      <span class="browser-graphic__node" />
      <span class="browser-graphic__node" />
      <span class="browser-graphic__node" />
    </div>
  </div>
</template>

<style scoped>
.graphic {
  width: 100%;
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
}

.browser-graphic__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-soft);
}

.browser-graphic__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border);
}

.browser-graphic__url {
  flex: 1;
  height: 8px;
  margin-left: 12px;
  border-radius: 4px;
  background: var(--background-soft);
  max-width: 140px;
}

.browser-graphic__live {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.browser-graphic__live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 6px var(--accent);
}

.browser-graphic__body {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
  padding: 24px;
}

.browser-graphic__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}

.browser-graphic__line {
  height: 10px;
  border-radius: 4px;
  background: var(--background-soft);
}

.browser-graphic__line--accent {
  width: 55%;
  background: var(--accent);
  height: 14px;
}

.browser-graphic__line--wide {
  width: 92%;
}

.browser-graphic__line--mid {
  width: 70%;
}

.browser-graphic__line--accent-sm {
  width: 35%;
  background: var(--accent);
  opacity: 0.6;
}

.browser-graphic__panel {
  border: 1px solid var(--border-soft);
  border-radius: 6px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.browser-graphic__chart {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 64px;
}

.browser-graphic__chart span {
  flex: 1;
  background: var(--background-soft);
  border-radius: 2px;
}

.browser-graphic__chart span.is-accent {
  background: var(--accent);
}

.browser-graphic__panel-label {
  margin-top: 10px;
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.browser-graphic__footer {
  display: flex;
  gap: 10px;
  padding: 16px 24px 20px;
  border-top: 1px solid var(--border-soft);
}

.browser-graphic__node {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--border);
}

.browser-graphic__node.is-accent {
  border-color: var(--accent);
  background: var(--accent-soft);
}

@media (max-width: 640px) {
  .browser-graphic__body {
    grid-template-columns: 1fr;
  }
}
</style>
