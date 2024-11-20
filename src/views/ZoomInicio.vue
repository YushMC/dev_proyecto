<template>
    <div class="zoom-background">
        <video autoplay muted loop playsinline class="video-background" :style="{
            transform: `scale(${scale}) translateX(${posicionX}) translateY(${posicionY})`
        }">
            <source src="./../assets/animations/02.mp4" type="video/mp4" />
        </video>
        <!-- Contenido del componente -->
        <Transition>
            <button id="arriba" :style="{ transform: `scale(${scale})` }" @click="ubicacion(1)" v-if="isFocusItem1">Hola
                1</button>
        </Transition>
        <Transition>
            <button id="izquierda" :style="{ transform: `scale(${scale})` }" @click="ubicacion(2)"
                v-if="isFocusItem2">Hola 2</button>
        </Transition>
        <Transition>
            <button id="derecha" :style="{ transform: `scale(${scale})` }" @click="ubicacion(3)"
                v-if="isFocusItem3">Hola 3</button>
        </Transition>
        <Cards></Cards>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useCardInfo } from '../composables/useCardInfo';
import Cards from '../components/Cards.vue';
const { toggleCardInfo } = useCardInfo();

let matrizPosiciones = [
    ["0%", "15%"],    // Primer arreglo (fila 1)
    ["10%", "-10%"],    // Segundo arreglo (fila 2)
    ["-10%", "-10%"]     // Tercer arreglo (fila 3)
];


const posicionX = ref("0%");
const posicionY = ref("0%");
const scale = ref(0.7) // Nivel inicial del zoom
const contrast = ref(100); // Contraste inicial
const brightness = ref(1); //brillo de fondo

//controles individuales de los enfoques de los items
const isFocusItem1 = ref(true)
const isFocusItem2 = ref(true)
const isFocusItem3 = ref(true)

const click = ref(0)//detectar el numero de clicks sobre los elementos



//mover la camara al item seleccionado
const ubicacion = (valor) => {
    switch (valor) {
        case 1:
            //detectar si es la primera o seguna vez que se da click para ocultar/mostrar
            if (click.value == 0) {
                setButtonsAndPosition(matrizPosiciones[0][0], matrizPosiciones[0][1], true, false, false)
            } else {
                resetItems()
            }
            break;

        case 2:
            if (click.value == 0) {
                setButtonsAndPosition(matrizPosiciones[1][0], matrizPosiciones[1][1], false, true, false)
            } else {
                resetItems()
            }
            break;
        case 3:
            if (click.value == 0) {
                setButtonsAndPosition(matrizPosiciones[2][0], matrizPosiciones[2][1], false, false, true)
            } else {
                resetItems()
            }
            break;
        default:
            //si no hay datos en el prop, se restablecen los datos
            toggleCardInfo();
            resetItems()
            break;
    }
}
// funcion que coloca el focus del item y la posicion del fondo
const setButtonsAndPosition = (valor, valor2, item1, item2, item3) => {
    posicionX.value = valor
    posicionY.value = valor2
    isFocusItem1.value = item1;
    isFocusItem2.value = item2;
    isFocusItem3.value = item3;
    toggleCardInfo();
    contrast.value = 100;
    scale.value = 1.25
    brightness.value = 0.7
    click.value++;

}
//Función para restablecer las posiciones de los elementos
const resetItems = () => {
    posicionX.value = "0%"
    posicionY.value = "0%"
    scale.value = 0.7
    isFocusItem1.value = true
    isFocusItem2.value = true
    isFocusItem3.value = true
    contrast.value = 100;
    brightness.value = 1;
    toggleCardInfo();
    click.value = 0;
}

const observadorItems = (item, position) => {
    watch(item, (newValue, oldValue) => {
        // Realizar acciones adicionales aquí
    });
}
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
    transition: all 1s linear;
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
</style>