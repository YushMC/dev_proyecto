import { ref } from "vue";

const screenWidth = ref(window.innerWidth);
const screenHeight = ref(window.innerHeight);


export function useSceenSize(){
    const updateSizes = ()=>{
        screenWidth.value = window.innerWidth;
        console.log("Tamaño actual del ancho: ", screenWidth.value);
        screenHeight.value = window.innerHeight;
        console.log("Tamaño actual del alto: ", screenHeight.value);
    }
    return {
        updateSizes,
        screenWidth,
        screenHeight
    }
}