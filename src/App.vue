<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

// import Prueba from './components/prueba.vue';
const isVisibleVideoMenu = ref(false)

</script>

<template>
  <div class="content_app">
    <video autoplay muted loop playsinline class="video-background" v-if="isVisibleVideoMenu">
      <source src="./assets/animations/02.mp4" type="video/mp4" />
    </video>
    <router-view>

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
  width: 100%;
  position: fixed;
  transition: all 0.3s linear;
  z-index: 10;
  transform: scale(1.05);
}
</style>
