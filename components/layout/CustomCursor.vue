<script setup>
const { x, y, isReady, isPointer, isTouch } = useCustomCursor()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="!isTouch"
      class="custom-cursor"
      :class="{ 'is-ready': isReady, 'is-pointer': isPointer }"
      :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
      aria-hidden="true"
    >
      <span class="custom-cursor__ring" />
      <span class="custom-cursor__dot" />
    </div>
  </Teleport>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 200ms ease;
}

.custom-cursor.is-ready {
  opacity: 1;
}

.custom-cursor__ring {
  position: absolute;
  top: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--accent);
  transition:
    width 200ms var(--ease-out),
    height 200ms var(--ease-out),
    top 200ms var(--ease-out),
    left 200ms var(--ease-out),
    background 200ms var(--ease-out);
}

.custom-cursor__dot {
  position: absolute;
  top: -2px;
  left: -2px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

.custom-cursor.is-pointer .custom-cursor__ring {
  width: 52px;
  height: 52px;
  top: -26px;
  left: -26px;
  background: var(--accent-soft);
}

@media (max-width: 900px) {
  .custom-cursor {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .custom-cursor__ring {
    transition: none;
  }
}
</style>
