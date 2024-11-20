// useCardInfo.js
import { ref } from "vue";

// Estado compartido
const isItemVisible1 = ref(false);
const isItemVisible2 = ref(false);
const isItemVisible3 = ref(false);

export function useItemsMenu() {
  const toggleItemVisible1 = () => {
    isItemVisible1.value = !isItemVisible1.value; // Alterna visibilidad
  };
  const toggleItemVisible2 = () => {
    isItemVisible2.value = !isItemVisible2.value; // Alterna visibilidad
  };
  const toggleItemVisible3 = () => {
    isItemVisible3.value = !isItemVisible3.value; // Alterna visibilidad
  };

  return {
    isItemVisible1,
    toggleItemVisible1,

    isItemVisible2,
    toggleItemVisible2,

    isItemVisible3,
    toggleItemVisible3,
  };
}
