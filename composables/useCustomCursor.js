export function useCustomCursor() {
  const x = ref(0)
  const y = ref(0)
  const isReady = ref(false)
  const isPointer = ref(false)
  const isTouch = ref(false)

  let raf = null
  let targetX = 0
  let targetY = 0

  const render = () => {
    x.value += (targetX - x.value) * 0.22
    y.value += (targetY - y.value) * 0.22
    raf = requestAnimationFrame(render)
  }

  const onMove = (event) => {
    if (!isReady.value) isReady.value = true
    targetX = event.clientX
    targetY = event.clientY

    const el = event.target
    isPointer.value = Boolean(el?.closest?.('a, button, [role="button"], [data-cursor-hover]'))
  }

  onMounted(() => {
    if (!import.meta.client) return

    isTouch.value = window.matchMedia('(pointer: coarse)').matches
    if (isTouch.value) return

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(render)
  })

  onBeforeUnmount(() => {
    if (!import.meta.client) return
    window.removeEventListener('mousemove', onMove)
    if (raf) cancelAnimationFrame(raf)
  })

  return { x, y, isReady, isPointer, isTouch }
}
