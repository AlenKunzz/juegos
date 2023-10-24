<template>
  <h1>HOLA COMO ESTAS </h1>
    <H1>ADIOS</H1>
    <div class="container">
      <div id="diseno">
        <button  @click="$router.push('/games/ppt')" >
          <h3 > Piedra Papel o Tijera</h3>
          <img src="../assets/ppt.png" alt="">
        </button>
        <button  @click="$router.push('/games/memorama')">
          <h3> Memorama</h3>
          <img src="../assets/Memo.png" alt="">
        </button>
        <button  @click="$router.push('/games/adivina')">
          <h3> Adivina el Pokemon</h3>
          <img src="../assets/poke.png" alt="">
        </button>
        <button  @click="$router.push('/games/ahorcado')">
          <h3> Ahorcado</h3>
          <img src="../assets/ahorc.png" alt="">
        </button>
      </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>