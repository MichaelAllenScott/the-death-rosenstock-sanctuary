<template>
  <div class="discography-container">
    <div v-bind:class="['collapsible-panel', 'hvr-grow-shadow', bandAbbrv]" @click="headerClick">
      <img class="collapsible-panel-chevron" :class="{ closed: panelClosed }" src="@/assets/icons/chevron.png" alt="Discography Chevron">
      <img class="collapsible-panel-header" src="@/assets/panel-headers/disc.png" alt="Discography">
    </div>
    <div v-bind:class="['collapsible-panel-background', bandAbbrv, { closed: panelClosed }]">
      <div class="album-container">
        <div class="album-item" v-for="album in albums" :key="album.orderIndex">
          <img class="album-image hvr-grow-shadow-fast" :src="getAlbumUrl(album)" @click="navigateToAlbum(album.orderIndex, album)" alt="Discography">
          <p class="album-title">{{album.name}}<br/>({{album.year}})</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: "DiscographyPanel",
    props: {
      albums: Array,
      bandAbbrv: String
    },
    data() {
      return {
        panelClosed: false
      }
    },
    mounted() {
    },
    methods: {
      headerClick() {
        this.panelClosed = !this.panelClosed;
      },
      getAlbumUrl(album) {
        const images = require.context('@/assets/album-images', true, /\.jpg$/);
        return images(`./${this.$props.bandAbbrv}/` + album.orderIndex + ".jpg");
      },
      navigateToAlbum(albumId) {
        this.$emit('navigate-to-album', albumId);
      }
    }
  };
</script>


<style scoped>

  .album-container {
    display: flex;
    flex-wrap: wrap;
  }

  .album-item {
    flex: 1;
    min-width: 33.33%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .album-image {
    max-height: 35vh;
    align-self: center;
  }

  .album-title {
    align-self: center;
    font-family: ManlyMenBB;
    font-size: 1.5em;
    text-align: center;
    letter-spacing: -0.05em;
  }
    
</style>