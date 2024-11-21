import { ref } from "vue";
// Estado compartido de los items
const isItemVisible1 = ref(true);
const isItemVisible2 = ref(true);
const isItemVisible3 = ref(true);
// posiciones del fondo
const posicionX = ref("0%");
const posicionY = ref("0%");
const scale = ref(0.7) // Nivel inicial del zoom
const click = ref(0)//detectar el numero de clicks sobre los elementos

const matrizPosiciones = [
    ["0%", "15%"],    // Primer arreglo (fila 1)
    ["10%", "-10%"],    // Segundo arreglo (fila 2)
    ["-10%", "-10%"],     // Tercer arreglo (fila 3)
    ["0%", "0%"]
];


// funcion que coloca el focus del item y la posicion del fondo
const setButtonsAndPosition = (valor, valor2, item1, item2, item3) => {
    posicionX.value = valor
    posicionY.value = valor2
    isItemVisible1.value = item1;
    isItemVisible2.value = item2;
    isItemVisible3.value = item3;
    scale.value = 1.25;
    click.value = 1;

}
//Función para restablecer las posiciones de los elementos
const resetItems = () => {
    posicionX.value = "0%"
    posicionY.value = "0%"
    scale.value = 0.7
    isItemVisible1.value = true
    isItemVisible2.value = true
    isItemVisible3.value = true
    click.value = 0;
}

export function useItemsMenu() {
  const toggleItemVisible1 = () => {
    isItemVisible1.value = !isItemVisible1.value; // Alterna visibilidad
    console.log('isItemVisible 1: ', isItemVisible1.value)
  };
  const setZoomDefaultToScaleVideo = () =>{
    scale.value = 1.25;
  }
  const onlyResetScaleVideo = ()=>{
    scale.value = 0.7
  }
  const toggleItemVisible2 = () => {
    isItemVisible2.value = !isItemVisible2.value; // Alterna visibilidad
    console.log('isItemVisible 2: ', isItemVisible2.value)
  };
  const toggleItemVisible3 = () => {
    isItemVisible3.value = !isItemVisible3.value; // Alterna visibilidad
    console.log('isItemVisible 3: ', isItemVisible3.value)
  };
  


  return {
    isItemVisible1,
    toggleItemVisible1,

    isItemVisible2,
    toggleItemVisible2,

    isItemVisible3,
    toggleItemVisible3,

    resetItems,
    setButtonsAndPosition,

    posicionX,
    posicionY,

    matrizPosiciones,

    scale,
    setZoomDefaultToScaleVideo,
    onlyResetScaleVideo,

    click
  };
}
