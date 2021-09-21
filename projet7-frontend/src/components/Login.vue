<template>
  <div class="container d-flex justify-content-center align-items-center card card-login">
    <img src="../assets/icon-above-font.png" alt="logo Groupomania" class="w-25 h-25">
    <h1 class="card-title" v-if="mode == 'login' ">Connexion </h1>
    <h1 class="card-title" v-else>Inscription </h1>
    <p class="card-subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="goToCreateAccount()">Créer en un !</span></p>
    <p class="card-subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="goToLogin()">Connecte toi !</span></p>

    <div class="my-3 w-100">
      <input type="email" class="form-control" id="email" placeholder="Adresse Mail">
    </div>

    <div class="row g-3 w-100" v-if="mode == 'create'">
      <div class="col ps-0">
        <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom">
      </div>
      <div class="col pe-0">
        <input type="text" class="form-control" placeholder="Nom" aria-label="Nom">
      </div>
    </div>  

    <div class="form w-100">
      <input type="password" id="password" class="form-control my-3" placeholder="Mot de passe">
    </div>

    <button class="btn button-submit mb-3 w-25" v-if="mode == 'login'">Se Connecter</button>
    <button class="btn button-submit mb-3 w-25" v-else>S'incrire</button>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      mode: 'login',
    }
  },
  methods: {
    goToCreateAccount: function() {
      this.mode = 'create';
    },
    goToLogin: function() {
      this.mode = 'login';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.divLogin{
  background-color: white;
}

 .card__action {
    color:#2196F3;
    text-decoration: underline;
    cursor: pointer;
  }

  .button-submit{
    color: #fff;
    background-color: #fd2a01;
    border-color: #fd2a01;
  }

  .button-submit:focus{
    box-shadow: 0 0 0 0.25rem rgb(255 215 215 / 100%)!important;
  }

.card-login{
  border-radius: 10px;
}

</style>
