<template>
  <div class="songs-container">
    <div class="panel hvr-grow-shadow" @click="headerClick">
      <img class="panel-chevron" :class="{ closed: panelClosed }" src="../../../assets/icons/chevron.png" alt="Songs Chevron">
      <img class="panel-header" src="../../../assets/panel-headers/songs.png" alt="Songs">
    </div>
    <div class="panel-background" :class="{ closed: panelClosed }">
      <div class="songs-container">
        <div class="songs-item" v-for="(song, index) in songs" :key="song.id">
          <p class="song-title">{{song.name}}</p>
          <img v-if="index !== songs.length - 1" class="song-title-line" src="../../../assets/line.png" alt="Decorative Line">
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: "SongsPanel",
    props: {
      songs: Array
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
      },
      navigateToAlbum(albumId, songId) {
        this.$emit('navigate-to-song', albumId, songId);
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

  .songs-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .song-title {
    cursor: pointer;
    align-self: center;
    font-family: ManlyMenBB;
    font-size: 1.5em;
    text-align: center;
    letter-spacing: -0.05em;
    margin: .6em 0px;
    -webkit-transition-duration: 0.17s;
    transition-duration: 0.17s;
    -webkit-transition-property: font-size, transform;
    transition-property: font-size, transform;
    z-index: 1;
  } .song-title:hover {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }

  .song-title-line {
    max-width: 50%;
    align-self: center;
    opacity: 75%;
    z-index: 0;
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
  .hvr-grow-shadow-fast {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0) rotate(0deg);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.15s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
  }
  .hvr-grow-shadow-fast:hover, .hvr-grow-shadow-fast:focus, .hvr-grow-shadow-fast:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.10);
    transform: scale(1.10) rotate(-3deg);
  }
  .hvr-bounce-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

  @font-face {
    font-family: ManlyMenBB;
    src: url("../../../assets/fonts/ManlyMenBB_bold.otf") format("opentype");
}
    
</style>