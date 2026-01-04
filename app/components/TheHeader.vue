<script setup lang="ts">
const { y } = useWindowScroll();
const isScrolled = computed(() => y.value > 50);
</script>

<template>
  <header
    class="h-12 p-6 flex justify-between items-center fixed w-full z-[1]"
    :class="[
      isScrolled
        ? 'bg-neutral-900/80 backdrop-blur-md h-16'
        : 'bg-transparent h-20',
    ]"
  >
    <div class="flex items-center gap-8">
      <div class="text-gray-50">Arterior</div>
      <div class="flex gap-6">
        <ULink
          to="https://www.instagram.com/arterior"
          inactiveClass="text-gray-50"
          class="flex items-center"
        >
          <UIcon name="tabler:brand-instagram" class="h-5 w-5" />
        </ULink>

        <ULink
          to="https://www.instagram.com/arterior"
          inactiveClass="text-gray-50"
          class="flex items-center"
        >
          <UIcon name="tabler:brand-facebook" class="h-5 w-5" />
        </ULink>

        <ULink
          to="https://www.instagram.com/arterior"
          inactiveClass="text-gray-50"
          class="flex items-center"
        >
          <UIcon name="tabler:brand-linkedin" class="h-5 w-5" />
        </ULink>

        <ULink
          to="https://www.instagram.com/arterior"
          inactiveClass="text-gray-50"
          class="flex items-center"
        >
          <UIcon name="tabler:brand-pinterest" class="h-5 w-5" />
        </ULink>
      </div>
    </div>
    <nav class="flex gap-6">
      <ULink to="" inactiveClass="text-gray-50">Projects</ULink>
      <ULink to="" inactiveClass="text-gray-50">Contact</ULink>
      <ULink to="" inactiveClass="text-gray-50">Media</ULink>
      <ULink to="" inactiveClass="text-gray-50">Our clients</ULink>
    </nav>
  </header>
</template>
