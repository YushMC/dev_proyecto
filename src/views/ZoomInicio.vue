<template>
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
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useCardInfo } from "../composables/useCardInfo";
const { toggleCardInfo, setLink, setTextCardInfo } = useCardInfo();
import Cards from "../components/Cards.vue";

import { useItemsMenu } from "../composables/useItemsMenu";
const {
  setButtonsAndPosition,
  resetItems,
  isItemVisible1,
  isItemVisible2,
  isItemVisible3,
  matrizPosiciones,
  scale,
} = useItemsMenu();

import { useSceenSize } from "../composables/useScreenSize";
const { screenHeight, screenWidth, updateSizes } = useSceenSize();

import { useRouter } from "vue-router";
const router = useRouter();

/* --- INICIA EL CÓDIGO  */

const opacity = ref(0);
//mover la camara al item seleccionado
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
      router.push("/eventos");
      break;

    case 2:
      setButtonsAndPosition(
        matrizPosiciones[1][0],
        matrizPosiciones[1][1],
        false,
        false,
        false
      );
      router.push("/eventos");
      break;
    case 3:
      setButtonsAndPosition(
        matrizPosiciones[2][0],
        matrizPosiciones[2][1],
        false,
        false,
        false
      );
      router.push("/eventos");
      break;
    default:
      toggleItemVisible1();
      resetItems();
  }
};

onMounted(() => {
  opacity.value = "1";
});
onUnmounted(() => {});
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
