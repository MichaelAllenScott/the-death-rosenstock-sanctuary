<template>
  <div>
    <Header />
    <div class="band-container animate__animated animate__fadeIn animate__fastest">
      <div v-bind:class="['panel-top', bandAbbrv]">
        <div class="back-flex-group">
          <div class="back-arrow-container">
            <img
              class="back-arrow"
              @click="navigateToBands()"
              src="@/assets/icons/back-arrow.png"
              alt="Back"
            />
            <img
              class="back-arrow-hover"
              @click="navigateToBands()"
              src="@/assets/icons/back-arrow-hover.png"
              alt="Back"
            />
          </div>
          <div>
            <img
              class="back-bands-image"
              src="@/assets/bands-component/band-title.png"
              alt="Bands"
            />
          </div>
        </div>
        <img
          v-bind:class="['band-image', bandAbbrv]"
          :src="getBandImageSrc()"
          :alt="this.band.name"
        />
        <div class="end-flex-group"></div>
      </div>
      <div v-bind:class="['panel-background', bandAbbrv]"></div>
      <DiscographyPanel
        @navigate-to-album="navigateToAlbum"
        :albums="this.albums"
        :bandAbbrv="bandAbbrv"
      />
      <MoreInfoPanel :bandAbbrv="bandAbbrv" />
      <JeffsExplanationPanel :bandAbbrv="bandAbbrv" />
    </div>
  </div>
</template>


<script>
import Header from "@/components/common/Header.vue";
import DiscographyPanel from "@/components/common/panels/DiscographyPanel";
import MoreInfoPanel from "@/components/common/panels/MoreInfoPanel";
import JeffsExplanationPanel from "@/components/common/panels/JeffsExplanationPanel";
import TransitionEngine from "@/common/TransitionEngine";

export default {
  name: "Band",
  components: {
    Header,
    DiscographyPanel,
    MoreInfoPanel,
    JeffsExplanationPanel,
  },
  props: {
    IncomingAnimation: {
      default: "fadeInRightBig",
      type: String,
    },
    OutgoingAnimation: {
      default: "fadeOutLeftBig",
      type: String,
    },
    bandAbbrv: String,
  },
  data() {
    return {
      band: {
        name: ""
      },
      albums: []
    };
  },
  created() {
  },
  mounted() {
    TransitionEngine.onPanelMount();
    this.getBandData();
    this.getAlbumData();
  },
  methods: {
    navigateToBands() {
      const bandsContainer = document.querySelector(".band-container");
      bandsContainer.classList.remove("animate__fadeIn");
      setTimeout(() => this.$router.push({ name: "home" }), 300);
    },
    navigateToAlbum(orderIndex, album) {
      const bandsContainer = document.querySelector(".band-container");
      bandsContainer.classList.remove("animate__fadeIn");
      setTimeout(() => this.$router.push({
        name: `album-${this.$props.bandAbbrv}`,
        params: { albumOrderIndex: orderIndex, album: album },
      }),300);
    },
    getBandImageSrc() {
      return require(`@/assets/bands-component/${this.$props.bandAbbrv}-hover.png`);
    },
    async getBandData() {
      const response = await fetch(`http://localhost:8080/api/bands/${this.$props.bandAbbrv}`);
      const bandData = await response.json();
      this.band = bandData;
    },
    async getAlbumData() {
      const response = await fetch(`http://localhost:8080/api/bands/${this.$props.bandAbbrv}/albums`);
      const albumsData = await response.json();
      this.albums = albumsData;
    }
  },
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
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
}

.end-flex-group {
  flex: 1;
}
</style>