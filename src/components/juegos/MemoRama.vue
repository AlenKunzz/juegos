<template>
  <h1>Memorama</h1>
  <section class="memorama">
    <CartaC
    v-for="(carta, index) in listaCartas"
    :key="`carta-${index}`"
    :value="carta.value"
    :visible="carta.visible"
    :posicion="carta.posicion"
    @carta-escogida="voltear"
    />
  </section>
</template>

<script>

import {ref} from 'vue'
import CartaC from "./Componentes/CartaC"
export default {
  components:{
    CartaC
  },

  setup(){
    const listaCartas = ref([])

    for (let i=0; i<16; i++ )
    {listaCartas.value.push({
      value: i,
      visible: false,
      posicion: i,
    })
  }

  const voltear = payload => {
    listaCartas.value[payload.posicion].visible = true
  }
  return {
    listaCartas,
    voltear
  }
}


}
</script>

<style scoped>





</style>