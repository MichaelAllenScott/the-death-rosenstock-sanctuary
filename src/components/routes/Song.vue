<template>
  <Header />
  <div class="song-container animate__animated animate__fadeIn animate__fastest">
    <div v-bind:class="['panel-top', bandAbbrv]">
        <img class="back-arrow" @click="navigateToAlbum()" src="../../assets/icons/back-arrow.png" alt="Back">
        <img  class="back-arrow-hover animate__animated animate__bounceIn animate__faster" 
              style="display: none" 
              @click="navigateToAlbum()" 
              src="../../assets/icons/back-arrow-hover.png" 
              alt="Back">
        <img class="panel-header" src="../../assets/panel-headers/song.png" alt="Album">
      <div></div>
    </div>
    <div v-bind:class="['panel-background', bandAbbrv]">
      <div class="song-title-container">
        <p class="song-title">{{songData.name}}</p>
        <img class="song-title-line" src="../../assets/line.png" alt="Decorative Line">
        <iframe class="song-video" :src="songData.youtubeUrl"></iframe>
      </div>
      
    </div>
    
    
  </div>
</template>

<script>
  import Header from  "@/components/common/Header.vue";
  import allBandData from "@/data/bands.json";
  import bandDataFunctions from "@/common/commonFunctions";

  export default {
    name: "Song",
    components: {
      Header
    },
    props: {
      bandEnum: Number,
      bandAbbrv: String
    },
    data() {
      return {
        bandData: {
          name: "",
          id: 0
        },
        songData: {
          name: "",
          id: 0
        }
      }
    },
    mounted() {
      window.scrollTo(0, 0);

      const logo = document.querySelector('.logo-image');
      logo.classList.add("small");

      const backWhite = document.querySelector('.back-arrow');
      const backHover = document.querySelector('.back-arrow-hover');

      backWhite.addEventListener('mouseover', () => {
        backHover.style.display = "block";
        backWhite.style.display = "none";
      });

      backHover.addEventListener('mouseout', () => {
        backWhite.style.display = "block";
        backHover.style.display = "none";
      });
    },
    created() {
      let songId = this.$route.params.songId;
      let albumId = this.$route.params.albumId;
      this.bandData = bandDataFunctions.retrieveBandDataWithId(this.bandEnum, allBandData);
      this.songData = bandDataFunctions.retrieveSongDataWithBandAndId(songId, albumId, this.bandData);
    },
    methods: {
      navigateToAlbum() {
        const songContainer = document.querySelector('.song-container');
        songContainer.classList.remove("animate__fadeIn");
        setTimeout(() => this.$router.push({name: 'album-asob', params: { albumId: this.$route.params.albumId }}), 300);
      },
      getAlbumUrl(albumId) {
        var images = require.context('../../assets/album-images/asob/', false, /\.jpg$/);
        return images('./' + albumId + ".jpg");
      }
    }
  };
</script>

<style scoped>
  @import "../../common/main.css";

  .song-title {
    font-family: ManlyMenBB;
    font-size: 2.3em;
    letter-spacing: -0.05em;
    text-align: center;
    margin: 0;
  }

  .song-title-line {
    margin: 0 20% 0 20%;
  }

  .song-video {
    margin-top: 1.5em;
    width: 50vw;
    height: 50vh;
    align-self: center;
  }

  .song-title-container {
    margin: 0 1em 0 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>