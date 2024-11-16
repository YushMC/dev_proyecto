<template>
    <div class="container" @scroll="handleScroll">
        <div v-for="(item, index) in items" :key="index" class="item"
            :style="{ transform: `scale(${scaleFactor[index]})` }">
            <h2>Item {{ index + 1 }}</h2>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const items = Array.from({ length: 5 }); // Array de elementos que se mostrarán en la página
const scaleFactor = ref(Array(items.length).fill(2)); // Escala inicial mayor para simular efecto de "afuera hacia dentro"

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    items.forEach((_, index) => {
        // Reducir la escala a medida que aumenta el scroll, con un límite mínimo de 1
        scaleFactor.value[index] = Math.max(1, 2 - scrollPosition / 500);
    });
};

// Agrega el evento de scroll cuando el componente esté montado
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// Remueve el evento de scroll cuando el componente se desmonte
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.container {
    height: 200vh;
    /* Altura de la página para tener espacio para el scroll */
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    width: 200px;
    height: 200px;
    margin: 20px;
    background-color: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
}
</style>