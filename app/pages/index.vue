<template>
  <section class="pt-20 pb-12">
    <div class="max-w-screen-2xl mx-auto px-12 mb-12">
      <h2 class="text-4xl leading-tight font-bold tracking-normal uppercase">
        Spaces We've Shaped
      </h2>
      <p class="leading-none font-normal text-lg">
        We create architecture defined by clarity, purpose, and a deep
        connection to place.
      </p>
    </div>
    <div
      class="max-w-screen-2xl mx-auto px-12 mb-8"
      style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px"
    >
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
    </div>
    <div class="max-w-screen-2xl mx-auto px-12 mb-8 text-center">
      <UButton size="xl" class="bg-gray-950 text-gray-50">Explore more</UButton>
    </div>
  </section>
</template>
