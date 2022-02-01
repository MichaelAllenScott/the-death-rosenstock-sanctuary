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
    <div class="panel-background">
    </div>
    <DiscographyPanel />
  </div>
</template>


<script>
  import allBandData from "@/data/bands.json";
  import bandDataFunctions from "@/common/commonFunctions";
  import DiscographyPanel from "@/components/common/panels/DiscographyPanel";

  export default {
    name: "Band",
    components: {
      DiscographyPanel
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
  .band-container {
    margin-top: -3em;
  }

  .section {
    background-image: linear-gradient(#E81648, #AD0F35);
    padding: 1.5em;
    margin: 3em 12em 0 12em;
    border-radius: 5px;
    z-index: 1;
    position: relative;
  }

  .asob-header-image-container {
    display: flex;
    justify-content: space-evenly;
  }

  .asob-image {
    max-height: 30vh;
    margin-top: -225px;
    z-index: 2;
    position: relative;
  }

  .panel-background {
    background-image: url("../../assets/old_wall.png");
    background-repeat: repeat;
    padding: 18em;
    margin: -7em 15em 3em 15em;
    border-radius: 5px;
    z-index: -1;
    position: relative;
    border: #AD0F35 .3em solid;
    border-radius: 5px;
  }
</style>