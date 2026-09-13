<template>
  <div class="graphic ecommerce-graphic" aria-hidden="true">
    <div class="ecommerce-graphic__bar">
      <span class="ecommerce-graphic__store" />
      <span class="ecommerce-graphic__cart">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="ecommerce-graphic__badge" />
      </span>
    </div>

    <div class="ecommerce-graphic__products">
      <div class="ecommerce-graphic__product">
        <span class="ecommerce-graphic__thumb" />
        <span class="ecommerce-graphic__line" />
      </div>
      <div class="ecommerce-graphic__product is-active">
        <span class="ecommerce-graphic__thumb" />
        <span class="ecommerce-graphic__line ecommerce-graphic__line--accent" />
        <button type="button" class="ecommerce-graphic__button">ADICIONAR</button>
      </div>
      <div class="ecommerce-graphic__product">
        <span class="ecommerce-graphic__thumb" />
        <span class="ecommerce-graphic__line" />
      </div>
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

.ecommerce-graphic__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-bottom: 1px solid var(--border-soft);
}

.ecommerce-graphic__store {
  width: 72px;
  height: 10px;
  border-radius: 4px;
  background: var(--background-soft);
}

.ecommerce-graphic__cart {
  position: relative;
  display: inline-flex;
  color: var(--text-secondary);
}

.ecommerce-graphic__badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}

.ecommerce-graphic__products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: clamp(20px, 3vw, 28px);
}

.ecommerce-graphic__product {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border: 1px solid var(--border-soft);
  border-radius: 6px;
}

.ecommerce-graphic__product.is-active {
  border-color: var(--accent);
}

.ecommerce-graphic__thumb {
  aspect-ratio: 1;
  border-radius: 4px;
  background: var(--background-soft);
}

.ecommerce-graphic__line {
  height: 8px;
  width: 70%;
  border-radius: 4px;
  background: var(--background-soft);
}

.ecommerce-graphic__line--accent {
  background: var(--accent);
  width: 50%;
}

.ecommerce-graphic__button {
  margin-top: 4px;
  padding: 8px;
  border-radius: 4px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

@media (max-width: 640px) {
  .ecommerce-graphic__products {
    grid-template-columns: 1fr;
  }
}
</style>
