<template>
    <div class="bloc-comment" v-if="reveleComment">

        <div v-on:click="toggleComment" class="overlay"></div>

        <div class="modale card">
            <button v-on:click="toggleComment" class="btn-modale btn btn-danger">X</button>
            <h2 class="mb-4">Commentaires</h2>
            <div v-for="comment in comments" v-bind:key="comment.id" class="border-bottom mb-3">
                <p class="fw-bold mb-0">{{ comment.User.firstName }} {{ comment.User.lastName }}</p>
                <p class="mb-0">{{ comment.comment }}</p>
            </div>
            <p class="border-bottom" v-if="comments.length == 0">Il n'y a pas de commentaires pour le moment. Soyez le premier à commenter !</p>
            <form>

                <div>
                    <textarea v-model="comment" name="comment" class="form-control"  placeholder="Ecrivez votre commentaire !" aria-label="Ecrivez votre commentaire !"></textarea>
                </div>

                <button @click.prevent="createComment()" class="btn color-primary mt-2">Publier</button>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Comment',
    props: ['reveleComment', 'toggleComment', 'threadId'],
    data() {
        return{
            comments: [],
            comment: ''
        }
    },
    methods: {
        getComments: function(e) {
            axios.get(`http://localhost:3000/api/thread/${e}/comment`, {
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                    }
            })
            .then((response) => {
                this.comments = response.data
                console.log(this.comments);
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        createComment: function(){
            axios.post(`http://localhost:3000/api/thread/${this.threadId}/comment`, {
                comment: this.comment
            }, {
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then(() => {
                this.comment = '';
                this.getComments(this.threadId);
            })
            .catch((err) =>{
                console.log(err);
            })
        }
    }
}
</script>

<style >

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

.modale{
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

@media (min-width: 768px) {
  .modale{
    width: 35%!important;
  }

 }


</style>
