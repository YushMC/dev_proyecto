<template>
    <transition>
        <div class="cardInfo" v-if="isCardInfoVisible">
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit amet saepe ipsum minima recusandae
                labore
                vero
                rerum nulla perferendis earum!</h1>
            <button>JAJA</button>
        </div>
    </transition>
</template>

<script setup>
import { useCardInfo } from './../composables/useCardInfo';
const { isCardInfoVisible } = useCardInfo();
console.log('isCardInfoVisible en el componente: ', isCardInfoVisible)
</script>

<style scoped>
.cardInfo {
    width: 30%;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 55%;
    left: 38%;
    background: rgba(255, 255, 255, 0.05);
    padding: 2%;
    border-radius: 10px;
    border: solid 2px #0000000c;
    filter: drop-shadow(-3px 3px 10px #000000);
    backdrop-filter: blur(1px);
    transition: all 0.3s linear;
    opacity: 1;
}

.cardInfo h1 {
    color: black;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 400;
}

.cardInfo button {
    margin: 2%;
    padding: 2%;

}
</style>