<template>
  <div class="graphic uiux-graphic" aria-hidden="true">
    <div class="uiux-graphic__toolbar">
      <span class="uiux-graphic__tool is-accent" />
      <span class="uiux-graphic__tool" />
      <span class="uiux-graphic__tool" />
      <span class="uiux-graphic__tool" />
    </div>

    <div class="uiux-graphic__canvas">
      <span class="uiux-graphic__block uiux-graphic__block--tall" />
      <span class="uiux-graphic__block uiux-graphic__block--accent" />
      <span class="uiux-graphic__block" />
      <span class="uiux-graphic__cursor" />
    </div>

    <div class="uiux-graphic__swatches">
      <span class="is-accent" />
      <span />
      <span />
      <span />
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

.uiux-graphic__toolbar {
  display: flex;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--border-soft);
}

.uiux-graphic__tool {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid var(--border);
}

.uiux-graphic__tool.is-accent {
  border-color: var(--accent);
  background: var(--accent-soft);
}

.uiux-graphic__canvas {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: clamp(22px, 3vw, 32px);
  background-image: linear-gradient(var(--border-soft) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-soft) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: center;
}

.uiux-graphic__block {
  grid-column: span 2;
  height: 48px;
  border-radius: 6px;
  background: var(--background-soft);
  border: 1px solid var(--border-soft);
}

.uiux-graphic__block--tall {
  grid-row: span 2;
  height: 108px;
}

.uiux-graphic__block--accent {
  border-color: var(--accent);
  background: var(--accent-soft);
}

.uiux-graphic__cursor {
  position: absolute;
  right: 22%;
  bottom: 28%;
  width: 12px;
  height: 12px;
  border: 1.5px solid var(--accent);
  border-radius: 3px;
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.uiux-graphic__swatches {
  display: flex;
  gap: 8px;
  padding: 14px 18px 18px;
  border-top: 1px solid var(--border-soft);
}

.uiux-graphic__swatches span {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--background-soft);
}

.uiux-graphic__swatches span.is-accent {
  background: var(--accent);
  border-color: var(--accent);
}
</style>
