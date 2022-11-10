<template>
  <div>
    <Header />
    <div class="album-container animate__animated animate__fadeIn animate__fastest">
      <div v-bind:class="['panel-top', bandAbbrv]">
        <div class="back-flex-group">
          <div class="back-arrow-container">
            <img
              class="back-arrow"
              @click="navigateToBand()"
              src="@/assets/icons/back-arrow.png"
              alt="Back"
            />
            <img
              class="back-arrow-hover"
              @click="navigateToBand()"
              src="@/assets/icons/back-arrow-hover.png"
              alt="Back"
            />
          </div>
          <div>
            <img
              v-bind:class="['back-band-image', bandAbbrv]"
              :src="getBandUrl()"
            />
          </div>
        </div>
        <img
          class="panel-header"
          src="@/assets/panel-headers/album.png"
          alt="Album"
        />
        <div class="end-flex-group"></div>
      </div>
      <div v-bind:class="['panel-background', bandAbbrv]">
        <img
          class="album-image"
          :src="getAlbumUrl()"
          :alt="album.name"
        />
        <div class="album-title-container">
          <p class="album-title">{{ album.name }}</p>
          <img
            class="album-title-line"
            src="@/assets/line.png"
            alt="Decorative Line"
          />
          <p class="description-text basic-panel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            massa ultricies mi quis hendrerit dolor magna. Adipiscing vitae
            proin sagittis nisl rhoncus mattis. Mattis ullamcorper velit sed
            ullamcorper morbi tincidunt. Ipsum faucibus vitae aliquet nec
            ullamcorper sit. Elit sed vulputate mi sit amet mauris. Senectus et
            netus et malesuada fames. Nunc mi ipsum faucibus vitae aliquet nec
            ullamcorper. Quam quisque id diam vel quam elementum. Mi bibendum
            neque egestas congue quisque egestas diam in. Bibendum est ultricies
            integer quis auctor elit sed. Etiam erat velit scelerisque in dictum
            non consectetur a. Lacus laoreet non curabitur gravida arcu. Sed
            tempus urna et pharetra pharetra massa massa ultricies mi. Leo a
            diam sollicitudin tempor. Odio ut enim blandit volutpat. Sed euismod
            nisi porta lorem mollis aliquam ut porttitor leo. Cursus in hac
            habitasse platea dictumst quisque sagittis purus. Ultrices mi tempus
            imperdiet nulla. Varius morbi enim nunc faucibus a. Malesuada
            pellentesque elit eget gravida cum. Aliquam nulla facilisi cras
            fermentum odio eu. Dui faucibus in ornare quam viverra. Tincidunt
            vitae semper quis lectus nulla at volutpat. Diam vel quam elementum
            pulvinar etiam non quam lacus. Justo laoreet sit amet cursus sit
            amet dictum sit. Elit pellentesque habitant morbi tristique. Egestas
            egestas fringilla phasellus faucibus scelerisque eleifend donec
            pretium. Porttitor massa id neque aliquam vestibulum. Velit
            dignissim sodales ut eu sem. Neque sodales ut etiam sit.
          </p>
        </div>
        <div></div>
      </div>
      <SongsPanel
        @navigate-to-song="navigateToSong"
        :songs="album.songs"
        :albumOrderIndex="album.orderIndex"
        :bandAbbrv="bandAbbrv"
      />
      <JeffsExplanationPanel :bandAbbrv="bandAbbrv" />
      <MoreInfoPanel :bandAbbrv="bandAbbrv" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import SongsPanel from "@/components/common/panels/SongsPanel";
import MoreInfoPanel from "@/components/common/panels/MoreInfoPanel";
import JeffsExplanationPanel from "@/components/common/panels/JeffsExplanationPanel";
import TransitionEngine from "@/common/TransitionEngine";

export default {
  name: "Album",
  components: {
    SongsPanel,
    Header,
    MoreInfoPanel,
    JeffsExplanationPanel,
  },
  props: {
    bandEnum: Number,
    bandAbbrv: String,
  },
  data() {
    return {
      albumOrderIndex: this.$route.params.albumOrderIndex,
      album: {
        name: "",
        orderIndex: 0,
      },
    };
  },
  mounted() {
    TransitionEngine.onPanelMount();
    this.getAlbumData();
  },
  created() {
  },
  methods: {
    navigateToBand() {
      const albumContainer = document.querySelector(".album-container");
      albumContainer.classList.remove("animate__fadeIn");
      setTimeout(
        () => this.$router.push({ name: `band-${this.$props.bandAbbrv}` }),
        300
      );
    },
    navigateToSong(songOrderIndex) {
      const albumContainer = document.querySelector(".album-container");
      albumContainer.classList.remove("animate__fadeIn");
      setTimeout(
        () =>
          this.$router.push({
            name: `song-${this.$props.bandAbbrv}`,
            params: { albumOrderIndex: this.albumOrderIndex, songOrderIndex: songOrderIndex },
          }),
        300
      );
    },
    getAlbumUrl() {
      var images = require.context("@/assets/album-images", true, /\.jpg$/);
      return images(`./${this.$props.bandAbbrv}/` + this.albumOrderIndex + ".jpg");
    },
    getBandUrl() {
      var images = require.context("@/assets/bands-component", false, /\.png$/);
      return images(`./${this.$props.bandAbbrv}-hover.png`);
    },
    async getAlbumData() {
      const response = await fetch(`http://localhost:8080/api/bands/${this.$props.bandAbbrv}/albums/${this.albumOrderIndex}`);
      const albumData = await response.json();
      this.album = albumData;
    }
  },
};
</script>

<style scoped>
@import "../../main.css";

.album-image {
  max-height: 40vh;
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
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

.back-band-image {
  max-height: 8vh;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: contain;
  transform: rotate(-5deg);
  z-index: 3;
  margin-top: -1em;
  margin-bottom: -1em;
  margin-left: 1em;
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
}

.back-band-image.asob {
  max-height: 14vh;
  margin-top: -4em;
  margin-bottom: -4em;
}

.back-band-image.btmi {
  max-height: 10vh;
  margin-top: -1em;
  margin-bottom: -1em;
}

.back-band-image.av {
  max-height: 12vh;
  margin-top: -3em;
  margin-bottom: -3em;
}
</style>