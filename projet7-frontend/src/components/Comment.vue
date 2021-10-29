<template>
    <div class="bloc-comment" v-if="reveleComment">

        <div v-on:click="toggleComment" class="overlay"></div>

        <div class="modale card">
            <div v-on:click="toggleComment" class="btn-modale btn btn-danger">X</div>
            <h2>Commentaires</h2>
            <div v-for="comment in comments" v-bind:key="comment.id">
                <p>{{ comment.comment }}</p>
            </div>
            <form>

                <div>
                    <textarea v-model="comment" name="comment" class="form-control"  cols="10" rows="5" placeholder="Ecrivez votre commentaire !" aria-label="Ecrivez votre commentaire !"></textarea>
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
        getComments: function() {
            axios.get(`http://localhost:3000/api/threads/${this.threadId}/comment`, {
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
            axios.post(`http://localhost:3000/api/threads/${this.threadId}/comment`, {
                comment: this.comment
            }, {
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then(() => {
                console.log('commentCreated');
                this.getComments()
            })
            .catch((e) =>{
                console.log(e);
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
    padding: 40px 40px 20px 20px;
    position: fixed;
}

.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}


</style>
