<script setup lang="ts">
useGallery();

const projects = [
  {
    name: 'The Concrete House',
    image: '/recent1.jpg',
    area: '240',
    location: 'Sarajevo, BiH',
    type: 'Residential',
    description: 'A minimalist exploration of raw materials and natural light.',
  },
  {
    name: 'The Concrete House',
    image: '/recent2.jpg',
    area: '240',
    location: 'Sarajevo, BiH',
    type: 'Residential',
    description: 'A minimalist exploration of raw materials and natural light.',
  },
  {
    name: 'The Concrete House',
    image: '/recent3.jpg',
    area: '240',
    location: 'Sarajevo, BiH',
    type: 'Residential',
    description: 'A minimalist exploration of raw materials and natural light.',
  },

  // Add other projects here...
];
</script>

<template>
  <section class="section bg-neutral-100/50">
    <UContainer class="mb-12">
      <h2 class="text-xl font-bold uppercase tracking-[0.3em] text-neutral-400">
        Spaces We've Shaped
      </h2>
    </UContainer>

    <UContainer
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
    >
      <UCard
        v-for="project in projects"
        :key="project.name"
        as="a"
        variant="outline"
        class="group cursor-pointer glightbox"
        :href="project.image"
        :data-glightbox="`description: .custom-desc`"
      >
        <div class="overflow-hidden">
          <NuxtImg
            :src="project.image"
            class="transition-transform duration-700 group-hover:scale-105"
            width="600"
            height="400"
            fit="cover"
            format="webp"
          />
        </div>

        <template #footer>
          <div class="custom-desc">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-lg uppercase tracking-wider font-medium">
                  {{ project.name }}
                </h4>
                <p class="text-sm text-neutral-500 uppercase tracking-wide">
                  {{ project.location }}
                </p>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium">{{ project.area }} m²</p>
                <p class="text-xs text-neutral-400 uppercase tracking-tighter">
                  {{ project.type }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </UCard>
    </UContainer>

    <UContainer class="text-center">
      <UButton size="xl" variant="outline">Explore Portfolio</UButton>
    </UContainer>
  </section>
</template>
