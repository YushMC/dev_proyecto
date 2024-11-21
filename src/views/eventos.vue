<template>
  <div class="view_info">
    <div class="content_info"  data-aos="fade-up" data-aos-duration="1000">
      <h1>Titulo</h1>
      <hr />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, rerum totam ad,
        eos dolores dolore necessitatibus repellendus sed veniam, iusto delectus
        veritatis. Ipsam inventore dolorem ratione laboriosam cum excepturi hic?
      </p>
      <router-link class="more_information" to="/inicio"  data-aos="fade-up" data-aos-duration="1000"> Ver Más</router-link>
      <div class="content_imgs" data-aos="fade-up" data-aos-duration="2000">
        <img src="./../assets/gui/fondo.jpg" alt="Imagen 1"   />
        <img src="./../assets/gui/fondo_2.jpg" alt="Gif 1"  />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useItemsMenu } from "../composables/useItemsMenu";
const { setButtonsAndPosition, matrizPosiciones, onlyResetScaleVideo } = useItemsMenu();

onMounted(() => {
  
  setButtonsAndPosition(
    matrizPosiciones[0][0],
    matrizPosiciones[0][1],
    false,
    false,
    false
  );
});

onUnmounted(() => {
  setButtonsAndPosition(matrizPosiciones[3][0], matrizPosiciones[3][1], true, true, true);
  onlyResetScaleVideo();
});
</script>

<style scoped>
.more_information {
  margin-top: 2%;
  width: 100%;
  border: 2px solid #a32bdb;
  background: none;
  padding: 2%;
  border-radius: 10px;
}

.view_info {
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 30;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s linear;
}

.content_info {
  max-width: 800px;
  margin: 2% auto;
  padding: 2%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  overflow-x: hidden;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.8);
  transition: all 0.3s linear;
  height: fit-content;
}

.content_info:hover {
  transform: scale(1.02);
}

.content_info h1 {
  text-transform: uppercase;
}

.content_info hr {
  width: 20%;
  border: none;
  background: #a32bdb;
  height: 5px;
  transition: all 0.3s linear;
}

.content_info h1:hover ~ hr {
  width: 100%;
}

.content_imgs {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content_imgs img {
  width: 80%;
  border-radius: 10px;
  margin: 2% 0;
}

.content_imgs img:nth-child(2n) {
  margin-left: 20%;
}

@media screen and (max-width: 800px) {
  .content_info{
    width: 80%;
    padding: 5%;
    margin: auto;
  }
}
</style>
