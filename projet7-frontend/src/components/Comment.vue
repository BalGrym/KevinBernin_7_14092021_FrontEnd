<template>
    <div class="bloc-comment" v-if="revele">

        <div v-on:click="toggleComment" class="overlay"></div>

        <div class="modale card">
            <div v-on:click="toggleComment" class="btn-modale btn btn-danger">X</div>
            <h2>Commentaires</h2>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['revele', 'toggleComment']
}
</script>

<style>

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
    padding: 50px;
    position: fixed;
}

.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}


</style>
