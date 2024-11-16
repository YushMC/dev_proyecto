<template>
    <div class="zoom-background" @wheel="handleScroll" :style="{
        backgroundSize: `${scale * 100}%`,
        backgroundPosition: `${position} ${position2}`,
        filter: ` brightness(${brightness})`
    }">
        <a @click="resetItems()" id="botonInicio">INICIO</a>
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
import { useCardInfo } from './../composables/useCardInfo';
import Cards from './Cards.vue';
const { toggleCardInfo } = useCardInfo();

let matrizPosiciones = [
    ["50%", "20%"],    // Primer arreglo (fila 1)
    ["30%", "50%"],    // Segundo arreglo (fila 2)
    ["60%", "50%"]     // Tercer arreglo (fila 3)
];



const scale = ref(1) // Nivel inicial del zoom
const contrast = ref(100); // Contraste inicial
const brightness = ref(1); //brillo de fondo

const position = ref('center'); //posicion de la cámara por defect
const position2 = ref('center');
//controles individuales de los enfoques de los items
const isFocusItem1 = ref(true)
const isFocusItem2 = ref(true)
const isFocusItem3 = ref(true)

const click = ref(0)//detectar el numero de clicks sobre los elementos

const changeId = () => {
    const ubicacionItems = ['arriba', 'derecha', 'izquierda'];


    elementId.value = `elemento-${Math.floor(Math.random() * 1000)}`; // Genera un ID aleatorio
};

function handleScroll(event) {
    // Aumentar o reducir el zoom del fondo
    if (event.deltaY < 0) {
        // Zoom in
        scale.value += 0.05
        contrast.value -= 1; // Incrementa el contraste
        brightness.value -= 0.01
    } else if (event.deltaY > 0) {
        // Zoom out
        if (scale.value >= 1.1) {
            scale.value -= 0.05
            contrast.value += 1; // Reduce el contraste
            brightness.value += 0.01;
        }
    }

    // Limitar el zoom en un rango específico
    scale.value = Math.min(Math.max(scale.value, 0.5), 3)

    // Limitar el contraste en un rango específico
    contrast.value = Math.min(Math.max(contrast.value, 70), 100); // Rango entre 50% y 150%


    brightness.value = Math.min(Math.max(brightness.value, 0.5), 1)
}
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
    position.value = String(valor);
    position2.value = valor2;
    isFocusItem1.value = item1;
    isFocusItem2.value = item2;
    isFocusItem3.value = item3;
    toggleCardInfo();
    contrast.value = 100;
    scale.value = 2.0
    brightness.value = 0.7
    click.value++;

}
//Función para restablecer las posiciones de los elementos
const resetItems = () => {
    position.value = 'center'
    scale.value = 1
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

.zoom-background {
    width: 100%;
    height: 100vh;
    /* Ajusta según sea necesario */
    transition: background-size 0.2s ease;
    background-image: url(./../assets/gui/fondo.jpg);
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
}

#izquierda {
    top: 45%;
    left: 30%;
}

#derecha {
    top: 45%;
    right: 30%;
}

#arriba {
    top: 35%;
}




/*  Animacion de los items flotantes*/
@keyframes bounce {
    0% {
        transform: translateY(0) scale(1);

        /* Posición inicial */
    }

    50% {
        transform: translateY(-20px) scale(1.1);
        box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.795);

        /* Subir */
    }

    100% {
        transform: translateY(0) scale(1);

        /* Regresar */
    }
}
</style>