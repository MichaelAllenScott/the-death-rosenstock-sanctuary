<template>
  <div>
    <div v-bind:class="['collapsible-panel', 'hvr-grow-shadow', bandAbbrv]" @click="headerClick">
      <img class="collapsible-panel-chevron" :class="{ closed: panelClosed }" src="@/assets/icons/chevron.png" alt="Jeff's Explanation Chevron">
      <img class="collapsible-panel-header" src="@/assets/panel-headers/jeffs-explanation.png" alt="Jeff's Explanation">
    </div>
    <div v-bind:class="['collapsible-panel-background', bandAbbrv, { closed: panelClosed }]">
      <div class="explanation-container basic-panel-text">
        {{explanationText}}
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: "JeffsExplanationPanel",
    props: {
      bandAbbrv: String,
      explanationText: String
    },
    data() {
      return {
        panelClosed: false
      }
    },
    mounted() {
    },
    methods: {
      headerClick() {
        this.panelClosed = !this.panelClosed;
      }
    }
  };
</script>


<style scoped>

  /* Grow Shadow */
  .hvr-grow-shadow {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
  }
  .hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }

  .explanation-container {
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
  }
    
</style>