<script setup>
import { ref } from 'vue'
const escogi = ref(null)
const maquina = ref(null)
const resultado = ref(null)
const ppt = {
  piedra: {
    piedra: 'empate',
    papel: 'pierdes',
    tijera: 'ganas'
  },
  papel: {
    papel: 'empate',
    tijera: 'pierdes',
    piedra: 'ganas'
  },
  tijera: {
    tijera: 'empate',
    piedra: 'pierdes',
    papel: 'ganas'
  }
}

const jugar = c => {
  escogi.value = c
  const elecciones = ['piedra', 'papel', 'tijera']
  const random = Math.floor(Math.random() * elecciones.length)
  console.log(Math.random());
  console.log(elecciones.length);
  console.log(random);

  maquina.value = elecciones[random]
  const operacion = ppt[c][maquina.value]  
  
  if (operacion === 'ganas') {
    resultado.value = 'Ganaste :D'
  } else if (operacion === 'pierdes') {
    resultado.value = 'Perdiste Malin Mampo'
  } else {
    resultado.value = 'Es un Empate!'
  }
}


</script>

<template>
  <div>
    <h1>
      Bienvenido a Piedra Papel o Tijera
    </h1>
    <h2 class="titulo">
      Escoge una opcion
    </h2>
  </div>
  <div class="container">
    <div class="diseno">
      <div id="row">
        <h2>
          <button v-on:click="jugar('piedra')" class="ppt">
            Piedra
            <img class="pptt" src="https://ponceelrelajado.com/juego/img/piedra.png" alt="">
          </button>
        </h2>
        <h2>
          <button v-on:click="jugar('papel')" class="ppt">
            Papel
            <img class="pptt" src="https://ponceelrelajado.com/juego/img/papel.png" alt="">
          </button>
        </h2>
        <h2>
          <button v-on:click="jugar('tijera')" class="ppt">
            Tijera
            <img class="pptt" src="https://ponceelrelajado.com/juego/img/tijera.png" alt="">
          </button>
        </h2>
      </div>
    </div>

  </div>
  <div v-if="escogi != null">
    <h1 class="pie">
      <div>
        Tu escogiste <span class="subrayado"> {{ escogi }}</span>
      </div>
      <div>
        Y la maquina escogio <span class="subrayado"> {{ maquina }}</span>
      </div>
      <div class="veredicto">
        {{ resultado }}
      </div>
    </h1>
  </div>


</template>










