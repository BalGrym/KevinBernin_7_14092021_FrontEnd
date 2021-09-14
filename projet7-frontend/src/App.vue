<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  max-width: 100%;
}

body {
  background-image: linear-gradient(62deg, #ffd7d7 00%, #fd2a01 210%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding:32px;
}
</style>
