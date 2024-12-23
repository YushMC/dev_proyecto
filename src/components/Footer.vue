<template>
  <footer>
    <div class="container_footer">
      <div class="logo">
        <img src="" alt="" />
        <h1>Eventos</h1>
      </div>
      <div class="info">
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            veritatis praesentium illum iure voluptates aliquid dolorem magnam
            et asperiores quo!
          </p>
        </div>
        <div>
          <h3>Enlaces</h3>
          <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* background: linear-gradient(to right, #2193b0, #6dd5ed); */
  background: #fff;
  margin-top: -15px;
  padding: 2% 10%;

  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
}
.container_footer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.info {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 2rem;
}
.info div {
  display: flex;
  flex-direction: column;
}
</style>
