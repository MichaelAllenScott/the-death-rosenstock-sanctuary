<template>
  <div class="songs-container">
    <div class="collapsible-panel hvr-grow-shadow" @click="headerClick">
      <img class="collapsible-panel-chevron" :class="{ closed: panelClosed }" src="../../../assets/icons/chevron.png" alt="Songs Chevron">
      <img class="collapsible-panel-header" src="../../../assets/panel-headers/songs.png" alt="Songs">
    </div>
    <div class="collapsible-panel-background" :class="{ closed: panelClosed }">
      <div class="songs-container">
        <div class="songs-item" v-for="(song, index) in songs" :key="song.id">
          <p class="song-title" @click="navigateToSong(song.id)">{{song.name}}</p>
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
      songs: Array,
      albumId: Number
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
      navigateToSong(songId) {
        this.$emit('navigate-to-song', songId);
      }
    }
  };
</script>


<style scoped>
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
    
</style>