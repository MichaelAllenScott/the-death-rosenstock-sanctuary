<template>
  <Header />
  <div class="band-container animate__animated animate__fadeIn animate__fastest">
    <div v-bind:class="['panel-top', bandAbbrv]">
      <div class="back-flex-group">
          <div class="back-arrow-container">
            <img class="back-arrow" @click="navigateToBands()" src="@/assets/icons/back-arrow.png" alt="Back">
            <img class="back-arrow-hover" @click="navigateToBands()" src="@/assets/icons/back-arrow-hover.png"  alt="Back">
          </div>
          <div>
            <img class="back-bands-image" src="@/assets/bands-component/band-title.png" alt="Bands">
          </div>
      </div>
      <img v-bind:class="['band-image', bandAbbrv]" :src="getBandImageSrc()" :alt="this.bandData.name">
      <div class="end-flex-group"></div>
    </div>
    <div v-bind:class="['panel-background', bandAbbrv]">
      <div class="band-info-container">
        <div class="photo-container">
          <img class="band-photo" :src="getBandPhotoUrl()">
          <img class="photo-frame" src="@/assets/band-images/frame.png">
        </div>
        <div class="band-members-container">
          <p class="band-members-header">Band Members:</p>
          <ul class="band-members-list">
            <li v-for="member in bandData.bandMembers" :key="member">{{member}}</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="basic-panel-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna. Adipiscing vitae proin sagittis nisl rhoncus mattis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ipsum faucibus vitae aliquet nec ullamcorper sit. Elit sed vulputate mi sit amet mauris. Senectus et netus et malesuada fames. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Quam quisque id diam vel quam elementum. Mi bibendum neque egestas congue quisque egestas diam in. Bibendum est ultricies integer quis auctor elit sed. Etiam erat velit scelerisque in dictum non consectetur a. Lacus laoreet non curabitur gravida arcu. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Leo a diam sollicitudin tempor. Odio ut enim blandit volutpat. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Cursus in hac habitasse platea dictumst quisque sagittis purus. Ultrices mi tempus imperdiet nulla. Varius morbi enim nunc faucibus a. Malesuada pellentesque elit eget gravida cum. Aliquam nulla facilisi cras fermentum odio eu. Dui faucibus in ornare quam viverra. Tincidunt vitae semper quis lectus nulla at volutpat. Diam vel quam elementum pulvinar etiam non quam lacus. Justo laoreet sit amet cursus sit amet dictum sit. Elit pellentesque habitant morbi tristique. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Porttitor massa id neque aliquam vestibulum. Velit dignissim sodales ut eu sem. Neque sodales ut etiam sit.
        </p>
      </div>
      <div></div>
    </div>
    <DiscographyPanel @navigate-to-album="navigateToAlbum" :albums="this.bandData.albums" :bandAbbrv="bandAbbrv"/>
    <MoreInfoPanel :bandAbbrv="bandAbbrv"/>
    <JeffsExplanationPanel :bandAbbrv="bandAbbrv"/>
  </div>
</template>


<script>
  import Header from  "@/components/common/Header.vue";
  import DiscographyPanel from "@/components/common/panels/DiscographyPanel";
  import MoreInfoPanel from "@/components/common/panels/MoreInfoPanel";
  import JeffsExplanationPanel from "@/components/common/panels/JeffsExplanationPanel";
  import DataRetrieval from "@/data/DataRetrieval";
  import TransitionEngine from "@/common/TransitionEngine";

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
          name: "",
          albums: [],
          bandMembers: []
        }
      }
    },
    created() {
      this.bandData = DataRetrieval.retrieveBandDataWithId(this.bandEnum);
    },
    mounted() {
      TransitionEngine.onPanelMount();
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
        return require('@/assets/bands-component/' + this.$props.bandAbbrv + '-hover.png');
      },
      getBandPhotoUrl() {
        return require('@/assets/band-images/' + this.$props.bandAbbrv + '.png');
      }
    }
  };
</script>


<style scoped>
  @import "../../main.css";

  .band-header-image-container {
    display: flex;
    justify-content: space-evenly;
  }

  .band-image {
    margin-bottom: -7em;
    z-index: 2;
    position: relative;
  }

  .back-bands-image {
    max-height: 7vh;
    position: relative;
    transform: rotate(-5deg);
    z-index: 3;
    margin-top: -3em;
    margin-bottom: -1em;
    margin-left: 1em;
    filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.5));
  }

  .end-flex-group {
    flex: 1;
  }

  .band-info-container {
    position: relative;
    padding-right: 5vw;
    padding-top: 3vh;
  }

  .photo-container {
    transform: rotate(2deg);
  }

  .band-photo {
    max-height: 30vh;
    padding: 5px 0 0 5px;
  }

  .photo-frame {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: contain;
    max-height: 32vh;
  }

  .band-members-container {
    font-family: ManlyMenBB;
    margin-left: 2vw;
    margin-top: 5vh;
  }

  .band-members-header {
    font-size: 1.7em;
    text-decoration: underline;
    margin-bottom: 0;
  }

  .band-members-list {
    font-size: 1.2em;
  }

</style>