<template>
  <Header />
  <div class="album-container animate__animated animate__fadeIn animate__fastest">
    <div v-bind:class="['panel-top', bandAbbrv]">
        <img class="back-arrow" @click="navigateToBand()" src="../../assets/icons/back-arrow.png" alt="Back">
        <img  class="back-arrow-hover animate__animated animate__bounceIn animate__faster" 
              style="display: none" 
              @click="navigateToBand()" 
              src="../../assets/icons/back-arrow-hover.png" 
              alt="Back">
        <img class="panel-header" src="../../assets/panel-headers/album.png" alt="Album">
      <div></div>
    </div>
    <div v-bind:class="['panel-background', bandAbbrv]">
      <img class="album-image" :src="getAlbumUrl(albumData.id)" :alt="albumData.name">
      <div class="album-title-container">
        <p class="album-title">{{albumData.name}}</p>
        <img class="album-title-line" src="../../assets/line.png" alt="Decorative Line">
        <p class="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna. Adipiscing vitae proin sagittis nisl rhoncus mattis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ipsum faucibus vitae aliquet nec ullamcorper sit. Elit sed vulputate mi sit amet mauris. Senectus et netus et malesuada fames. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Quam quisque id diam vel quam elementum. Mi bibendum neque egestas congue quisque egestas diam in. Bibendum est ultricies integer quis auctor elit sed. Etiam erat velit scelerisque in dictum non consectetur a. Lacus laoreet non curabitur gravida arcu. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Leo a diam sollicitudin tempor. Odio ut enim blandit volutpat. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Cursus in hac habitasse platea dictumst quisque sagittis purus. Ultrices mi tempus imperdiet nulla. Varius morbi enim nunc faucibus a. Malesuada pellentesque elit eget gravida cum. Aliquam nulla facilisi cras fermentum odio eu. Dui faucibus in ornare quam viverra. Tincidunt vitae semper quis lectus nulla at volutpat. Diam vel quam elementum pulvinar etiam non quam lacus. Justo laoreet sit amet cursus sit amet dictum sit. Elit pellentesque habitant morbi tristique. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Porttitor massa id neque aliquam vestibulum. Velit dignissim sodales ut eu sem. Neque sodales ut etiam sit.

Amet nisl suscipit adipiscing bibendum est ultricies. Aliquam sem fringilla ut morbi tincidunt augue interdum. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Nulla aliquet enim tortor at auctor. Consequat semper viverra nam libero justo laoreet sit. Lobortis feugiat vivamus at augue eget. Suscipit adipiscing bibendum est ultricies integer. Nunc lobortis mattis aliquam faucibus. Vestibulum sed arcu non odio euismod lacinia at quis. Posuere ac ut consequat semper viverra nam libero justo. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Nulla facilisi etiam dignissim diam. Sit amet dictum sit amet. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Mauris ultrices eros in cursus turpis. Est velit egestas dui id ornare arcu odio ut. Enim neque volutpat ac tincidunt. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Id consectetur purus ut faucibus pulvinar elementum integer enim. Varius quam quisque id diam vel quam
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna. Adipiscing vitae proin sagittis nisl rhoncus mattis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ipsum faucibus vitae aliquet nec ullamcorper sit. Elit sed vulputate mi sit amet mauris. Senectus et netus et malesuada fames. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Quam quisque id diam vel quam elementum. Mi bibendum neque egestas congue quisque egestas diam in. Bibendum est ultricies integer quis auctor elit sed. Etiam erat velit scelerisque in dictum non consectetur a. Lacus laoreet non curabitur gravida arcu. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Leo a diam sollicitudin tempor. Odio ut enim blandit volutpat. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Cursus in hac habitasse platea dictumst quisque sagittis purus. Ultrices mi tempus imperdiet nulla. Varius morbi enim nunc faucibus a. Malesuada pellentesque elit eget gravida cum. Aliquam nulla facilisi cras fermentum odio eu. Dui faucibus in ornare quam viverra. Tincidunt vitae semper quis lectus nulla at volutpat. Diam vel quam elementum pulvinar etiam non quam lacus. Justo laoreet sit amet cursus sit amet dictum sit. Elit pellentesque habitant morbi tristique. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Porttitor massa id neque aliquam vestibulum. Velit dignissim sodales ut eu sem. Neque sodales ut etiam sit.

Amet nisl suscipit adipiscing bibendum est ultricies. Aliquam sem fringilla ut morbi 
        </p>
      </div>
      <div>
        
      </div>
    </div>
    <SongsPanel @navigate-to-song="navigateToSong" :songs="albumData.songs" :albumId="albumData.id" :bandAbbrv="bandAbbrv"/>
    
  </div>
</template>

<script>
  import Header from  "@/components/common/Header.vue";
  import allBandData from "@/data/bands.json";
  import bandDataFunctions from "@/common/commonFunctions";
  import SongsPanel from "@/components/common/panels/SongsPanel";

  export default {
    name: "Album",
    components: {
      SongsPanel,
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
        albumData: {
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
      let albumId = this.$route.params.albumId;
      this.bandData = bandDataFunctions.retrieveBandDataWithId(this.bandEnum, allBandData);
      this.albumData = bandDataFunctions.retrieveAlbumDataWithBandAndId(albumId, this.bandData);
    },
    methods: {
      navigateToBand() {
        const albumContainer = document.querySelector('.album-container');
        albumContainer.classList.remove("animate__fadeIn");
        setTimeout(() => this.$router.push({name: 'band-asob'}), 300);
      },
      navigateToSong(songId) {
        const albumContainer = document.querySelector('.album-container');
        albumContainer.classList.remove("animate__fadeIn");
        setTimeout(() => this.$router.push({name: 'song-asob', params: { albumId: this.albumData.id, songId: songId }}), 300);
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
  
  .album-image {
    max-height: 40vh;
    filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.5));
  }
  
  .album-title {
    font-family: ManlyMenBB;
    font-size: 2em;
    letter-spacing: -0.05em;
    text-align: center;
    margin: 0;
  }

  .album-title-line {
    margin: 0 15% 0 15%;
  }

  .description-text {
    margin: 1em 2em 0 2em;
  }

  .album-title-container {
    margin: 0 1em 0 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>