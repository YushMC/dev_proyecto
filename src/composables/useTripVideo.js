import { ref } from "vue";

const isTripVideoVisible = ref(false);
const isBackgroundVideoVisible = ref(true);
const isLoadedVideo = ref(false);
const isLoadedVideoBG = ref(false);

export function useTripVideo() {
  const toggleTripVideo = () => {
    isTripVideoVisible.value = !isTripVideoVisible.value; // Alterna visibilidad
  };
  const toggleBackgroundVideo = () => {
    isBackgroundVideoVisible.value = !isBackgroundVideoVisible.value; // Alterna visibilidad
  };
  const toggleLoadedVideo = () => {
    isLoadedVideo.value = !isLoadedVideo.value; // Alterna visibilidad
  };
  const toggleLoadedVideoBG = () => {
    isLoadedVideoBG.value = !isLoadedVideoBG.value; // Alterna visibilidad
  };
  return {
    toggleTripVideo,
    isTripVideoVisible,
    toggleBackgroundVideo,
    isBackgroundVideoVisible,
    toggleLoadedVideo,
    isLoadedVideo,
    toggleLoadedVideoBG,
    isLoadedVideoBG,
  };
}
