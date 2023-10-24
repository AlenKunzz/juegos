
<template>
  <div class="container">
    <h1>archivo login modificado por esekien</h1>
    <div class="row">
      <div class="container">
        <img class="imagen" src="../assets/incog.png" alt="">
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Usuario</label>
      <input type="email" class="form-control" placeholder="name@example.com" v-model="usuario">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Contraseña</label>
      <input type="password" class="form-control" v-model="contra">
    </div>

    <b-button class="login"  @click="$router.push('/games')">Login</b-button>

  </div>
</template>

<script>
export default {
  name: 'LoginVi',
  data() {
    return {
      usuario: "",
      contra: "",
    }
  },
  methods:
  {
    login() {
      console.log(this.usuario, this.contra);
    }
  }
}
</script>
