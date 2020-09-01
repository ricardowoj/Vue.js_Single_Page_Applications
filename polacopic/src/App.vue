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
      fotos: [
        {
          url: 'https://i.pinimg.com/originals/ce/1a/46/ce1a46ef454eb388d4dfb26c8f96ca9b.png',
          titulo: 'Pug homens de preto'
        },
        {
          url: 'https://http2.mlstatic.com/D_NQ_NP_780287-MLB29606162644_032019-O.jpg',
          titulo: 'Pug homens de preto - MIB3'
        }
      ]
    }
  }
}
</script>

<style>

</style>
