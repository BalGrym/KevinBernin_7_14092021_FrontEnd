<template>
<div class="header">
    <div class="d-flex flex-row justify-content-between w-50">
        <img src="../assets/icon-left-font.png" alt="groupomania logo et nom" class="image-header my-2">
        <button v-on:click="toggleUserInfo" @click="$refs.userInfo.getUserInfos()" class="btn button-color my-2">Compte</button>
    </div>
    <userinfos ref="userInfo" v-bind:toggleUserInfo="toggleUserInfo" v-bind:reveleUserInfo="reveleUserInfo"></userinfos>
</div>
 
</template>

<script>
import UserInfos from './UserInfos.vue'

export default {
  name: 'Accueil',
  components: {
      'userinfos': UserInfos
  },
  data(){
      return {
          reveleUserInfo: '',
      }
  },
  methods: {
      toggleUserInfo: function() {
        this.reveleUserInfo = !this.reveleUserInfo
    },
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white ;
}
.image-header{
    width: 200px;
}

.button-color{
    color: #fff;
    background-color: #fd2a01;
    border-color: #fd2a01;
    
}

.button-color:focus{
    box-shadow: 0 0 0 0.25rem rgb(255 215 215 / 100%)!important;
}

.button-color:hover{
    box-shadow: 0 0 0 0.25rem rgb(255 215 215 / 100%)!important;
}
@media (min-width: 576px) {
  .header{
      justify-content: center;
      width: 100%!important;
  }

 }

</style>
