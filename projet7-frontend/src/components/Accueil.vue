<template>
  <div class="container threads d-flex justify-content-center">
    <header-top></header-top>
    <thread></thread>
  </div>
</template>

<script>
import Header from './Header.vue'
import Thread from './Thread.vue'

export default {
  name: 'Accueil',
  components: {
      'header-top': Header,
      'thread': Thread,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/* 
.container{
  width: 100%!important;
} */

</style>
