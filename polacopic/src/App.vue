<template>

  <div class="container">
    <!-- As a heading -->
    <nav class="navbar bg-info text-white font-weight-bold">
      <span class="navbar-brand mb-0 h1 mx-auto">Vue.js Pictures</span>
    </nav>
    <div class="row" style="list-style: none;">

      <div class="col mb-5 mr-1 mt-5 rounded-lg" v-for="foto of fotos" :key="foto.id">

        <div class="card mx-auto" style="width: 18rem;">
          <img class="bd-placeholder-img card-img-top" width="100%" height="180" :src="foto.url" :alt="foto.titulo">

          <div class="card-body font-weight-bold mx-auto">
            <p class="card-text">{{ foto.titulo }}</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {

  data() {

    return {
      titulo: 'PolacoPic',
      fotos: []
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }

}
</script>

<style>

</style>
