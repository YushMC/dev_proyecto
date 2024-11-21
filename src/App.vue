<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { RouterView, useRouter, useRoute } from "vue-router";

import { useItemsMenu } from "./composables/useItemsMenu";
const { posicionX, posicionY, scale, setScale, matrizPosiciones} = useItemsMenu();

import { useSceenSize } from "./composables/useScreenSize";
const {screenHeight, screenWidth, updateSizes} = useSceenSize();

const updateScrrenSize = () => {
  updateSizes();
  updateScaleVideo();
};
const updateScaleVideo = () => {
  //mayores a este tamaño
  if (screenWidth.value > 1500) {
    setScale(0.7);
  }
  if (screenWidth.value < 1500 && screenWidth.value >= 1000) {
    setScale(0.5);
  }
  //Nest Hub Max
  if(screenWidth.value == 1280 && screenHeight.value == 800){
    setScale(0.6);
  }
  //Ipads
  if ((screenHeight.value < 1400 && screenHeight.value > 700) && screenWidth.value < 1100) {
    setScale(0.9);
  }
  //surface Duo
  if (screenHeight.value <= 750 && screenWidth.value >= 500) {
    setScale(0.5);
  }
  if(screenWidth.value < 500 && screenWidth.value >370){
    setScale(0.6);
    
    posicionX.value = "0.7%";
    matrizPosiciones[3][0] = "0.7%";
  }
  
  if(screenWidth.value <= 370){
    setScale(0.5);
  }
  if(screenWidth.value <=500){
    posicionX.value = "0.7%";
    matrizPosiciones[3][0] = "0.7%";
  }
};
onMounted(() => {
  updateScaleVideo();
  window.addEventListener("resize", updateScrrenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScrrenSize);
});
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
  transition: all 0.2s linear;
  /* Duración de 0.5 segundos */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* El elemento entra o sale con opacidad cero */
}
</style>
