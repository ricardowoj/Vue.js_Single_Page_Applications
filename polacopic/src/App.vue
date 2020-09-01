<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt="foto.titulo">
  </div>

</template>

<script>
export default {
  data() {

    return {
      titulo: 'PolacoPic',
      foto: {
        url: 'https://i.pinimg.com/originals/ce/1a/46/ce1a46ef454eb388d4dfb26c8f96ca9b.png',
        titulo: 'Pug homens de preto'
      }
    }
  }
}
</script>

<style>

</style>
