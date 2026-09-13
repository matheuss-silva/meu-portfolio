<script setup>
const props = defineProps({
  tag: { type: String, default: 'div' },
  delay: { type: Number, default: 0 },
  duration: { type: Number, default: 820 },
  mask: { type: Boolean, default: true },
  variant: { type: String, default: 'up' },
  stagger: { type: Boolean, default: false },
  staggerStep: { type: Number, default: 60 },
  threshold: { type: Number, default: 0.14 },
  rootMargin: { type: String, default: '0px 0px -8% 0px' }
})

const { target, isVisible } = useScrollReveal({
  threshold: props.threshold,
  rootMargin: props.rootMargin
})

const motionStyle = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-duration': `${props.duration}ms`,
  '--stagger-step': `${props.staggerStep}ms`,
  transitionDelay: !props.mask && !props.stagger && isVisible.value ? `${props.delay}ms` : '0ms'
}))
</script>

<template>
  <component
    :is="tag"
    ref="target"
    class="reveal-text"
    :class="[
      mask ? 'reveal-mask' : 'reveal',
      `reveal--${variant}`,
      { 'reveal--stagger': stagger, 'is-visible': isVisible }
    ]"
    :style="motionStyle"
  >
    <span v-if="mask" class="reveal-mask__inner" :style="{ transitionDelay: `${delay}ms` }">
      <slot />
    </span>
    <slot v-else />
  </component>
</template>

<style scoped>
.reveal-text {
  display: block;
}
</style>
