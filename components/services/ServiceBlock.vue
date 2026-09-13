<script setup>
import InstitutionalSiteGraphic from './InstitutionalSiteGraphic.vue'
import LandingPageGraphic from './LandingPageGraphic.vue'
import EcommerceGraphic from './EcommerceGraphic.vue'
import MobileAppGraphic from './MobileAppGraphic.vue'
import UiUxGraphic from './UiUxGraphic.vue'

defineProps({
  service: { type: Object, required: true },
  reverse: { type: Boolean, default: false }
})

const graphics = {
  institutional: InstitutionalSiteGraphic,
  landing: LandingPageGraphic,
  ecommerce: EcommerceGraphic,
  mobile: MobileAppGraphic,
  uiux: UiUxGraphic
}
</script>

<template>
  <article class="service-block section-border" :class="{ 'service-block--reverse': reverse }">
    <div class="container service-block__grid">
      <div class="service-block__text">
        <RevealText tag="div" :mask="false" :variant="reverse ? 'right' : 'left'">
          <span class="eyebrow eyebrow--accent">{{ service.number }} — {{ service.category }}</span>
        </RevealText>

        <RevealText tag="div" :delay="60">
          <h3 class="section-title service-block__title">{{ service.title }}</h3>
        </RevealText>

        <RevealText tag="p" :mask="false" :variant="reverse ? 'right' : 'left'" :delay="120" class="service-block__description">{{ service.description }}</RevealText>

        <RevealText tag="div" :mask="false" :variant="reverse ? 'right' : 'left'" :delay="180" class="service-block__benefit">
          <strong>Benefício:</strong> {{ service.benefit }}
        </RevealText>

        <RevealText tag="ul" :mask="false" stagger :delay="240" class="service-block__tags">
          <li v-for="tag in service.tagsActive" :key="tag">
            <AppTag active>{{ tag }}</AppTag>
          </li>
          <li v-for="tag in service.tagsSecondary" :key="tag">
            <AppTag>{{ tag }}</AppTag>
          </li>
        </RevealText>
      </div>

      <RevealText tag="div" :mask="false" :variant="reverse ? 'left' : 'right'" :delay="100" class="service-block__graphic">
        <component :is="graphics[service.graphic]" />
      </RevealText>
    </div>
  </article>
</template>

<style scoped>
.service-block {
  padding-block: clamp(56px, 8vw, 100px);
}

.service-block__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: center;
}

.service-block--reverse .service-block__grid {
  direction: rtl;
}

.service-block--reverse .service-block__text,
.service-block--reverse .service-block__graphic {
  direction: ltr;
}

.service-block__title {
  margin-top: 8px;
  font-size: clamp(2.4rem, 4.4vw, 4rem);
}

.service-block__description {
  margin-top: 20px;
  color: var(--text-secondary);
  max-width: 46ch;
  line-height: 1.7;
}

.service-block__benefit {
  margin-top: 24px;
  padding-left: 18px;
  border-left: 2px solid var(--accent);
  color: var(--text-primary);
  max-width: 46ch;
  line-height: 1.6;
  font-size: 0.95rem;
}

ul.service-block__tags {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 900px) {
  .service-block__grid,
  .service-block--reverse .service-block__grid {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .service-block__graphic {
    order: -1;
  }
}
</style>
