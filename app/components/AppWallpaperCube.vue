<script setup lang="ts">
import {
  TextureLoader,
  type Texture,
  LinearMipMapLinearFilter,
  LinearFilter,
  SRGBColorSpace,
} from 'three';

const images = [
  '/wallpaper1.svg',
  '/wallpaper1.svg',
  '/wallpaper1.svg',
  '/wallpaper1.svg',
  '/wallpaper1.svg',
  '/wallpaper1.svg',
];

const textures = ref<Texture[]>([]);
const isLoaded = ref(false);

function loadTextures() {
  const textureLoader = new TextureLoader();

  const loadPromises = images.map((url) => {
    return new Promise<Texture>((resolve) => {
      textureLoader.load(url, (tex) => {
        tex.anisotropy = 16;
        tex.generateMipmaps = true;
        tex.minFilter = LinearMipMapLinearFilter;
        tex.magFilter = LinearFilter;
        tex.colorSpace = SRGBColorSpace;
        resolve(tex);
      });
    });
  });

  Promise.all(loadPromises).then((results) => {
    textures.value = results;
    isLoaded.value = true;
  });
}

onMounted(() => {
  loadTextures();
});
</script>

<template>
  <div class="w-full h-[500px] relative">
    <TresCanvas alpha clear-color="transparent" :clear-alpha="0">
      <TresPerspectiveCamera :position="[4, 0.5, 5]" />
      <OrbitControls :enable-zoom="false" :enable-pan="false" />

      <AppCube :textures="textures" :isLoaded="isLoaded" />

      <TresAmbientLight :intensity="2" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="2" />
    </TresCanvas>
  </div>
</template>
