export function useHorizontalScroll() {
  const track = ref(null)
  const currentIndex = ref(0)
  const isDragging = ref(false)
  const isAnimating = ref(false)
  const canScrollPrev = computed(() => currentIndex.value > 0)
  const canScrollNext = computed(() => currentIndex.value < getSlides().length - 1)

  let animationFrame = 0
  let scrollFrame = 0
  let resizeObserver
  let dragStartX = 0
  let dragStartScroll = 0
  let lastPointerX = 0
  let lastPointerTime = 0
  let dragVelocity = 0
  let dragged = false
  let suppressClick = false
  let lockActiveIndex = false
  let prefersReducedMotion = false

  const getSlides = () =>
    track.value ? Array.from(track.value.querySelectorAll('[data-carousel-slide]')) : []

  const clampIndex = (index) => Math.max(0, Math.min(index, getSlides().length - 1))

  const getSlideOffset = (slide) => {
    if (!track.value || !slide) return 0

    const trackRect = track.value.getBoundingClientRect()
    const slideRect = slide.getBoundingClientRect()
    return slideRect.left - trackRect.left + track.value.scrollLeft
  }

  const getClosestIndex = () => {
    if (!track.value) return 0

    return getSlides().reduce((closest, slide, index) => {
      const distance = Math.abs(getSlideOffset(slide) - track.value.scrollLeft)
      return distance < closest.distance ? { index, distance } : closest
    }, { index: 0, distance: Number.POSITIVE_INFINITY }).index
  }

  const updateCurrentIndex = () => {
    currentIndex.value = getClosestIndex()
  }

  const cancelAnimation = () => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
    animationFrame = 0
    isAnimating.value = false
    lockActiveIndex = false
  }

  const animateToPosition = (target, duration = 620, keepTargetHighlighted = false) => {
    if (!track.value) return

    cancelAnimation()

    const maxScroll = Math.max(0, track.value.scrollWidth - track.value.clientWidth)
    const safeTarget = Math.max(0, Math.min(target, maxScroll))
    const start = track.value.scrollLeft
    const distance = safeTarget - start

    if (prefersReducedMotion || Math.abs(distance) < 1) {
      track.value.scrollLeft = safeTarget
      updateCurrentIndex()
      return
    }

    const startedAt = performance.now()
    isAnimating.value = true
    lockActiveIndex = keepTargetHighlighted

    const animate = (now) => {
      if (!track.value) return cancelAnimation()

      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      track.value.scrollLeft = start + distance * eased

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      track.value.scrollLeft = safeTarget
      animationFrame = 0
      isAnimating.value = false
      lockActiveIndex = false
      updateCurrentIndex()
    }

    animationFrame = requestAnimationFrame(animate)
  }

  const scrollToIndex = (index, smooth = true) => {
    if (!track.value) return

    const safeIndex = clampIndex(index)
    const slide = getSlides()[safeIndex]
    if (!slide) return

    currentIndex.value = safeIndex
    const target = getSlideOffset(slide)

    if (!smooth) {
      cancelAnimation()
      track.value.scrollLeft = target
      return
    }

    animateToPosition(target, 620, true)
  }

  const scrollNext = () => scrollToIndex(currentIndex.value + 1)
  const scrollPrev = () => scrollToIndex(currentIndex.value - 1)

  const onScroll = () => {
    if (lockActiveIndex) return
    if (scrollFrame) cancelAnimationFrame(scrollFrame)
    scrollFrame = requestAnimationFrame(updateCurrentIndex)
  }

  const onPointerDown = (event) => {
    if (!track.value || event.pointerType === 'touch' || event.button !== 0) return

    cancelAnimation()
    isDragging.value = true
    dragged = false
    dragVelocity = 0
    dragStartX = event.clientX
    dragStartScroll = track.value.scrollLeft
    lastPointerX = event.clientX
    lastPointerTime = performance.now()
    track.value.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!isDragging.value || !track.value) return

    const distance = event.clientX - dragStartX
    const now = performance.now()
    const elapsed = Math.max(1, now - lastPointerTime)
    const instantVelocity = (lastPointerX - event.clientX) / elapsed

    dragVelocity = dragVelocity * 0.55 + instantVelocity * 0.45
    lastPointerX = event.clientX
    lastPointerTime = now

    if (Math.abs(distance) > 5) dragged = true
    track.value.scrollLeft = dragStartScroll - distance
  }

  const endDrag = (event) => {
    if (!isDragging.value || !track.value) return

    isDragging.value = false
    suppressClick = dragged
    track.value.releasePointerCapture?.(event.pointerId)

    if (dragged && Math.abs(dragVelocity) > 0.08) {
      const projectedDistance = dragVelocity * 520
      const duration = Math.min(900, Math.max(420, Math.abs(projectedDistance) * 0.75))
      animateToPosition(track.value.scrollLeft + projectedDistance, duration)
    } else {
      updateCurrentIndex()
    }

    window.setTimeout(() => {
      suppressClick = false
    }, 0)
  }

  const onClickCapture = (event) => {
    if (!suppressClick) return
    event.preventDefault()
    event.stopPropagation()
  }

  const onKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollPrev()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollNext()
    }
  }

  onMounted(() => {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateCurrentIndex)
    })

    if (track.value) resizeObserver.observe(track.value)
    nextTick(updateCurrentIndex)
  })

  onBeforeUnmount(() => {
    cancelAnimation()
    if (scrollFrame) cancelAnimationFrame(scrollFrame)
    resizeObserver?.disconnect()
  })

  return {
    track,
    currentIndex,
    isDragging,
    isAnimating,
    canScrollPrev,
    canScrollNext,
    scrollToIndex,
    scrollNext,
    scrollPrev,
    onScroll,
    onPointerDown,
    onPointerMove,
    endDrag,
    onClickCapture,
    onKeydown
  }
}
