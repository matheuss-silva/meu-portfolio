<script setup>
import { services } from '~/data/services'
</script>

<template>
  <section id="servicos" class="services">
    <ServiceBlock
      v-for="(service, index) in services"
      :key="service.number"
      :service="service"
      :reverse="index % 2 === 1"
    />
  </section>
</template>
