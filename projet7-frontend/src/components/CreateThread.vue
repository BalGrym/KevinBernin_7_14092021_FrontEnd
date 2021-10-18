<template>
    <div class="d-flex justify-content-center align-items-center card">
        <form>
            <div class="m-3">
                <input v-model="title" type="text" class="form-control" placeholder="Titre de l'article" aria-label="Titre de l'article">
            </div>

            <div class="m-3">
                <textarea v-model="content" name="content" class="form-control" id="content" cols="40" rows="10" placeholder="Rédigez le contenu de votre article"></textarea>
            </div>

            <button @click.prevent="createThread()" class="btn btn-primary m-3">Publier</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CreateThread',
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
                window.location.href = "http://localhost:8080/accueil"
            })
            .catch((e) =>{
                console.log(e);
            })
        }
    }

}

</script>

<style>

</style>