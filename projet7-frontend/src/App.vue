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
  width: 100%;
}

body {
  background-image: linear-gradient(180deg, #ffd7d7 00%, #fd2a01 210%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding:32px;
}

@media (max-width: 576px) {
  body {
    padding: 32px 10px 32px 10px;
  }

 }
</style>
