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
            <h5 class="card-title">{{ thread.title }}</h5>
            <p class="card-text">{{ thread.content }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Thread',
  data() {
    return{
        threads:[
            {prenom: 'arthur', nom: 'dubois' ,title: 'titre1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem quisquam, architecto, nihil dicta labore libero esse animi at excepturi eaque. Illum sed sunt aliquid incidunt earum quae veritatis reprehenderit, perferendis quasi voluptates excepturi delectus cupiditate facere officia magnam nam commodi non ducimus optio aspernatur magni? Magni maiores corporis ipsam?'},
            {prenom: 'arno', nom: 'dupont' ,title: 'titre2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem quisquam, architecto, nihil dicta labore libero esse animi at excepturi eaque. Illum sed sunt aliquid incidunt earum quae veritatis reprehenderit, perferendis quasi voluptates excepturi delectus cupiditate facere officia magnam nam commodi non ducimus optio aspernatur magni? Magni maiores corporis ipsam?'},
            {prenom: 'kevin', nom: 'rimbaud' ,title: 'titre3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem quisquam, architecto, nihil dicta labore libero esse animi at excepturi eaque. Illum sed sunt aliquid incidunt earum quae veritatis reprehenderit, perferendis quasi voluptates excepturi delectus cupiditate facere officia magnam nam commodi non ducimus optio aspernatur magni? Magni maiores corporis ipsam?'},
            {prenom: 'léna', nom: 'impe' ,title: 'titre4', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem quisquam, architecto, nihil dicta labore libero esse animi at excepturi eaque. Illum sed sunt aliquid incidunt earum quae veritatis reprehenderit, perferendis quasi voluptates excepturi delectus cupiditate facere officia magnam nam commodi non ducimus optio aspernatur magni? Magni maiores corporis ipsam?'}
        ]
    }
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

</style>
