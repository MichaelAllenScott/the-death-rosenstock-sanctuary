<template>
  <Intro v-if="showIntro" />
  <Base v-else />
</template>

<script>
  import Intro from  "@/components/Intro.vue";
  import Base from "@/components/Base.vue"

  export default {
    name: 'App',
    components: {
      Intro,
      Base
    },
    data() {
      return {
        showIntro: false
      }
    },
    created() {
      let introCookie = this.$cookies.get("tdrs-intro");

      if (!introCookie) {
        this.$cookies.set("tdrs-intro", true);
        this.showIntro = true;
      }
    }
  }
</script>

<style>
  body {
    background-image: url("./assets/chalkboard.jpg");
    background-repeat: repeat;
    margin: 0;
  }
</style>