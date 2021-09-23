<template>
<div class="threads">
    <div v-bind:key="index" v-for="(thread,index) in threads" class="card uniqueThread">
        <div class="card-body">
            <div class="d-flex flex-row justify-content-between">
                <h4 class="card-title">{{ thread.prenom }} {{ thread.nom }}</h4>
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn color-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a class="dropdown-item" href="#">Supprimer</a></li>
                    <li><a class="dropdown-item" href="#">Modifier</a></li>
                    </ul>
                </div>
            </div>
            <h5 class="card-title">{{ thread.articleTitle }}</h5>
            <p class="card-text thread-text">{{ thread.articleContent }} </p>
            <div v-on:click="toggleComment" class="d-flex flex-row btn btn-comment">
               <i class="fas fa-comment"></i>
               <p class="comment-text">Commentaires</p> 
            </div>
            
        </div>
    </div>
    <comment v-bind:toggleComment="toggleComment" v-bind:revele="revele"></comment>
</div>
</template>

<script>

import Comment from './Comment.vue'
import axios from 'axios'

export default {
  name: 'Thread',
  components: {
      'comment': Comment
  },
  
  data() {
    return{
        threads: [],
        revele: false,
    }
  },
  methods: {
    toggleComment: function() {
        this.revele = !this.revele
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
    }
  },
  created(){
      this.getAllthreads()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.thread-text{
    padding-bottom: 1em;
    box-shadow:0px 1px 0px #fd2a01;
}

.btn-comment{
    width: min-content;
    height: min-content;
    color: #fff;
    background-color: #fd2a01;
    border-color: #fd2a01;
}

.comment-text{
    margin-left: 0.5em;
    margin-bottom: 0;
}



.fa-comment{
    line-height: inherit;
}

</style>
