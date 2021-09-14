<template>
  <div class="container d-flex justify-content-center align-items-center card">
    <img src="../assets/icon-above-font.png" alt="logo Groupomania" class="w-25 h-25">
    <h1 class="card-title">Connexion </h1>
    <p class="card-subtitle">Tu n'as pas encore de compte ? <a>Créer en un !</a></p>

    <div class="my-3 w-100">
      <input type="email" class="form-control" id="email" placeholder="Adresse Mail">
    </div>

    <div class="row g-3 w-100">
      <div class="col">
        <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Nom" aria-label="Nom">
      </div>
    </div>  

    <div class="form w-100">
      <input type="password" id="password" class="form-control my-3" placeholder="Mot de passe">
    </div>

    <button class="btn btn-primary mb-3 w-25">Se Connecter</button>

  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.divLogin{
  background-color: white;
}

</style>
