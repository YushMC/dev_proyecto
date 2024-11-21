<script setup>
import { ref, watch } from "vue";
import { RouterView, useRouter, useRoute } from "vue-router";

import { useItemsMenu } from "./composables/useItemsMenu";
const { posicionX, posicionY, scale } = useItemsMenu();

// Variables reactivas para controlar la dirección de la transición
</script>

<template>
  <div class="zoom-background">
    <video
      autoplay
      muted
      loop
      playsinline
      class="video-background"
      :style="{
        transform: `scale(${scale}) translateX(${posicionX}) translateY(${posicionY})`,
      }"
    >
      <source src="./assets/animations/02.mp4" type="video/mp4" />
    </video>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.content_app {
  width: 100%;
  position: relative;
  display: flex;
}

video {
  transition: all 0.15s linear;
}

.zoom-background {
  width: 100%;
  height: 100vh;
  /* Ajusta según sea necesario */
  transition: background-size 0.2s ease;
  background-size: cover;
  background-image: url(./../assets/gui/fondo_2.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
  will-change: transform;
  /* Duración de 0.5 segundos */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* El elemento entra o sale con opacidad cero */
}
</style>
