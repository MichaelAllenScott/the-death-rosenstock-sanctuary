<template>
  <div>
    <Header />
    <div class="song-container animate__animated animate__fadeIn animate__fastest">
      <div v-bind:class="['panel-top', bandAbbrv]">
        <div class="back-flex-group">
          <div class="back-arrow-container">
            <img
              class="back-arrow"
              @click="navigateToAlbum()"
              src="@/assets/icons/back-arrow.png"
              alt="Back"
            />
            <img
              class="back-arrow-hover"
              @click="navigateToAlbum()"
              src="@/assets/icons/back-arrow-hover.png"
              alt="Back"
            />
          </div>
          <div>
            <img
              v-bind:class="['back-album-image', bandAbbrv]"
              :src="getAlbumUrl()"
            />
          </div>
        </div>
        <img
          class="panel-header"
          src="@/assets/panel-headers/song.png"
          alt="Album"
        />
        <div class="end-flex-group"></div>
      </div>
      <div v-bind:class="['panel-background', bandAbbrv]">
        <div class="song-title-container">
          <p class="song-title">{{ song.name }}</p>
          <img
            class="song-title-line"
            src="@/assets/line.png"
            alt="Decorative Line"
          />
          <iframe class="song-video" :src="song.youtubeUrl"></iframe>
        </div>
      </div>
    </div>
    <JeffsExplanationPanel :bandAbbrv="bandAbbrv" />
    <MoreInfoPanel :bandAbbrv="bandAbbrv" />
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import MoreInfoPanel from "@/components/common/panels/MoreInfoPanel";
import JeffsExplanationPanel from "@/components/common/panels/JeffsExplanationPanel";
import TransitionEngine from "@/common/TransitionEngine";

export default {
  name: "Song",
  components: {
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
      songOrderIndex: this.$route.params.songOrderIndex,
      song: {
        name: "",
        id: 0,
      },
    };
  },
  mounted() {
    TransitionEngine.onPanelMount();
    this.getSongData();
  },
  methods: {
    navigateToAlbum() {
      const songContainer = document.querySelector(".song-container");
      songContainer.classList.remove("animate__fadeIn");
      setTimeout(
        () =>
          this.$router.push({
            name: `album-${this.$props.bandAbbrv}`,
            params: { albumId: this.albumOrderIndex },
          }),
        300
      );
    },
    getAlbumUrl() {
      var images = require.context("@/assets/album-images", true, /\.jpg$/);
      return images(
        `./${this.$props.bandAbbrv}/${this.albumOrderIndex}.jpg`
      );
    },
    async getSongData() {
      const response = await fetch(`http://localhost:8080/api/bands/${this.$props.bandAbbrv}/albums/${this.albumOrderIndex}/songs/${this.songOrderIndex}`);
      const songData = await response.json();
      this.song = songData;
    }
  },
};
</script>

<style scoped>
@import "../../main.css";

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

.back-album-image {
  max-height: 15vh;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: contain;
  transform: rotate(-5deg);
  z-index: 3;
  margin-top: -4em;
  margin-bottom: -4em;
  margin-left: 1em;
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
}
</style>