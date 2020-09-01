<template>
  <div class="container middle">
    <h1>{{ titulo }}</h1>
    <ul style="list-style: none;">
      <li v-for="foto of fotos" :key="foto.id">
        <img class="rounded-circle" :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

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
