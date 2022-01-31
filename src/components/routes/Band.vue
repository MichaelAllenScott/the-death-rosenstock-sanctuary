<template>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="band-container animate__animated animate__fadeInRightBig animate__faster">
    <div class="section">
      <button @click="navigateToBands()">Back</button>
    </div>
    <div class="asob-header-image-container">
      <div class="asob-header-image-item">
      <img  class="asob-image" src="../../assets/bands-component/asob-hover.png" alt="Arrogant Sons of Bitches">
      </div>
    </div>
  </div>
</template>

<script>
import allBandData from "@/data/bands.json";
import bandDataFunctions from "@/common/commonFunctions";

export default {
  name: "Band",
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
  methods: {
    navigateToBands() {
      const bandsContainer = document.querySelector('.band-container');
      bandsContainer.classList.remove("animate__fadeInRightBig");
      bandsContainer.classList.add("animate__fadeOutRightBig");
      setTimeout(() => this.$router.push({name: 'bands'}), 300);
    }
  }
};
</script>

<style scoped>

 .logo-image {
    max-height: 10vh !important;
  }

.section {
  background-image: linear-gradient(#E81648, #AD0F35);
  padding: 2em;
  margin: 3em 7em 3em 7em;
  border-radius: 5px;
  z-index: 0;
}

.asob-header-image-container {
  display: flex;
  justify-content: space-evenly;
}

.asob-image {
  max-height: 30vh;
  margin-top: -225px;
  z-index: 9;
}

</style>