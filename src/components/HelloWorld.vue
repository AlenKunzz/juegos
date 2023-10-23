
<template>
  <Login/>
</template>

<script>

import Login from './components//paginas/Login.vue'
import PrincipalP from './components/Paginas/Principal.vue'
export default {
  name: 'App',
  components: {
    Login,
    PrincipalP
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
