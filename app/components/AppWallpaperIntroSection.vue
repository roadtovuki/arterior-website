<template>
  <section class="section">
    <UContainer class="mb-12">
      <h2 class="text-xl font-bold uppercase tracking-[0.3em] text-neutral-400">
        Curated Surfaces & Spaces
      </h2>
    </UContainer>

    <UContainer
      class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center mb-16"
    >
      <div class="md:col-span-1">
        <div class="group mb-4">
          <h3
            class="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 group-hover:text-neutral-600 transition-colors"
          >
            01. Materiality & Tactility
          </h3>
          <h4 class="text-2xl font-semibold text-neutral-800 mb-3">
            Physical Narrative
          </h4>
          <p class="text-neutral-600 leading-relaxed">
            Surfaces are the skin of architecture. Our collection uses mineral
            pigments and natural fibers to create textures that evolve as light
            shifts throughout the day.
          </p>
        </div>

        <div class="group">
          <h3
            class="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 group-hover:text-neutral-600 transition-colors"
          >
            02. Spatial Harmony
          </h3>
          <h4 class="text-2xl font-semibold text-neutral-800 mb-3">
            Architectural Resonance
          </h4>
          <p class="text-neutral-600 leading-relaxed">
            We don’t just decorate; we integrate. Our patterns align with
            structural lines to create a seamless dialogue between the wall and
            the volume it encloses.
          </p>
        </div>
      </div>
      <AppWallpaperCube class="md:col-span-2" />
    </UContainer>

    <UContainer class="text-center">
      <UButton size="xl" variant="outline">View Collection</UButton>
    </UContainer>
  </section>
</template>
