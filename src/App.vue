<script setup>
import Cabecera from "./components/Cabecera.vue";
import Footer from "./components/Footer.vue";
import Trip from "./components/Trip.vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <transition name="fade">
    <Cabecera v-if="route.path !== '/'"></Cabecera>
  </transition>

  <transition name="fade">
    <Trip></Trip>
  </transition>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <div :key="$route.fullPath">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
  <transition name="fade">
    <Footer v-if="route.path !== '/'"></Footer>
  </transition>
</template>

<style scoped>
.content_app {
  width: 100%;
  position: relative;
  display: flex;
}

video {
  transition: all 1s linear;
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
  transition: all 1s ease; /* Suaviza la transición */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0; /* El elemento comienza o termina con opacidad cero */
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1; /* El elemento alcanza o inicia en opacidad completa */
}
</style>
