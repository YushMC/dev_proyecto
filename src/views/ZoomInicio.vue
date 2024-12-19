<template>
  <div class="zoom-background">
    <transition name="fade">
      <video
        autoplay
        muted
        loop
        playsinline
        class="video-background"
        preload="metadata"
        :style="{
          transform: `scale(${scale}) translateX(${posicionX}) translateY(${posicionY})`,
        }"
        v-if="isBackgroundVideoVisible"
      >
        <source src="../assets/animations/02.mp4" type="video/mp4" />
      </video>
    </transition>
    <div class="menu">
      <button
        id="izquierda"
        :style="{ opacity: `${opacity}` }"
        @click="ubicacion(2)"
        v-if="isItemVisible2"
      >
        <img src="./../assets/gui/estrella.png" alt="" />
        <h2>Eventos</h2>
      </button>
      <button
        id="arriba"
        :style="{ opacity: `${opacity}` }"
        @click="ubicacion(1)"
        v-if="isItemVisible1"
      >
        <img src="./../assets/gui/estrella.png" alt="" />
        <h2>Salon de Belleza</h2>
      </button>
      <button
        id="derecha"
        :style="{ opacity: `${opacity}` }"
        @click="ubicacion(3)"
        v-if="isItemVisible3"
      >
        <img src="./../assets/gui/estrella.png" alt="" />
        <h2>Renta de Autos</h2>
      </button>
      <Cards></Cards>
    </div>
  </div>
</template>

<script setup>
/**
 * Importaciones: primero las librerías externas, luego los composables,
 * y finalmente los componentes locales.
 */
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useTripVideo } from "../composables/useTripVideo";
import { useItemsMenu } from "../composables/useItemsMenu";
import { useSceenSize } from "../composables/useScreenSize";
import Cards from "../components/Cards.vue";

/**
 * Composables: Desestructuración de funciones y valores.
 * Los agrupamos según su origen para mantener el orden.
 */
const { isBackgroundVideoVisible, isTripVideoVisible } = useTripVideo();
const {
  setButtonsAndPosition,
  resetItems,
  isItemVisible1,
  isItemVisible2,
  isItemVisible3,
  matrizPosiciones,
  scale,
  posicionX,
  posicionY,
  setScale,
} = useItemsMenu();
const { screenHeight, screenWidth, updateSizes } = useSceenSize();

/**
 * Variables reactivas y router.
 */
const opacity = ref(0);
const router = useRouter();

/**
 * Función para manejar la ubicación del item seleccionado.
 */
const ubicacion = (valor) => {
  switch (valor) {
    case 1:
      setButtonsAndPosition(
        matrizPosiciones[0][0],
        matrizPosiciones[0][1],
        false,
        false,
        false
      );
      isTripVideoVisible.value = true;

      setTimeout(() => {
        router.push("/eventos");
      }, 500);
      break;

    case 2:
      setButtonsAndPosition(
        matrizPosiciones[1][0],
        matrizPosiciones[1][1],
        false,
        false,
        false
      );
      isTripVideoVisible.value = true;

      setTimeout(() => {
        router.push("/eventos");
      }, 500);
      break;

    case 3:
      setButtonsAndPosition(
        matrizPosiciones[2][0],
        matrizPosiciones[2][1],
        false,
        false,
        false
      );
      isTripVideoVisible.value = true;

      setTimeout(() => {
        router.push("/eventos");
      }, 500);
      break;

    default:
      resetItems();
  }
};

/**
 * Función para actualizar el tamaño de la pantalla.
 */
const updateScrrenSize = () => {
  updateSizes();
  updateScaleVideo();
};

/**
 * Función para ajustar el escalado del video según el tamaño de la pantalla.
 */
const updateScaleVideo = () => {
  // Para pantallas grandes
  if (screenWidth.value > 1500) {
    setScale(0.7);
  }
  // Pantallas intermedias
  if (screenWidth.value < 1500 && screenWidth.value >= 1000) {
    setScale(0.5);
  }
  // Nest Hub Max
  if (screenWidth.value == 1280 && screenHeight.value == 800) {
    setScale(0.6);
  }
  // iPads
  if (
    screenHeight.value < 1400 &&
    screenHeight.value > 700 &&
    screenWidth.value < 1100
  ) {
    setScale(0.9);
  }
  // Surface Duo
  if (screenHeight.value <= 750 && screenWidth.value >= 500) {
    setScale(0.5);
  }
  // Pantallas pequeñas
  if (screenWidth.value < 500 && screenWidth.value > 370) {
    setScale(0.6);
    posicionX.value = "0.7%";
    matrizPosiciones[3][0] = "0.7%";
  }
  if (screenWidth.value <= 370) {
    setScale(0.5);
  }
  if (screenWidth.value <= 500) {
    posicionX.value = "0.7%";
    matrizPosiciones[3][0] = "0.7%";
  }
};
// Crear una función sleep
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
/**
 * Lifecycle Hooks
 */
onMounted(() => {
  resetItems();
  updateScaleVideo();
  window.addEventListener("resize", updateScrrenSize);
  setTimeout(() => {
    opacity.value = "1";
  }, 500);
  if (!isTripVideoVisible.value) {
    isTripVideoVisible.value = true;
    isBackgroundVideoVisible.value = false;
  }
  setTimeout(() => {
    isTripVideoVisible.value = false;
    isBackgroundVideoVisible.value = true;
  }, 2000);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScrrenSize);
});
</script>

<style scoped>
#boton_inicio {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
}

video {
  transition: all 0.3s linear;
}
.menu {
  width: 100%;
}
.zoom-background {
  width: 100%;
  height: 100dvh;
  /* Ajusta según sea necesario */
  transition: background-size 0.2s ease;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
}

button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s linear !important;

  border: none;
  border-radius: 10px;
  padding: 1%;
  background: none;
}
button:hover {
  transform: scale(1.2) !important;
}
button > img {
  filter: drop-shadow(-2px 0px 16px #ffffff94);
  width: 250px;
  animation: girar 30s infinite linear;
}

button h2 {
  position: absolute;
  color: #fff;
  text-shadow: -4px 0px 5px rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 0.5%;
  backdrop-filter: blur(1.25px);
  z-index: 90;
}
@keyframes girar {
  from {
    transform: rotate(0deg) translateY(0);
  }
  to {
    transform: rotate(360deg) translateY(-10px);
  }
}
@keyframes respiracion_letras {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}
#izquierda {
  top: 60%;
  left: 20%;
}

#derecha {
  top: 60%;
  right: 20%;
}

#arriba {
  top: 45%;
  left: 42%;
}
@media screen and (max-width: 1370px) and (min-width: 1000px) {
  #arriba {
    left: 40%;
    top: 40%;
  }
  #izquierda {
    left: 15%;
  }
  #derecha {
    right: 15%;
  }
  #izquierda,
  #derecha {
    top: 55%;
  }
}
@media screen and (max-width: 600px) {
  .menu {
    position: fixed !important ;
    bottom: 1%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
    padding: 0;
    margin: 0 2%;
  }
  button {
    position: relative;
    width: 100%;
    margin: 0;
    overflow: hidden;
  }
  button > img {
    width: 100%;
    filter: drop-shadow(-2px 0px 5px #ffffff94);
  }
  button > h2 {
    font-size: 1em;
  }
  #derecha {
    top: 0;
    right: 0;
  }
  #izquierda {
    top: 0;
    left: 0;
  }
  #arriba {
    top: 0;
    left: 0;
  }
}
</style>
