<template>
    <transition>
        <div class="cardInfo" v-if="isCardInfoVisible">
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit amet saepe ipsum minima recusandae
                labore
                vero
                rerum nulla perferendis earum!</h1>
            <button>Comenzar</button>
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
    left: 32%;
    background: rgba(49, 49, 49, 0.596);
    padding: 2%;
    border-radius: 10px;
    filter: drop-shadow(-3px 3px 10px #000000);
    backdrop-filter: blur(10px);
    transition: all 0.5s linear;
}

.cardInfo:hover {
    transform: scale(1.1);
}

@keyframes borderColor {
    0% {
        border-bottom-color: #60daaa;
        border-left-color: #9e3cdf;
        border-top-color: transparent;
        border-right-color: transparent;
    }

    20% {
        border-bottom-color: #60daaa;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
    }

    40% {
        border-bottom-color: transparent;
        border-left-color: #9e3cdf;
        border-top-color: transparent;
        border-right-color: transparent;
    }

    50% {
        border-bottom-color: transparent;
        border-left-color: #9e3cdf;
        border-top-color: #cec54c;
        border-right-color: transparent;
    }

    70% {
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-top-color: #cec54c;
        border-right-color: #df3cd2;
    }

    90% {
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-color: #df3cd2;
    }

    100% {
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
    }
}


.cardInfo h1 {
    color: rgb(245, 245, 245);
    font-size: 1em;
    line-height: 1.5;
    font-weight: 400;
}

.cardInfo button {
    border: 2px solid #000000;
    border-radius: 5px;
    background: none;
    color: #000000;
    padding: 2%;
    margin: 2% 0;
    transition: all 0.3s linear;
    text-transform: uppercase;
}

.cardInfo button:hover {
    background: #000000;
    color: #fff;
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.603);
    cursor: pointer;
    transform: scale(1.05);
}
</style>