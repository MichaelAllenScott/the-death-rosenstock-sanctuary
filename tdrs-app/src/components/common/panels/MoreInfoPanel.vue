<template>
  <div>
    <div v-bind:class="['collapsible-panel', 'hvr-grow-shadow', bandAbbrv]" @click="headerClick">
      <img class="collapsible-panel-chevron" :class="{ closed: panelClosed }" src="@/assets/icons/chevron.png" alt="More Info Chevron">
      <img class="collapsible-panel-header" src="@/assets/panel-headers/info.png" alt="More Info">
    </div>
    <div v-bind:class="['collapsible-panel-background', bandAbbrv, { closed: panelClosed }]">
      <div class="more-info-container basic-panel-text">
        {{infoText}}
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: "MoreInfoPanel",
    props: {
      bandAbbrv: String,
      infoText: String
    },
    data() {
      return {
        panelClosed: false
      }
    },
    methods: {
      headerClick() {
        this.panelClosed = !this.panelClosed;
      }
    }
  };
</script>


<style scoped>

  .more-info-container {
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
  }
    
</style>