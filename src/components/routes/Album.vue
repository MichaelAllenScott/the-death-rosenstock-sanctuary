<template>
  <transition>
    <div class="section">
    </div>
  </transition>
</template>

<script>
  import allBandData from "@/data/bands.json";
  import bandDataFunctions from "@/common/commonFunctions";

  export default {
    name: "Album",
    props: {
      bandEnum: Number
    },
    data() {
      return {
        bandData: {
          name: ""
        },
        albumData: {
          name: ""
        }
      }
    },
    created() {
      let albumId = this.$route.params.albumId;
      this.bandData = bandDataFunctions.retrieveBandDataWithId(this.bandEnum, allBandData);
      this.albumData = bandDataFunctions.retrieveAlbumDataWithBandAndId(albumId, this.bandData);
    }
  };
</script>

<style scoped>

</style>