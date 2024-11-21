<template>
  <div>
    <button
      id="arriba"
      :style="{ transform: `scale(${scale})`, opacity: `${opacity}` }"
      @click="ubicacion(1)"
      v-if="isItemVisible1"
    >
      Hola 1
    </button>
    <button
      id="izquierda"
      :style="{ transform: `scale(${scale})`, opacity: `${opacity}` }"
      @click="ubicacion(2)"
      v-if="isItemVisible2" 
    >
      Hola 2
    </button>
    <button
      id="derecha"
      :style="{ transform: `scale(${scale})`, opacity: `${opacity}` }"
      @click="ubicacion(3)"
      v-if="isItemVisible3"
    >
      Hola 3
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
  click,
} = useItemsMenu();


import { useSceenSize } from "../composables/useScreenSize";
const {screenHeight, screenWidth, updateSizes} = useSceenSize();



const opacity = ref(0);
//mover la camara al item seleccionado
const ubicacion = (valor) => {
  if (click.value == 0) {
    switch (valor) {
      case 1:
        setButtonsAndPosition(
          matrizPosiciones[0][0],
          matrizPosiciones[0][1],
          true,
          false,
          false
        );
        setTextCardInfo("Esto es una prueba");
        setLink(1);
        toggleCardInfo();
        break;

      case 2:
        setButtonsAndPosition(
          matrizPosiciones[1][0],
          matrizPosiciones[1][1],
          false,
          true,
          false
        );
        setTextCardInfo("Esto es una prueba 2 xd");
        setLink();
        toggleCardInfo();
        break;
      case 3:
        setButtonsAndPosition(
          matrizPosiciones[2][0],
          matrizPosiciones[2][1],
          false,
          false,
          true
        );
        setTextCardInfo("Esto es una prueba 3");
        setLink(1);
        toggleCardInfo();
        break;
      default:
        toggleCardInfo();
        toggleItemVisible1();
        resetItems();
    }
  } else {
    toggleCardInfo();
    resetItems();
  }
};

onMounted(() => {
  click.value = 0;
  opacity.value = "1";
});
onUnmounted(() => {
  resetItems();
  toggleCardInfo();
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
  width: 10%;
  height: 50px;
  position: absolute;
  transition: all 0.3s linear !important;
  animation: bounce 3s infinite ease-in-out;
  border: none;
  border-radius: 10px;
  background: rgba(223, 223, 223, 0.788);
}

#izquierda {
  top: 65%;
  left: 20%;
}

#derecha {
  top: 65%;
  right: 20%;
}

#arriba {
  top: 45%;
  left: 44%;
}

/*  Animacion de los items flotantes*/
@keyframes bounce {
  0% {
    transform: translateY(0) scale(1);

    /* Posición inicial */
  }

  50% {
    transform: translateY(-20px) scale(1.1);
    box-shadow: 0px 0px 50px 10px rgba(223, 223, 223, 0.952);

    /* Subir */
  }

  100% {
    transform: translateY(0) scale(1);

    /* Regresar */
  }
}
@media screen and (max-width: 600px) {
  button{
    width: 20%;
  }
  #izquierda{
    top: 90%;
    left: 5%;
  }
  #derecha{
    top: 90%;
    right: 5%;
  }
  #arriba{
    top: 90%;
    left: 40%;
  }
}
</style>
