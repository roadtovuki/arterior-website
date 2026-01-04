<template>
  <footer
    class="bg-neutral-900 text-neutral-50 pt-20 pb-10 border-t border-neutral-800"
  >
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div class="md:col-span-1">
          <h2 class="text-2xl font-bold uppercase tracking-tighter mb-6">
            Arterior
          </h2>
          <p class="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Designing spaces with a dose of art. We create architecture defined
            by clarity, purpose, and a deep connection to place.
          </p>
        </div>

        <div>
          <h4
            class="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6"
          >
            Contact
          </h4>
          <ul class="space-y-4 text-sm text-neutral-300">
            <li class="flex items-center gap-3">
              <UIcon name="i-heroicons-envelope" class="text-neutral-500" />
              studio@arterior.ba
            </li>
            <li class="flex items-center gap-3">
              <UIcon name="i-heroicons-phone" class="text-neutral-500" />
              +387 33 000 000
            </li>
            <li class="flex items-center gap-3">
              <UIcon name="i-heroicons-map-pin" class="text-neutral-500" />
              Sarajevo, BiH
            </li>
          </ul>
        </div>

        <div>
          <h4
            class="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6"
          >
            Studio
          </h4>
          <ul class="space-y-4 text-sm text-neutral-300">
            <li>
              <NuxtLink to="/about" class="hover:text-white transition-colors"
                >Our Story</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="hover:text-white transition-colors"
                >Portfolio</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="hover:text-white transition-colors"
                >Wallcoverings</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="hover:text-white transition-colors italic"
                >Careers</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4
            class="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6"
          >
            Follow Us
          </h4>
          <div class="flex gap-5">
            <UButton
              icon="i-simple-icons-instagram"
              variant="ghost"
              square
              to="https://instagram.com"
              target="_blank"
            />
            <UButton
              icon="i-simple-icons-linkedin"
              variant="ghost"
              square
              to="https://linkedin.com"
              target="_blank"
            />
            <UButton
              icon="i-simple-icons-pinterest"
              variant="ghost"
              square
              to="https://pinterest.com"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <div
        class="pt-10 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p class="text-neutral-600 text-[10px] uppercase tracking-widest">
          &copy; {{ new Date().getFullYear() }} Arterior Architecture & Design.
          All rights reserved.
        </p>
        <div class="flex gap-8">
          <NuxtLink
            to="/privacy"
            class="text-neutral-600 text-[10px] uppercase tracking-widest hover:text-neutral-400"
            >Privacy Policy</NuxtLink
          >
          <NuxtLink
            to="/terms"
            class="text-neutral-600 text-[10px] uppercase tracking-widest hover:text-neutral-400"
            >Terms of Service</NuxtLink
          >
        </div>
      </div>
    </UContainer>
  </footer>
</template>
