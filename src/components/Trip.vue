<template>
  <div class="container_video_trip" v-if="isTripVideoVisible">
    <div class="content_video_trip">
      <video
        ref="videoPlayer"
        autoplay
        loop
        muted
        playsinline
        preload="metdata"
      >
        <source :src="tripVideo" type="video/webm" />
      </video>
    </div>
    <div class="subtitulo">
      <div v-if="isLoading" class="loading-indicator">Cargando...</div>
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useTripVideo } from "../composables/useTripVideo";
import { useRoute } from "vue-router";
import tripVideo from "../assets/animations/trip.webm";

const route = useRoute();

const { isTripVideoVisible } = useTripVideo();

const numberSelected = ref(0);
const text = ref("");
const videoPlayer = ref(null);
const isPlaying = ref(false);

const setNumber = () => {
  numberSelected.value = Math.floor(Math.random() * 7);
  text.value = texto[numberSelected.value];
};
const playVideo = () => {
  const video = videoPlayer.value;
  if (video) {
    video
      .play()
      .then(() => {
        isPlaying.value = true;
      })
      .catch((err) => {
        console.error("Error al reproducir el video:", err);
      });
  }
};

const texto = [
  "Hola",
  "Esto es una prueba",
  "¿Por que el cielo es azul?",
  "Las noches son oscuras, pero... a que le tenemos miedo si en la oscuridad no hay nada... solo eres tu.",
  "Listo para el viaje?",
  "Frase",
  " :D",
];
watch(
  () => route.path,
  () => {
    setNumber();
  }
);
onMounted(() => {
  setNumber();
  const video = videoPlayer.value;
  if (video && video.paused) {
    video.play().catch(() => {
      console.log("Interacción requerida para iniciar el video.");
    });
  }
});
onUnmounted(() => {
  text.value = "";
});
</script>

<style scoped>
.container_video_trip {
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  z-index: 100;
  background: #000;
}
.content_video_trip {
  width: 100%;
  height: 100%;
}
.content_video_trip video {
  width: 100%;
  height: 100%;
  transform: scale(1.3);
}
.subtitulo {
  width: 100%;
  position: fixed;
  z-index: 101;
  top: 80%;
}
.subtitulo h1 {
  text-align: center;
  color: white;
  font-size: 2rem;
}
@media screen and (max-width: 800px) {
  .content_video_trip video {
    transform: rotate(90deg) scale(4);
  }
  .subtitulo {
    width: 80%;
    left: 10%;
  }
  .subtitulo h1 {
    font-size: 1rem;
  }
}
</style>
