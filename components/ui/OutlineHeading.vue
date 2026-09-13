<script setup>
defineProps({
  lines: {
    type: Array,
    required: true
    // [{ text: 'EU DESENVOLVO', variant: 'filled' | 'outline' | 'accent' }]
    // or [{ words: ['A', 'B'], variant: 'accent' }] for a rotating line
  },
  tag: { type: String, default: 'h1' },
  size: { type: String, default: 'display' }
})
</script>

<template>
  <component :is="tag" class="outline-heading" :class="`outline-heading--${size}`">
    <RevealText
      v-for="(line, index) in lines"
      :key="index"
      tag="span"
      class="outline-heading__row"
      :delay="index * 90"
    >
      <RotatingWord
        v-if="line.words"
        :words="line.words"
        tag="span"
        class="outline-heading__line"
        :class="{
          'text-outline': line.variant === 'outline',
          'text-accent': line.variant === 'accent'
        }"
      />
      <span
        v-else
        class="outline-heading__line"
        :class="{
          'text-outline': line.variant === 'outline',
          'text-accent': line.variant === 'accent'
        }"
        >{{ line.text }}</span
      >
    </RevealText>
  </component>
</template>

<style scoped>
.outline-heading {
  display: block;
}

.outline-heading__row {
  display: block;
}

.outline-heading__line {
  display: block;
  font-family: var(--font-display);
  text-transform: uppercase;
  overflow-wrap: break-word;
}

.outline-heading--display .outline-heading__line {
  font-size: clamp(2.5rem, 8vw, 9.5rem);
  line-height: 0.95;
  letter-spacing: -0.015em;
}

.outline-heading--section .outline-heading__line {
  font-size: clamp(2.6rem, 6vw, 5.6rem);
  line-height: 0.88;
  letter-spacing: -0.03em;
}
</style>
