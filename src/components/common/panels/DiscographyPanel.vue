<template>
  <div>
    <div class="panel hvr-grow-shadow" @click="headerClick">
      <img class="panel-chevron" :class="{ closed: panelClosed }" src="../../../assets/icons/chevron.png" alt="Discography Chevron">
      <img class="panel-header" src="../../../assets/panel-headers/disc.png" alt="Discography">
    </div>
    <div class="panel-background" :class="{ closed: panelClosed }">
      <div class="album-container">
        <div class="album-item" v-for="album in albums" :key="album.id">
          <img class="album-image" :src="getAlbumUrl(album)" alt="Discography">
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
      albums: Array
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
        var images = require.context('../../../assets/album-images/asob/', false, /\.jpg$/)
        return images('./' + album.id + ".jpg")
      }
    }
  };
</script>


<style scoped>
  .panel {
    background-image: linear-gradient(#E81648, #AD0F35);
    padding: .8em;
    margin: .5em 12em 0 12em;
    border-radius: 5px;
    display: flex;
    align-items: center;
  } .panel:hover {
    transform: scale(1.05);
  }

  .panel-header {
    max-height: 7vh;
    margin-left: .8em;
  }

  .panel-chevron {
    max-height: 5vh;
    margin-left: .3em;
    transform: rotate(90deg);

    transition-property: all;
    transition-duration: .3s;
  } .panel-chevron.closed {
    transform: rotate(0deg);
  }

  .panel-background {
    background-image: url("../../../assets/old_wall.png");
    background-repeat: repeat;
    padding: 2em;
    margin: -1em 15em .5em 15em;
    z-index: -1;
    position: relative;
    border: #AD0F35 .3em solid;
    border-radius: 5px;

    overflow-y: hidden;
    max-height: 100vh;

    transition-property: all;
    transition-duration: .3s;
  } .panel-background.closed {
    max-height: 0vh;
    padding: 0;
  }

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
    margin-bottom: 3em;
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
  }

  /* Grow Shadow */
  .hvr-grow-shadow {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
  }
  .hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }

  @font-face {
    font-family: ManlyMenBB;
    src: url("../../../assets/fonts/ManlyMenBB_bold.otf") format("opentype");
}
    
</style>