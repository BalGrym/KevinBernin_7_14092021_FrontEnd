<template>
    <div class="d-flex justify-content-center align-items-center card createThread">
         <header-top></header-top>
        <form class="w-100">
            <p class="m-3">Créez l'article que vous voulez publier !</p>
            <div class="m-3">
                <input v-model="title" type="text" class="form-control" placeholder="Titre de l'article" aria-label="Titre de l'article">
            </div>

            <div class="m-3">
                <textarea v-model="content" name="content" class="form-control" id="content" cols="40" rows="10" placeholder="Rédigez le contenu de votre article"></textarea>
            </div>
            
            <div class="d-flex justify-content-between">
                <button @click.prevent="createThread()" class="btn color-primary m-3">Publier</button>  
                <div @click="goToAccueil()" class="btn color-primary m-3">Annuler</div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'

export default {
    name: 'CreateThread',
    components: {
      'header-top': Header,
  },
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        createThread: function() {
            axios.post('http://localhost:3000/api/threads', {
                articleTitle: this.title,
                articleContent: this.content,
            }, {
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then(() => {
                this.$router.push({ name: 'accueil' })
            })
            .catch((e) =>{
                console.log(e);
            })
        },
        goToAccueil: function(){
            this.$router.push({ name: 'accueil' })
        }
    }

}

</script>

<style scoped>

.createThread{
    margin-right: auto;
    margin-left: auto;
}

.color-primary{
    color: #fff;
    background-color: #fd2a01;
    border-color: #fd2a01;
}

.color-primary:focus{
    box-shadow: 0 0 0 0.25rem rgb(255 215 215 / 100%)!important;
}

.color-primary:hover{
    box-shadow: 0 0 0 0.25rem rgb(255 215 215 / 100%)!important;    
}

@media (min-width: 768px) {
  .createThread{
    width: 40%!important;
  }

 }

</style>