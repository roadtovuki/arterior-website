<script setup lang="ts">
const services = [
  {
    title: 'Architectural Design',
    description:
      'Comprehensive design from concept to execution. We focus on functionality, aesthetics, and creating a dialogue between the structure and its surroundings.',
    icon: 'i-heroicons-home-modern',
  },
  {
    title: 'Interior Curation',
    description:
      'Crafting interior environments that reflect the occupant’s character, with a special emphasis on bespoke furniture and spatial flow.',
    icon: 'i-heroicons-paint-brush',
  },
  {
    title: 'Custom Wallcoverings',
    description:
      'We design and produce unique wall surfaces that blur the line between architecture and fine art, utilizing mineral pigments and natural fibers.',
    icon: 'i-heroicons-sparkles',
  },
];

const steps = [
  {
    title: 'Spatial Analysis',
    description:
      'We begin by listening to your needs and analyzing the unique potential of the site and its natural light.',
  },
  {
    title: 'Design Narrative',
    description:
      'Development of the initial architectural vision and the "dose of art" that will define the project.',
  },
  {
    title: 'Technical Precision',
    description:
      'Rigorous planning of every detail, from structural engineering to the tactile quality of surface materials.',
  },
  {
    title: 'Curated Realization',
    description:
      'Full project supervision to ensure the final space is delivered exactly as envisioned, ready for habitation.',
  },
];
</script>

<template>
  <section class="section">
    <UContainer class="mb-12">
      <h2
        class="text-xl font-bold uppercase tracking-[0.3em] text-neutral-400 mb-12"
      >
        Our Services
      </h2>
    </UContainer>

    <UContainer class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
      <UCard
        v-for="service in services"
        :key="service.title"
        variant="outline"
        class="border border-stone-100 hover:ring-stone-400 transition-all duration-700 group flex flex-col items-center"
      >
        <UIcon
          :name="service.icon"
          class="size-6 mb-8 text-neutral-200 group-hover:text-neutral-500 transition-colors duration-700"
        />
        <h3 class="text-md font-bold mb-4 uppercase tracking-tight">
          {{ service.title }}
        </h3>
        <p class="text-neutral-500 leading-relaxed">
          {{ service.description }}
        </p>
      </UCard>
    </UContainer>

    <UContainer>
      <UStepper :items="steps" size="md" />
    </UContainer>
  </section>
</template>
