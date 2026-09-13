<script setup>
import { portfolio } from '~/data/portfolio'
import { contact } from '~/data/contact'

const year = new Date().getFullYear()

const links = computed(() =>
  [
    contact.github && !contact.github.startsWith('[')
      ? { label: 'GITHUB', href: contact.github }
      : null,
    contact.linkedin && !contact.linkedin.startsWith('[')
      ? { label: 'LINKEDIN', href: contact.linkedin }
      : null,
    contact.email && !contact.email.startsWith('[')
      ? { label: 'E-MAIL', href: `mailto:${contact.email}` }
      : null
  ].filter(Boolean)
)
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <span class="site-footer__name">{{ portfolio.name }}</span>
        <span class="eyebrow">PORTFÓLIO DIGITAL</span>
      </div>

      <nav v-if="links.length" class="site-footer__links" aria-label="Redes e contato">
        <a v-for="link in links" :key="link.label" :href="link.href" class="site-footer__link">
          {{ link.label }}
        </a>
      </nav>

      <span class="site-footer__year">© {{ year }} {{ portfolio.name }} · Todos os direitos reservados</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border-soft);
  padding-block: 32px;
  animation: footer-fade-up var(--duration-enter) var(--ease-out) both;
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

@keyframes footer-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-footer {
    animation: none;
  }
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.site-footer__name {
  font-family: var(--font-display);
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--text-primary);
}

.site-footer__links {
  display: flex;
  gap: 20px;
}

.site-footer__link,
.site-footer__year {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.site-footer__link {
  transition: color var(--duration-hover) var(--ease-out);
}

.site-footer__link:hover {
  color: var(--accent);
}

@media (max-width: 480px) {
  .site-footer__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
