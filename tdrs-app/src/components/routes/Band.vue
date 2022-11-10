<template>
  <div>
    <Header />
    <div v-if="band.name && albums.length > 0" class="band-container animate__animated animate__fadeIn animate__faster">
      <div v-bind:class="['panel-top', bandAbbrv]">
        <div class="back-flex-group">
          <div class="back-arrow-container">
            <img class="back-arrow" @click="navigateToBands()" src="@/assets/icons/back-arrow.png" alt="Back" />
            <img class="back-arrow-hover" @click="navigateToBands()" src="@/assets/icons/back-arrow-hover.png" alt="Back" />
          </div>
          <div>
            <img class="back-bands-image" src="@/assets/bands-component/band-title.png" alt="Bands" />
          </div>
        </div>
        <img v-bind:class="['band-image', bandAbbrv]" :src="getBandImageSrc()" :alt="this.band.name"/>
        <div class="end-flex-group"></div>
      </div>
      <div v-bind:class="['panel-background', bandAbbrv]">
        <div class="band-info-container">
          <div class="photo-container">
            <img class="band-photo" :src="getBandPhotoUrl()" />
            <img class="photo-frame" src="@/assets/band-images/frame.png" />
          </div>
          <div class="band-members-container">
            <p class="band-members-header">Band Members:</p>
            <ul class="band-members-list">
              <li v-for="member in band.bandMembers" :key="member">
                {{ member }}
              </li>
            </ul>
          </div>
        </div>
        <div class="band-description">
          <p class="basic-panel-text">{{band.description}}</p>
        </div>
        <div></div>
      </div>
      <DiscographyPanel @navigate-to-album="navigateToAlbum" :albums="this.albums" :bandAbbrv="bandAbbrv"/>
      <MoreInfoPanel v-if="band.moreInfo" :bandAbbrv="bandAbbrv" :infoText="band.moreInfo" />
    </div>
  </div>
</template>


<script>
import Header from "@/components/common/Header.vue";
import DiscographyPanel from "@/components/common/panels/DiscographyPanel";
import MoreInfoPanel from "@/components/common/panels/MoreInfoPanel";
import TransitionEngine from "@/common/TransitionEngine";

export default {
  name: "Band",
  components: {
    Header,
    DiscographyPanel,
    MoreInfoPanel
  },
  props: {
    bandAbbrv: String,
  },
  data() {
    return {
      band: {
        name: "",
        description: "",
        bandMembers: [],
      },
      albums: [],
    };
  },
  mounted() {
    TransitionEngine.onPanelMount();
    this.getBandData();
    this.getAlbumData();
  },
  methods: {
    navigateToBands() {
      TransitionEngine.triggerAnimationOnContainer("band-container", "fadeOut", "faster");
      setTimeout(() => this.$router.push({ name: "home" }), 300);
    },
    navigateToAlbum(orderIndex, album) {
      TransitionEngine.triggerAnimationOnContainer("band-container", "fadeOut", "faster");
      setTimeout(() => this.$router.push({
        name: `album-${this.$props.bandAbbrv}`,
        params: { albumOrderIndex: orderIndex, album: album },
      }), 300);
    },
    getBandImageSrc() {
      return require(`@/assets/bands-component/${this.$props.bandAbbrv}-hover.png`);
    },
    getBandPhotoUrl() {
      return require("@/assets/band-images/" + this.$props.bandAbbrv + ".png");
    },
    async getBandData() {
      const response = await fetch(`${process.env.VUE_APP_API_URL}bands/${this.$props.bandAbbrv}`);
      const bandData = await response.json();
      this.band = bandData;
    },
    async getAlbumData() {
      const response = await fetch(`${process.env.VUE_APP_API_URL}bands/${this.$props.bandAbbrv}/albums`);
      const albumsData = await response.json();
      this.albums = albumsData;
    },
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

.band-image.asob {
  margin-top: -9em;
  max-height: 30vh;
}

.band-image.btmi {
  margin-top: -9em;
  max-height: 20vh;
}

.band-image.jr {
  margin-top: -9em;
  max-height: 20vh;
  transform: rotate(-2deg);
}

.band-image.av {
  margin-top: -12em;
  max-height: 26vh;
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

.band-info-container {
  position: relative;
  padding: 3vh 4vw 0 1vw;
}

.band-description {
  padding: 1.5em 0 0 1.5em;
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