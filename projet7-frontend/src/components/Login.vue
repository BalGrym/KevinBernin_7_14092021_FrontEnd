<template>
  <form  class="container d-flex justify-content-center align-items-center card card-login">
    <img src="../assets/icon-above-font.png" alt="logo Groupomania" class="w-25 h-25">
    <!-- Titre Connexion -->
    <h1 class="card-title" v-if="mode == 'login' ">Connexion </h1>
    <!-- Titre Inscription -->
    <h1 class="card-title" v-else>Inscription </h1>

    <!-- Login To Créer un compte -->
    <p class="card-subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="goToCreateAccount()">Créer en un !</span></p>
    <!-- Créer un compte TO Login -->
    <p class="card-subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="goToLogin()">Connecte toi !</span></p>

    <!-- Email -->
    <div class="my-3 w-100">
      <input v-model="email" type="email" class="form-control" id="email" placeholder="Adresse Mail" required>
    </div>

    <!-- Prénom et Nom /// Utile uniquement en CreateAccount -->
    <div class="row g-3 w-100" v-if="mode == 'create'">
      <div class="col ps-0">
        <input v-model="prenom" type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" required>
      </div>
      <div class="col pe-0">
        <input v-model="nom" type="text" class="form-control" placeholder="Nom" aria-label="Nom" required>
      </div>
    </div>  

    <!-- Mot de Passe -->
    <div class="form w-100">
      <input v-model="password" type="password" id="password" class="form-control my-3" placeholder="Mot de passe" required>
    </div>

    <div v-if="mode == 'login' && errorStatus == 'loginError'" class="w-100 mb-3">
      Adresse mail et/ou mot de passe invalide !
    </div>

    <button @click="login()" :disabled="!email.length || !password.length" class="btn button-submit mb-3 w-25" v-if="mode == 'login'">Se Connecter</button>
    <button @click="createAccount()" :disabled="!email.length || !prenom.length || !nom.length || !password.length" class="btn button-submit mb-3 w-25" v-else>S'incrire</button>

  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data(){
    return {
      mode: 'login',
      email: '',
      prenom: '',
      nom: '',
      password: '',
      errorStatus: '',
    }
  },
  methods: {
    goToCreateAccount: function() {
      this.mode = 'create';
    },
    goToLogin: function() {
      this.mode = 'login';
    },
    createAccount: function() {
      axios.post('http://localhost:3000/api/auth/signup', {
        email: this.email,
        firstName: this.prenom,
        lastName: this.nom,
        password: this.password,
      })
      .then(() => {
        this.login();
      })
      .catch( function (error) {
        console.log(error);
      })
      console.log(this.email, this.nom, this.prenom, this.password);
    },
    login: function() {
      axios.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password,
      })
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('role', response.data.role);
        window.location.href = "http://localhost:8080/accueil"
      })
      .catch(()=>{
        this.errorStatus = 'loginError';
      })
    },

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
