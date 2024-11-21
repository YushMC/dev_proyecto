// useCardInfo.js
import { ref } from "vue";

// Estado compartido
const isCardInfoVisible = ref(false);

const getText = ref('')
const enlaces= ['eventos'];
const getEnlace = ref('');

export function useCardInfo() {
  const toggleCardInfo = () => {
    isCardInfoVisible.value = !isCardInfoVisible.value; // Alterna visibilidad
    console.log("isCardInfoVisible:", isCardInfoVisible.value); // Verifica el valor
  };

  const setTextCardInfo = (valor) =>{
    getText.value = valor;
    console.log('Texto cargado: ', getText.value)
  }
  const setLink = (valor)  =>{
    switch(valor){
      case 1:
        getEnlace.value = enlaces[0];
        break;
      default:
        getEnlace.value = 'inicio';
        break;
    }
    console.log("enlace cargado: ", getEnlace.value)
  }
  return {
    isCardInfoVisible,
    toggleCardInfo,
    setTextCardInfo,
    getEnlace,
    setLink,
    getText,
  };
}
