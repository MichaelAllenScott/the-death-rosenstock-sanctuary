<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from  "@/components/common/Header.vue";

export default {
  name: "Base",
  components: {
    Header
  }
};
</script>

<style>


</style>
