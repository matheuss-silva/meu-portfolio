<script setup>
const props = defineProps({
  words: { type: Array, required: true },
  tag: { type: String, default: 'span' },
  interval: { type: Number, default: 2500 }
})

const index = ref(0)
let timer = null

onMounted(() => {
  if (!import.meta.client || props.words.length < 2) return
  timer = window.setInterval(() => {
    index.value = (index.value + 1) % props.words.length
  }, props.interval)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const currentWord = computed(() => props.words[index.value])
const srLabel = computed(() => props.words.join(', '))
</script>

<template>
  <component :is="tag">
    <span class="visually-hidden">{{ srLabel }}</span>
    <span class="rotating-word__mask" aria-hidden="true">
      <Transition name="rotating-word" mode="out-in">
        <span :key="currentWord" class="rotating-word__item">{{ currentWord }}</span>
      </Transition>
    </span>
  </component>
</template>

<style scoped>
.rotating-word__mask {
  display: block;
  overflow: hidden;
}

.rotating-word__item {
  display: block;
}

.rotating-word-enter-active,
.rotating-word-leave-active {
  transition:
    transform 480ms var(--ease-out),
    opacity 480ms var(--ease-out);
}

.rotating-word-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.rotating-word-enter-to,
.rotating-word-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.rotating-word-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

@media (prefers-reduced-motion: reduce) {
  .rotating-word-enter-active,
  .rotating-word-leave-active {
    transition: none;
  }
}
</style>
