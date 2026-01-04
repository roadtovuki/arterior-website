<script setup lang="ts">
const testimonials = [
  {
    quote:
      'Arterior transformed our living space into a gallery. Their attention to material detail is unparalleled.',
    author: 'Elena Petrović',
    role: 'Private Homeowner',
  },
  {
    quote:
      "The 'dose of art' approach is what sets them apart. They didn't just design a building; they created a narrative.",
    author: 'Marko Kovač',
    role: 'Creative Director',
  },
  {
    quote:
      'Professionalism combined with a deep understanding of raw materials. The results exceeded all expectations.',
    author: 'Adnan Begić',
    role: 'Entrepreneur',
  },
  {
    quote:
      "Their wallpaper collection added a layer of depth to our office that we couldn't find anywhere else.",
    author: 'Sara Jovanović',
    role: 'Studio Founder',
  },
  {
    quote:
      'Minimalism at its finest. Every line and every shadow in our new home was carefully considered.',
    author: 'Damir Hadžić',
    role: 'Architectural Enthusiast',
  },
  {
    quote:
      'A seamless journey from initial sketches to the final curated space. Truly a bespoke experience.',
    author: 'Lejla Omerović',
    role: 'Real Estate Developer',
  },
];
</script>

<template>
  <section class="section bg-neutral-100/50">
    <UContainer class="mb-12">
      <h2 class="text-xl font-bold uppercase tracking-[0.3em] text-neutral-400">
        Client stories
      </h2>
    </UContainer>

    <UContainer
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
    >
      <UCard
        v-for="(item, index) in testimonials"
        :key="index"
        :ui="{
          root: 'h-full flex flex-col group transition-colors duration-300 ring-neutral-300 hover:ring-neutral-400',
          body: 'flex-grow flex flex-col',
        }"
      >
        <UIcon
          name="i-heroicons-chat-bubble-bottom-center-text"
          class="size-6 text-neutral-200 transition-colors duration-300 group-hover:text-neutral-500"
        />

        <p
          class="flex-grow text-neutral-600 leading-relaxed italic text-sm md:text-base mb-6"
        >
          "{{ item.quote }}"
        </p>

        <div class="mt-auto">
          <h4
            class="font-bold uppercase tracking-widest text-xs text-neutral-900"
          >
            {{ item.author }}
          </h4>
          <p class="text-neutral-400 text-xs uppercase tracking-tighter">
            {{ item.role }}
          </p>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>
