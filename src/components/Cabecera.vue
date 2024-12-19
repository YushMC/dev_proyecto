<template>
  <header>
    <div class="container_header">
      <div class="container_info_header">
        <h1>{{ route.name }}</h1>
      </div>
      <nav class="container_nav">
        <ul>
          <li>
            <span @click="togglemenu1"><i class="fas fa-home"></i></span>
            <router-link
              :to="route.path"
              :class="{ mostrarMenu: isMenuVisible1 }"
              >Inicio</router-link
            >
          </li>
          <li>
            <span @click="togglemenu2"><i class="fas fa-star"></i></span>
            <router-link to="/" :class="{ mostrarMenu: isMenuVisible2 }"
              >Menú</router-link
            >
          </li>
        </ul>
      </nav>
      <div
        class="cerrar"
        @click="ocultarMenus"
        :class="{ mostrarCerrador: isMenuVisible1 || isMenuVisible2 }"
      ></div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const isMenuVisible1 = ref(false);
const isMenuVisible2 = ref(false);

const togglemenu1 = () => {
  isMenuVisible1.value = !isMenuVisible1.value;
  if (isMenuVisible2.value) {
    isMenuVisible2.value = false;
  }
};
const togglemenu2 = () => {
  isMenuVisible2.value = !isMenuVisible2.value;
  if (isMenuVisible1.value) {
    isMenuVisible1.value = false;
  }
};
const ocultarMenus = () => {
  isMenuVisible1.value = false;
  isMenuVisible2.value = false;
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #bebdbd;
  padding: 2% 0;
  z-index: 90;
}
.container_header {
  position: relative;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  z-index: 90;
}
.container_info_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_nav {
  position: fixed;
  top: 15%;
  left: 0;
  width: 60%;
  z-index: 80;
}
ul {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
}
li {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;

  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 1s linear;
  margin: 1% 0;
}
li a {
  position: relative;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s linear;
  transform: translateX(-10px);
  text-align: center;
}
li span {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d4d4d4;
  color: rgba(59, 59, 59, 0.719);
  padding: 10% 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.3s linear;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
}

li span:hover {
  transform: translateX(1px);
  border-right-color: #0c0c0c2a;
}
.mostrarMenu {
  visibility: visible;
  opacity: 1;
  background: #d4d4d4;
  border-radius: none;
  margin-left: 5%;
  transform: translateX(0);
  box-shadow: 0px 0px 10px 5px rgba(59, 59, 59, 0.116);
}
.cerrar {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  backdrop-filter: blur(10px);
  transition: all 0.1s linear;
  opacity: 0;
  visibility: hidden;
}
.mostrarCerrador {
  opacity: 1;
  visibility: visible;
}
@media screen and (min-width: 800px) {
  .cerrar {
    display: none;
  }
}
</style>
