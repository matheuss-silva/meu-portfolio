<script setup>
defineProps({
  number: { type: String, default: null }
})
</script>

<template>
  <div class="section-label">
    <span class="section-label__line" aria-hidden="true" />
    <span class="eyebrow eyebrow--accent"><slot /></span>
    <span v-if="number" class="section-label__number">{{ number }}</span>
  </div>
</template>

<style scoped>
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.section-label__line {
  width: 28px;
  height: 1px;
  background: var(--accent);
}

.section-label__number {
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}
</style>
