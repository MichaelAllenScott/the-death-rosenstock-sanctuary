<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="animate__animated animate__flipInX animate__faster">
    <div class="section">
      <img class="panel-header" src="../../../assets/panel-headers/disc.png" alt="Discography">
    </div>
    <div class="panel-background">
    </div>
  </div>
</template>


<script>
  import allBandData from "@/data/bands.json";
  import bandDataFunctions from "@/common/commonFunctions";

  export default {
    name: "DiscographyPanel",
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
    padding: .8em;
    margin: .5em 12em 0 12em;
    border-radius: 5px;
    z-index: 1;
    position: relative;
  }

  .panel-header {
    max-height: 7vh;
  }

  .panel-background {
    background-image: url("../../../assets/old_wall.png");
    background-repeat: repeat;
    padding: 18em;
    margin: -1em 15em .5em 15em;
    border-radius: 5px;
    z-index: -1;
    position: relative;
    border: #AD0F35 .3em solid;
    border-radius: 5px;
  }
</style>