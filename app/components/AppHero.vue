<template>
  <div class="h-screen relative">
    <video
      src="/hero.mp4"
      autoplay
      loop
      muted
      class="h-full w-full brightness-50 object-cover"
    ></video>
    <div class="absolute top-2/5 left-1/8">
      <h1 class="text-gray-50 font-bold text-6xl mb-6">
        Arterior
        <br />
        Design with a dose of art
      </h1>
      <div class="flex gap-4">
        <UButton size="xl">Start your project</UButton>
        <UButton size="xl" variant="outline">View our work</UButton>
      </div>
    </div>
  </div>
</template>
