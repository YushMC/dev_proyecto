<template>
  <div class="container_portada">
    <div class="container_text">
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, impedit?
      </h1>
    </div>
    <div class="container_imgs">
      <img src="/eventos/portada_eventos.jpg" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container_portada {
  width: 85%;
  padding: 7% 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
}

.container_text {
  width: 100%;
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  border: 2px solid #ffffff2d;
  background: #ffffff15;
  border-radius: 20px;
  backdrop-filter: blur(4px);
  padding: 2%;
}
.container_text h1 {
  color: #fff;
}
.container_imgs {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_imgs img {
  width: 100%;
  border-radius: 10px;
}

@media screen and (min-width: 1000px) {
  .container_portada {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
  }
}
@media screen and (max-width: 600px) {
  .container_portada {
    padding-top: 20%;
  }
}
</style>
