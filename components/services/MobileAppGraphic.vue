<template>
  <div class="graphic mobile-graphic" aria-hidden="true">
    <div class="mobile-graphic__phone">
      <span class="mobile-graphic__notch" />
      <div class="mobile-graphic__screen">
        <span class="mobile-graphic__bar mobile-graphic__bar--accent" />
        <span class="mobile-graphic__card" />
        <span class="mobile-graphic__card" />
        <span class="mobile-graphic__card mobile-graphic__card--small" />
      </div>
    </div>

    <div class="mobile-graphic__phone mobile-graphic__phone--front">
      <span class="mobile-graphic__notch" />
      <div class="mobile-graphic__screen">
        <span class="mobile-graphic__notification">
          <span class="mobile-graphic__dot" />
          NOVA NOTIFICAÇÃO
        </span>
        <span class="mobile-graphic__card" />
        <span class="mobile-graphic__card" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.graphic {
  width: 100%;
  border: 1px solid var(--border);
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(28px, 4vw, 44px);
  position: relative;
}

.mobile-graphic {
  gap: 0;
}

.mobile-graphic__phone {
  width: 132px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--background-soft);
  padding: 10px;
  opacity: 0.6;
  transform: translateX(24px) scale(0.94);
}

.mobile-graphic__phone--front {
  position: absolute;
  opacity: 1;
  transform: translateX(-24px) scale(1);
  background: var(--background);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

.mobile-graphic__notch {
  display: block;
  width: 36px;
  height: 5px;
  border-radius: 3px;
  background: var(--border);
  margin: 0 auto 10px;
}

.mobile-graphic__screen {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-graphic__bar {
  height: 8px;
  width: 60%;
  border-radius: 4px;
  background: var(--border-soft);
}

.mobile-graphic__bar--accent {
  background: var(--accent);
  width: 40%;
}

.mobile-graphic__card {
  height: 34px;
  border-radius: 8px;
  background: var(--border-soft);
}

.mobile-graphic__card--small {
  height: 20px;
  width: 70%;
}

.mobile-graphic__notification {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  font-size: 0.5rem;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.mobile-graphic__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}
</style>
