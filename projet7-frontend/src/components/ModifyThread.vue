<template>
    <div class="bloc-modifyThread" v-if="reveleModifyThread">

        <div v-on:click="toggleModifyThread" class="overlay"></div>

        <div class="modale card">
            <div v-on:click="toggleModifyThread" class="btn-modale btn btn-danger">X</div>
            <form>
                <div class="m-3">
                    <input v-model="title" type="text" class="form-control" placeholder="Titre de l'article" aria-label="Titre de l'article">
                </div>

                <div class="m-3">
                    <textarea v-model="content" name="content" class="form-control" id="content" cols="40" rows="10" placeholder="Rédigez le contenu de votre article"></textarea>
                </div>

                <button @click.prevent="modifyThread(threadId)" class="btn btn-primary m-3">Modifer</button>
            </form>
        </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Comment',
    props: ['reveleModifyThread', 'toggleModifyThread', 'threadId'],
     data() {
        return {
            title: '',
            content: ''
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
            .catch((e) =>{
                console.log(e);
            })
        }
    }
}
</script>

<style>

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
    padding: 50px;
    position: fixed;
}

.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}


</style>
