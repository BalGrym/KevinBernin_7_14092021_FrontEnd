<template>
<div class="threads">
    <div v-bind:key="thread.id" v-for="thread in threads" class="card uniqueThread">
        <div class="card-body">
            <div class="d-flex flex-row justify-content-between">
                <h4 class="card-title">{{ thread.User.firstName }} {{ thread.User.lastName }}</h4>
                <div v-if="thread.User.id == userId || role == 0" class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn color-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a @click="deleteThread(thread.id)" class="dropdown-item" href="#">Supprimer</a></li>
                        <li><a @click="getThreadId(thread.id)" v-on:click="toggleModifyThread" class="dropdown-item" href="#">Modifier</a></li>
                    </ul>
                </div>
            </div>
            <h5 class="card-title">{{ thread.articleTitle }}</h5>
            <p class="card-text thread-text">{{ thread.articleContent }} </p>
            <button  v-on:click="toggleComment" @click="getThreadId(thread.id); $refs.comment.getComments(thread.id)" class="d-flex flex-row btn btn-comment color-primary">
               <i class="fas fa-comment"></i>
               <p class="comment-text">Commentaires</p> 
            </button>
            
        </div>
    </div>
    <comment ref="comment" :threadId="threadId" v-bind:toggleComment="toggleComment" v-bind:reveleComment="reveleComment"></comment>
    <modifyThread :threadId="threadId" v-bind:toggleModifyThread="toggleModifyThread" v-bind:reveleModifyThread="reveleModifyThread"></modifyThread>
    <button class="btn-createThread color-primary btn" @click="gotToCreateThread()">Publiez !</button>
</div>
</template>

<script>

import Comment from './Comment.vue'
import modifyThread from './ModifyThread.vue'
import axios from 'axios'

export default {
  name: 'Thread',
  components: {
      'comment': Comment,
      'modifyThread': modifyThread
  },
  
  data() {
    return{
        threads: [],
        // threadContent: '',
        // threadTitle: '',
        threadId: '',
        reveleComment: false,
        reveleModifyThread: false,
        role: localStorage.getItem('role'),
        userId: localStorage.getItem('userId'),
    }
  },
  methods: {
    toggleComment: function() {
        this.reveleComment = !this.reveleComment
    },
    toggleModifyThread: function() {
        this.reveleModifyThread = !this.reveleModifyThread
    },
    // threadForModify: function(thread){
    //     this.threadContent = thread.articleContent;
    //     this.threadTitle = thread.articleTitle;
    //     console.log(this.threadTitle);
    //     console.log(this.threadContent);
    // }
    // ,
    getThreadId: function(id) {
        this.threadId = id;
        console.log(this.threadId);
    },
    getAllthreads: function() {
        axios.get('http://localhost:3000/api/threads/', {
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
        })
        .then((response) => {
            this.threads = response.data
            console.log(this.threads);
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    gotToCreateThread: function() {
        window.location.href = "http://localhost:8080/accueil/create"
    },
    deleteThread: function(e) {
        axios.delete(`http://localhost:3000/api/threads/${e}`, {
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
            }
        })
        .then(() => {
            location.reload();
        })
        .catch(function (error) {
            console.log(error);
        })
    }
  },
  created(){
      this.getAllthreads()
  }
}
</script>

<style scoped>

.threads{
    margin-top: 5%;
}

.uniqueThread{
    margin-bottom: 10px;
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

.thread-text{
    padding-bottom: 1em;
    box-shadow:0px 1px 0px #fd2a01;
}

.btn-comment{
    width: min-content;
    height: min-content;
    color: #fff;
    /* background-color: #fd2a01;
    border-color: #fd2a01; */
}

.comment-text{
    margin-left: 0.5em;
    margin-bottom: 0;
}

.fa-comment{
    line-height: inherit;
}

.btn-createThread{
    position: fixed;
    bottom: 20px;

    font-size: 20px;
}

</style>
