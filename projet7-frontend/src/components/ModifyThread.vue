<template>
    <div class="bloc-modifyThread" v-if="reveleModifyThread">
        <div v-on:click="toggleModifyThread" class="overlay"></div>
        <div class="modale card">
            <div v-on:click="toggleModifyThread" class="btn-modale btn btn-danger">X</div>
            <form>
                <div class="m-3">
                    <p class="mb-1">Modifiez le titre :</p>
                    <textarea v-model="title"  type="text" class="form-control" aria-label="Titre de l'article"></textarea>
                </div>

                <div class="m-3">
                    <p class="mb-1">Modifiez le contenu de l'article :</p>
                    <textarea v-model="content" name="content" class="form-control" id="content" cols="40" rows="10" placeholder="Modifiez le contenu de votre article"></textarea>
                </div>

                <button @click.prevent="modifyThread(threadId)" class="btn btn-primary color-primary m-3">Modifer</button>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Comment',
    props: ['reveleModifyThread', 'toggleModifyThread', 'threadId', 'threadContent', 'threadTitle'],
     data() {
        return {
            title: '',
            content: '',
        }
    },
    methods: {
        modifyThread: function(e) {
           axios.put(`http://localhost:3000/api/threads/${e}`, {
                articleTitle: this.title,
                articleContent: this.content,
            }, {
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then(() => {
                location.reload();
            })
            .catch((err) =>{
                console.log(err);
            })
        },
        getOneThread: function(e) {
            axios.get(`http://localhost:3000/api/threads/${e}`, {
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
            })
            .then((response) => {
                this.title = response.data.articleTitle;
                this.content = response.data.articleContent;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>

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

.bloc-modifyThread {
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
    padding: 40px 40px 10px 10px;
    position: fixed;
}

.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}


</style>
