<script setup>
import { portfolio } from '~/data/portfolio'
import StackSection from '~/components/sections/StackSection.vue'

const title = `${portfolio.name} — Portfólio Digital`
const description = portfolio.hero.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://example.com/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: portfolio.name.startsWith('[') ? undefined : portfolio.name,
        jobTitle: portfolio.role.startsWith('[') ? undefined : portfolio.role
      })
    }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <ProjectsSection />
    <AboutSection />
    <StackSection />
    <ContactSection />
  </div>
</template>
