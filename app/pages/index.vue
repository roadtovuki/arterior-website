<template>
  <AppFeaturedInSection />
  <section class="section">
    <UContainer class="mb-12">
      <h2 class="text-4xl font-bold uppercase">Spaces We've Shaped</h2>
      <p class="text-lg">
        We create architecture defined by clarity, purpose, and a deep
        connection to place.
      </p>
    </UContainer>
    <UContainer class="grid grid-cols-3 gap-5 mb-12">
      <NuxtImg
        width="600"
        height="400"
        fit="cover"
        format="webp"
        src="/recent1.jpg"
      />
      <NuxtImg
        width="600"
        height="400"
        fit="cover"
        format="webp"
        src="/recent2.jpg"
      />
      <NuxtImg
        width="600"
        height="400"
        fit="cover"
        format="webp"
        src="/recent3.jpg"
      />
    </UContainer>
    <UContainer class="text-center">
      <UButton size="xl">Explore more</UButton>
    </UContainer>
  </section>
</template>
