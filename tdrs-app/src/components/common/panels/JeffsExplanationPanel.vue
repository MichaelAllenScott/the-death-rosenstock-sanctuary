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
  .explanation-container {
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
  }
    
</style>