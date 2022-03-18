<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="band-container animate__animated animate__fadeInRightBig animate__faster">
    <div class="panel-top">
      <div>
        <img class="back-arrow" @click="navigateToBands()" src="../../assets/icons/back-arrow.png" alt="Back">
        <img  class="back-arrow-hover animate__animated animate__bounceIn animate__faster" 
              style="display: none" 
              @click="navigateToBands()" 
              src="../../assets/icons/back-arrow-hover.png" 
              alt="Back">
      </div>
      <img class="band-image" src="../../assets/bands-component/asob-hover.png" alt="Arrogant Sons of Bitches">
      <div></div>
    </div>
    <div class="panel-background">
    </div>
    <DiscographyPanel @navigate-to-album="navigateToAlbum" :albums="this.bandData.albums"/>
    <MoreInfoPanel />
    <JeffsExplanationPanel />
  </div>
</template>


<script>
  import allBandData from "@/data/bands.json";
  import bandDataFunctions from "@/common/commonFunctions";
  import DiscographyPanel from "@/components/common/panels/DiscographyPanel";
  import MoreInfoPanel from "@/components/common/panels/MoreInfoPanel";
  import JeffsExplanationPanel from "@/components/common/panels/JeffsExplanationPanel";

  export default {
    name: "Band",
    components: {
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
      bandEnum: Number
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
        bandsContainer.classList.remove("animate__fadeInRightBig");
        bandsContainer.classList.add("animate__fadeOutRightBig");
        setTimeout(() => this.$router.push({name: 'home'}), 300);
      },
      navigateToAlbum(albumId) {
        const bandsContainer = document.querySelector('.band-container');
        bandsContainer.classList.remove("animate__fadeInRightBig");
        bandsContainer.classList.add("animate__fadeOutLeftBig");
        setTimeout(() => this.$router.push({name: 'album-asob', params: { albumId: albumId }}), 300);
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
    max-height: 30vh;
    margin-top: -9em;
    margin-bottom: -7em;
    z-index: 2;
    position: relative;
  }

</style>