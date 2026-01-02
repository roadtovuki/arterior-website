<template>
  <div class="h-screen relative overflow-hidden">
    <video
      src="/hero.mp4"
      autoplay
      loop
      muted
      playsinline
      class="h-full w-full brightness-50 object-cover"
    ></video>

    <div class="absolute inset-0 flex items-center">
      <UContainer class="w-full">
        <div class="max-w-4xl px-4 sm:px-0 sm:ml-[10%]">
          <h1
            class="text-gray-50 font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
          >
            Arterior
            <br />
            Design with a dose of art
          </h1>

          <div class="flex flex-col sm:flex-row gap-4">
            <UButton size="2xl" class="justify-center">
              Start your project
            </UButton>
            <UButton
              size="2xl"
              variant="outline"
              class="ring-1 ring-white/40 text-white backdrop-blur-xs justify-center"
            >
              View our work
            </UButton>
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>
