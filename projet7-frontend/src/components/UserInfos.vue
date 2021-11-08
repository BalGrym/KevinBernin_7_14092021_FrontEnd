<template>
    <div class="bloc-comment" v-if="reveleUserInfo">

        <div v-on:click="toggleUserInfo" class="overlay"></div>

        <div class="modale-infoUser card">
            <button v-on:click="toggleUserInfo" class="btn-modale btn btn-danger">X</button>
            <p>Voici les informations de votre compte <br> Vous pouvez, si vous le souahitez, modifiez vos informations</p>
            <form class="border-bottom">
                <p class="mb-1">Modifier votre prénom :</p>
                <input v-model="prenom" type="text" class="form-control mb-3">
                <p class="mb-1">Modifiez votre nom :</p>
                <input v-model="nom" type="text" class="form-control mb-2">
                <button @click="modifyUserInfo" class="btn color-primary my-2">Modifiez</button>
                                
            </form>
            <div class="d-flex align-items-center">
                <input v-model="isChecked" type="checkbox" id="verificationDelete" class="me-1">
                <label for="verificationDelete">Si vous souhaitez supprimer votre compte, cochez la case </label>
            </div>
            
            <div class="d-flex justify-content-between">
                <button @click="deleteAccount" :disabled="!isChecked" class="btn color-primary my-2 ">Supprimer le compte</button>
                <button @click="disconnect" class="btn btn-userInfo color-primary my-2 ">Deconnexion</button>
            </div>
            
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UserInfo',
    props: ['reveleUserInfo', 'toggleUserInfo'],
    data() {
        return{ 
            prenom: '',
            nom: '',
            isChecked: '',
        }
    },
    methods: {
        getUserInfos: function() {
            axios.get(`http://localhost:3000/api/auth/userInfo`, {
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then((response) => {
                this.prenom = response.data.firstName;
                this.nom = response.data.lastName;
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        modifyUserInfo: function() {
            axios.put(`http://localhost:3000/api/auth/userInfo`, {
                firstName: this.prenom,
                lastName: this.nom,
            }, {
                headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then(() => {
                location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
        },
        deleteAccount: function() {
            axios.delete(`http://localhost:3000/api/auth/userInfo`, {
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then(() => {
                localStorage.clear();
                this.$router.push({ name: 'login' })
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        disconnect: function() {
          localStorage.clear();
          this.$router.push({ name: 'login' })
      }
    }
}
</script>

<style>

.color-primary{
    color: #fff;
    background-color: #fd2a01;
    border-color: #fd2a01;
}

.color-primary:focus{
    color: #fff;
    box-shadow: 0 0 0 0.25rem rgb(255 215 215 / 100%)!important;
}

.color-primary:hover{
    color: #fff;
    box-shadow: 0 0 0 0.25rem rgb(255 215 215 / 100%)!important;    
}

.bloc-comment {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0,0,0,0.2);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale-infoUser{
    background: #f1f1f1;
    color: #333;
    padding: 10px 40px 20px 20px;
    position: fixed;
}

.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}

.btn-userInfo{
    width: 40%;
}

@media (min-width: 1200px) {
  .modale-infoUser{
    width: 40%!important;
  }

 }

</style>
