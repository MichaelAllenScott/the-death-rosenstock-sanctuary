<template>
  <Header />
  <div class="band-container animate__animated animate__fadeIn animate__fastest">
    <div v-bind:class="['panel-top', bandAbbrv]">
      <div class="back-flex-group">
        <div>
          <img class="back-arrow" @click="navigateToBands()" src="../../assets/icons/back-arrow.png" alt="Back">
          <img  class="back-arrow-hover animate__animated animate__bounceIn animate__faster" 
                style="display: none" 
                @click="navigateToBands()" 
                src="../../assets/icons/back-arrow-hover.png" 
                alt="Back">
          </div>
          <div>
            <img class="back-bands-image" src="../../assets/bands-component/band-title.png" alt="Bands">
          </div>
      </div>
      <img v-bind:class="['band-image', bandAbbrv]" :src="getBandImageSrc()" :alt="this.bandData.name">
      <div class="end-flex-group"></div>
    </div>
    <div v-bind:class="['panel-background', bandAbbrv]">
    </div>
    <DiscographyPanel @navigate-to-album="navigateToAlbum" :albums="this.bandData.albums" :bandAbbrv="bandAbbrv"/>
    <MoreInfoPanel :bandAbbrv="bandAbbrv"/>
    <JeffsExplanationPanel :bandAbbrv="bandAbbrv"/>
  </div>
</template>


<script>
  import Header from  "@/components/common/Header.vue";
  import allBandData from "@/data/bands.json";
  import bandDataFunctions from "@/common/commonFunctions";
  import DiscographyPanel from "@/components/common/panels/DiscographyPanel";
  import MoreInfoPanel from "@/components/common/panels/MoreInfoPanel";
  import JeffsExplanationPanel from "@/components/common/panels/JeffsExplanationPanel";

  export default {
    name: "Band",
    components: {
      Header,
      DiscographyPanel,
      MoreInfoPanel,
      JeffsExplanationPanel
    },
    props: {
      IncomingAnimation: {
        default: "fadeInRightBig",
        type: String
      },
      OutgoingAnimation: {
        default: "fadeOutLeftBig",
        type: String
      },
      bandEnum: Number,
      bandAbbrv: String
    },
    data() {
      return {
        bandData: {
          name: ""
        }
      }
    },
    created() {
      this.bandData = bandDataFunctions.retrieveBandDataWithId(this.bandEnum, allBandData)
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
    methods: {
      navigateToBands() {
        const bandsContainer = document.querySelector('.band-container');
        bandsContainer.classList.remove("animate__fadeIn");
        setTimeout(() => this.$router.push({name: 'home'}), 300);
      },
      navigateToAlbum(albumId) {
        const bandsContainer = document.querySelector('.band-container');
        bandsContainer.classList.remove("animate__fadeIn");
        setTimeout(() => this.$router.push({name: `album-${this.$props.bandAbbrv}`, params: { albumId: albumId }}), 300);
      },
      getBandImageSrc() {
        return require('../../assets/bands-component/' + this.$props.bandAbbrv + '-hover.png');
      }
    }
  };
</script>


<style scoped>
  @import "../../common/main.css";

  .band-header-image-container {
    display: flex;
    justify-content: space-evenly;
  }

  .band-image {
    margin-bottom: -7em;
    z-index: 2;
    position: relative;
  }

  .back-flex-group {
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
    flex: 1;
  }

  .back-bands-image {
    max-height: 5vh;
    position: relative;
    transform: rotate(0deg);
    z-index: 3;
    margin-top: -3em;
    margin-bottom: -1em;
    margin-left: 1em;
  }

  .end-flex-group {
    flex: 1;
  }

</style>