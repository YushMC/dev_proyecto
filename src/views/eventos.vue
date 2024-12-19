<template>
  <main class="view_info"></main>
</template>

<script setup>
import { useTripVideo } from "../composables/useTripVideo";
const { isTripVideoVisible, isBackgroundVideoVisible } = useTripVideo();

import { useRouter } from "vue-router";
const router = useRouter();

import { onMounted, onUnmounted } from "vue";
//al montarse
onMounted(() => {
  //logica de la animación
  if (!isTripVideoVisible.value) {
    isTripVideoVisible.value = true;
    isBackgroundVideoVisible.value = false;
  }
  setTimeout(() => {
    isTripVideoVisible.value = false;
    isBackgroundVideoVisible.value = true;
  }, 2000);
});
//realizar un delay para mostrar el video de transicion

router.beforeEach((to, from, next) => {
  // Ejecutar lógica antes de la navegación
  isTripVideoVisible.value = true;
  // Simulamos un retardo usando setTimeout
  setTimeout(() => {
    next(); // Permite continuar con la navegación
  }, 500); // 2 segundos de retraso antes de continuar
});
onUnmounted(() => {});
</script>

<style scoped>
.view_info {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
}
</style>
