<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Router from '../router'; 

export default {
  name: "Base",
  data() {
    return {
      showIntro: false
    }
  },
  created() {
    let introCookie = this.$cookies.get("tdrs-intro");

    if (introCookie) {
      this.$cookies.set("tdrs-intro", true);
      this.showIntro = true;
      Router.push('intro');
    } else {
      Router.push('/home');
    }
  }
};
</script>

<style>


</style>
