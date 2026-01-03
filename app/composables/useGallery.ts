export function useGallery(selector: string = '.glightbox') {
  const lightbox = ref<any>(null);

  async function init() {
    if (import.meta.client) {
      const { default: GLightbox } = await import('glightbox');

      lightbox.value = GLightbox({
        selector,
        touchNavigation: true,
        loop: true,
        zoomable: true,
        draggable: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
      });
    }
  }

  function refresh() {
    if (lightbox.value) {
      lightbox.value.reload();
    }
  }

  onMounted(() => {
    init();
  });

  onUnmounted(() => {
    if (lightbox.value) {
      lightbox.value.destroy();
      lightbox.value = null;
    }
  });

  return {
    gallery: lightbox,
    refresh,
  };
}
