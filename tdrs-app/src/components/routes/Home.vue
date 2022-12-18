<template>
  <div>
    <Header />
    <div class="bands-container animate__animated animate__zoomIn animate__faster">
      <div class="bands-header-container">
        <img class="bands-header-image" src="@/assets/bands-component/band-title.png" alt="Bands"/>
      </div>
      <div class="bands-first-row-container">
        <div class="band-image-container">
          <img class="asob-image" src="@/assets/bands-component/asob.png" alt="Arrogant Sons of Bitches" />
          <img class="asob-hover-image" @click="navigateToBand(bandAbbrvs.ASOB)" src="@/assets/bands-component/asob-hover.png" alt="Arrogant Sons of Bitches"/>
        </div>
        <div class="band-image-container">
          <img class="btmi-image" src="@/assets/bands-component/btmi.png" alt="Bomb The Music Industry"/>
          <img class="btmi-hover-image" @click="navigateToBand(bandAbbrvs.BTMI)" src="@/assets/bands-component/btmi-hover.png" alt="Bomb The Music Industry!"/>
        </div>
      </div>
      <div class="bands-second-row-container">
        <div class="band-image-container">
          <img class="jr-image" src="@/assets/bands-component/jr.png" alt="Jeff Rosenstock"/>
          <img class="jr-hover-image" @click="navigateToBand(bandAbbrvs.JR)" src="@/assets/bands-component/jr-hover.png" alt="Jeff Rosenstock" />
        </div>
        <div class="band-image-container">
          <img class="av-image" src="@/assets/bands-component/av.png" alt="Antarctigo Vespucci" />
          <img class="av-hover-image" @click="navigateToBand(bandAbbrvs.AV)" src="@/assets/bands-component/av-hover.png" alt="Antarctigo Vespucci" />
        </div>
      </div>
      <div class="bands-third-row-container"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import TransitionEngine from "@/common/TransitionEngine";
import { BandAbbrvs } from "@/common/constants";

export default {
  name: "Bands",
  components: {
    Header,
  },
  data() {
    return {
      bandAbbrvs: BandAbbrvs
    };
  },
  mounted() {
    TransitionEngine.onHomeMount();
  },
  methods: {
    navigateToBand(abbrv) {
      TransitionEngine.triggerAnimationOnContainer("bands-container", "zoomOut", "faster");
      setTimeout(() => this.$router.push({ name: `band-${abbrv}` }), 300);
    },
  },
};
</script>

<style scoped>
.bands-header-container {
  margin-top: -3em;
  display: flex;
  justify-content: center;
}

.bands-first-row-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1em;
}

.bands-second-row-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1em;
}

.bands-header-image {
  max-height: 13vh;
}

.band-image-container {
  position: relative;
}

.asob-image {
  max-height: 30vh;
}

.asob-hover-image {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.2s;
  max-height: 30vh;
}

.asob-hover-image:hover {
  opacity: 1;
  max-height: 30vh;
}

.btmi-image {
  max-height: 15vh;
}

.btmi-hover-image {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.2s;
  max-height: 15vh;
}

.btmi-hover-image:hover {
  opacity: 1;
  max-height: 15vh;
}

.jr-image {
  max-height: 12vh;
}

.jr-hover-image {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.2s;
  max-height: 12vh;
}

.jr-hover-image:hover {
  opacity: 1;
  max-height: 12vh;
}

.av-image {
  max-height: 22vh;
}

.av-hover-image {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.2s;
  max-height: 22vh;
}

.av-hover-image:hover {
  opacity: 1;
  max-height: 22vh;
}

@media (min-width:320px) {
  .bands-first-row-container {
    flex-direction: column-reverse;
    align-content: space-evenly;
    margin-bottom: 0;
    margin-top: 1.5em;
  }

  .bands-second-row-container {
    flex-direction: column;
    align-content: space-evenly;
    margin-top: 0;
  }

  .bands-header-image {
    max-height: 11vh;
    margin-top: 3em;
  }

  .asob-image {
    max-height: 25vh;
  }

  .asob-hover-image {
    max-height: 25vh;
  }

  .asob-hover-image:hover {
    max-height: 25vh;
  }

  .btmi-image {
    max-height: 11vh;
  }

  .btmi-hover-image {
    max-height: 11vh;
  }

  .btmi-hover-image:hover {
    max-height: 11vh;
  }

  .jr-image {
    max-height: 9vh;
  }

  .jr-hover-image {
    max-height: 9vh;
  }

  .jr-hover-image:hover {
    max-height: 9vh;
  }

  .av-image {
    max-height: 17vh;
  }

  .av-hover-image {
    max-height: 17vh;
  }

  .av-hover-image:hover {
    max-height: 17vh;
  }
}

@media (min-width:481px) {
  .bands-first-row-container {
    flex-direction: column-reverse;
    align-content: space-evenly;
    margin-bottom: 0;
    margin-top: 1.5em;
  }

  .bands-second-row-container {
    flex-direction: column;
    align-content: space-evenly;
    margin-top: 0;
  }

  .bands-header-image {
    max-height: 11vh;
    margin-top: 3em;
  }

  .asob-image {
    max-height: 25vh;
  }

  .asob-hover-image {
    max-height: 25vh;
  }

  .asob-hover-image:hover {
    max-height: 25vh;
  }

  .btmi-image {
    max-height: 11vh;
  }

  .btmi-hover-image {
    max-height: 11vh;
  }

  .btmi-hover-image:hover {
    max-height: 11vh;
  }

  .jr-image {
    max-height: 9vh;
  }

  .jr-hover-image {
    max-height: 9vh;
  }

  .jr-hover-image:hover {
    max-height: 9vh;
  }

  .av-image {
    max-height: 17vh;
  }

  .av-hover-image {
    max-height: 17vh;
  }

  .av-hover-image:hover {
    max-height: 17vh;
  }
}

@media (min-width:767px) {
  .bands-first-row-container {
    flex-direction: row;
  }

  .bands-second-row-container {
    flex-direction: row;
  }

  .bands-header-image {
    max-height: 10vh;
    margin-top: 3em;
  }

  .asob-image {
    max-height: 25vh;
  }

  .asob-hover-image {
    max-height: 25vh;
  }

  .asob-hover-image:hover {
    max-height: 25vh;
  }

  .btmi-image {
    max-height: 13vh;
  }

  .btmi-hover-image {
    max-height: 13vh;
  }

  .btmi-hover-image:hover {
    max-height: 13vh;
  }

  .jr-image {
    max-height: 9vh;
  }

  .jr-hover-image {
    max-height: 9vh;
  }

  .jr-hover-image:hover {
    max-height: 9vh;
  }

  .av-image {
    max-height: 15vh;
  }

  .av-hover-image {
    max-height: 15vh;
  }

  .av-hover-image:hover {
    max-height: 15vh;
  }
}

@media (min-width:1025px) {
  .bands-first-row-container {
    flex-direction: row;
  }

  .bands-second-row-container {
    flex-direction: row;
  }

  .bands-header-image {
    max-height: 13vh;
  }

  .asob-image {
    max-height: 30vh;
  }

  .asob-hover-image {
    max-height: 30vh;
  }

  .asob-hover-image:hover {
    max-height: 30vh;
  }

  .btmi-image {
    max-height: 15vh;
  }

  .btmi-hover-image {
    max-height: 15vh;
  }

  .btmi-hover-image:hover {
    max-height: 15vh;
  }

  .jr-image {
    max-height: 12vh;
  }

  .jr-hover-image {
    max-height: 12vh;
  }

  .jr-hover-image:hover {
    max-height: 12vh;
  }

  .av-image {
    max-height: 22vh;
  }

  .av-hover-image {
    max-height: 22vh;
  }

  .av-hover-image:hover {
    max-height: 22vh;
  }
}

@media (min-width:1281px) {
  .bands-first-row-container {
    flex-direction: row;
  }

  .bands-second-row-container {
    flex-direction: row;
  }

  .bands-header-image {
    max-height: 13vh;
  }

  .asob-image {
    max-height: 30vh;
  }

  .asob-hover-image {
    max-height: 30vh;
  }

  .asob-hover-image:hover {
    max-height: 30vh;
  }

  .btmi-image {
    max-height: 15vh;
  }

  .btmi-hover-image {
    max-height: 15vh;
  }

  .btmi-hover-image:hover {
    max-height: 15vh;
  }

  .jr-image {
    max-height: 12vh;
  }

  .jr-hover-image {
    max-height: 12vh;
  }

  .jr-hover-image:hover {
    max-height: 12vh;
  }

  .av-image {
    max-height: 22vh;
  }

  .av-hover-image {
    max-height: 22vh;
  }

  .av-hover-image:hover {
    max-height: 22vh;
  }
}

</style>
