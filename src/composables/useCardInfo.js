// useCardInfo.js
import { ref } from "vue";

// Estado compartido
const isCardInfoVisible = ref(false);

export function useCardInfo() {
  const toggleCardInfo = () => {
    isCardInfoVisible.value = !isCardInfoVisible.value; // Alterna visibilidad
    console.log("isCardInfoVisible:", isCardInfoVisible.value); // Verifica el valor
  };

  return {
    isCardInfoVisible,
    toggleCardInfo,
  };
}
