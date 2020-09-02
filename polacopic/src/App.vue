<template>

  <div class="container">
    <!-- As a heading -->
    <nav class="navbar bg-info text-white font-weight-bold shadow-sm p-3 mb-5 rounded">
      <span class="navbar-brand mb-0 h1 mx-auto">Vue.js Fotos</span>
    </nav>

    <div class="row justify-content-md-center">
      <div class="col col-lg-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text bg-light" id="inputGroup-sizing-default">Filtrar</span>
          </div>
          <input type="text" class="form-control" placeholder="Busque pelo título da imagem" v-on:input="filter = $event.target.value">
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

          <div class="mx-auto mt-5" v-for="foto of filterPicture" :key="foto.id">

            <my-card :titulo="foto.titulo">
              <img class="bd-placeholder-img card-img-top" width="100%" height="180" :src="foto.url" :alt="foto.titulo">
            </my-card>

          </div>
      </div>
    </div>
  </div>

</template>

<script>
import Painel from './components/shared/painel/Painel'

export default {

  components: {
    'my-card' : Painel
  },

  data() {

    return {
      titulo: 'PolacoPic',
      fotos: [],
      filter: ''
    }
  },

  computed: {

    filterPicture() {

      if(this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo))
      } else {
        return this.fotos;
      }
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
