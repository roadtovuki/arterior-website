<script setup lang="ts">
import { useLoop } from '@tresjs/core';

const props = defineProps<{
  textures: any[];
  isLoaded: boolean;
}>();

const cubeRef = shallowRef();
const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (cubeRef.value && props.isLoaded) {
    cubeRef.value.rotation.x += delta * 0.4;
    cubeRef.value.rotation.y += delta * 0.3;
    cubeRef.value.rotation.z += delta * 0.3;
  }
});
</script>

<template>
  <TresMesh v-if="isLoaded" ref="cubeRef">
    <TresBoxGeometry :args="[3.2, 3.2, 3.2]" />
    <TresMeshStandardMaterial
      v-for="(texture, index) in textures"
      :key="index"
      :attach="`material-${index}`"
      :map="texture"
      :roughness="0.5"
      :metalness="0.0"
    />
  </TresMesh>
</template>
