<template>
  <main class="view_info">
    <Portada></Portada>
    <div class="container_info_view">
      <section>
        <h3 class="subtitulo">Bienvenido</h3>
        <h2 class="titulo">Lorem ipsum dolor sit amet.</h2>
      </section>
      <div class="container_cards">
        <div class="card">
          <div class="titulo_card">Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            cupiditate.
          </p>
        </div>
        <div class="card">
          <div class="titulo_card">Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            cupiditate.
          </p>
        </div>
        <div class="card">
          <div class="titulo_card">Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            cupiditate.
          </p>
        </div>
        <div class="card">
          <div class="titulo_card">Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            cupiditate.
          </p>
        </div>
        <div class="card">
          <div class="titulo_card">Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            cupiditate.
          </p>
        </div>
        <div class="card">
          <div class="titulo_card">Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            cupiditate.
          </p>
        </div>
      </div>
      <section>
        <h3 class="subtitulo">About Us</h3>
        <h2 class="titulo">Lorem ipsum dolor sit amet.</h2>
      </section>
      <article>
        <div class="container_imgs">
          <div class="content_img">
            <img src="/public/eventos/portada_eventos.jpg" alt="" />
          </div>
          <div class="content_img">
            <img src="/public/eventos/fondo_vertical.jpg" alt="" />
          </div>
        </div>
        <div class="container_text">
          <h2 class="titulo">Hola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a quis rem perferendis! Quisquam consectetur ipsum suscipit quasi
            architecto deserunt nam assumenda eveniet illum molestias quaerat
            culpa, quos earum voluptatum.
          </p>
        </div>
      </article>
      <article>
        <div class="container_imgs">
          <div class="content_img">
            <img src="/public/eventos/portada_eventos.jpg" alt="" />
          </div>
          <div class="content_img">
            <img src="/public/eventos/fondo_vertical.jpg" alt="" />
          </div>
        </div>
        <div class="container_text">
          <h2 class="titulo">Hola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a quis rem perferendis! Quisquam consectetur ipsum suscipit quasi
            architecto deserunt nam assumenda eveniet illum molestias quaerat
            culpa, quos earum voluptatum.
          </p>
        </div>
      </article>
      <section>
        <h3 class="subtitulo">Precios</h3>
        <h2 class="titulo">Lorem ipsum dolor sit amet.</h2>
      </section>
      <div class="container_precios">
        <aside>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h1>$00.00 MXN</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, blanditiis.
          </p>
        </aside>
        <aside class="principal">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h1>$00.00 MXN</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, blanditiis.
          </p>
        </aside>
        <aside>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h1>$00.00 MXN</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, blanditiis.
          </p>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup>
import Cabecera from "../components/Cabecera.vue";
import Portada from "../components/eventos/Portada.vue";

import { useTripVideo } from "../composables/useTripVideo";
const { isTripVideoVisible, isBackgroundVideoVisible } = useTripVideo();

import { useRouter } from "vue-router";
const router = useRouter();

import { onMounted, onUnmounted } from "vue";
//al montarse
onMounted(() => {
  //logica de la animación
  if (!isTripVideoVisible.value) {
    isTripVideoVisible.value = true;
    isBackgroundVideoVisible.value = false;
  }
  setTimeout(() => {
    isTripVideoVisible.value = false;
    isBackgroundVideoVisible.value = true;
  }, 2000);
});
//realizar un delay para mostrar el video de transicion

router.beforeEach((to, from, next) => {
  // Ejecutar lógica antes de la navegación
  isTripVideoVisible.value = true;
  // Simulamos un retardo usando setTimeout
  setTimeout(() => {
    next(); // Permite continuar con la navegación
  }, 500); // 2 segundos de retraso antes de continuar
});
onUnmounted(() => {});
</script>

<style scoped>
.view_info {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url("/public/eventos/fondo_vertical.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.container_info_view {
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(2px);
}
.container_cards {
  padding: 2% 10%;
  display: grid;
  background: #00000010;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.container_cards_2 {
  background: #fff;
}
.card {
  width: 100%;
  height: 200px;
  padding: 2%;
  backdrop-filter: blur(3px);
  border: solid 2px #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s linear;
  color: #fff;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.2);
}
.container_cards_2 .card {
  opacity: 0.5;
  border: 2px solid #000;
  color: #000;
}
.container_cards_2 .card:hover {
  opacity: 1;
}
.container_cards .card:hover {
  background: #fff;
  color: #000;
}
article {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 85%;
  margin: 5% auto;
  padding: 5%;
  height: 80dvh;
  background: #fff;
  position: relative;
  border-radius: 10px;
}
article .container_imgs {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
article .container_imgs .content_img {
  width: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff18;
  backdrop-filter: blur(10px);
  padding: 2%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
}
.content_img::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(-45deg, #60efff 0%, #0061ff 100%);
  transform: translate3d(0px, 10px, 0) scale(0.95);
  filter: blur(20px);
  opacity: 0.5;
  transition: opacity 0.3s;
  border-radius: inherit;
}
.content_img::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  border-radius: inherit;
}
article .container_imgs .content_img img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
}
article .container_imgs .content_img:first-child {
  top: 0;
  left: 10%;
  z-index: 10;
}
article .container_imgs .content_img:last-child {
  bottom: 0;
  right: 0;
}
article .container_text {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2%;
  border-radius: 10px;
}
article .container_text p {
  font-weight: 300;
  line-height: 1.5;
  font-size: 1.2rem;
}

.container_precios {
  width: 85%;
  margin: 5% auto;
  border-radius: 10px;
  padding: 5% 0;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  justify-content: center;
  align-items: center;
}
aside {
  position: relative;
  width: 24dvw;
  padding: 2%;
  border-radius: 10px;
  background: #ffffff88;
  height: 50dvh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  backdrop-filter: blur(2px);
  border: solid 2px #0a0a0a86;
}
aside.principal {
  background: #ffffffd2;
  border: solid 2px #0000004b;
  z-index: 10;
  transform: scale(1.05);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
}
aside.principal:before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  transform: translate3d(0px, 10px, 0) scale(0.95);
  filter: blur(10px);
  opacity: 0.2;
  transition: opacity 0.3s;
  border-radius: inherit;
}
aside h1 {
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
}
aside h2 {
  font-weight: 100;
  font-size: 1rem;
}
@media screen and (min-width: 1000px) {
  .view_info {
    background-image: url("/public/eventos/fondo_portada_horizontal.jpg");
  }
}

@media screen and (max-width: 600px) {
  .container_info_view {
    background: #0000004b;
  }
  article {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
    gap: 2rem;
    height: 100dvh;
  }

  article .container_imgs {
    margin-top: 0%;
    display: flex;
  }
  article .container_imgs .content_img {
    width: 100% !important;
    position: relative !important;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  article .container_imgs .content_img:first-child {
    display: none;
  }
  .container_precios {
    flex-direction: column;
  }
  aside {
    width: 85%;
  }
}
</style>
