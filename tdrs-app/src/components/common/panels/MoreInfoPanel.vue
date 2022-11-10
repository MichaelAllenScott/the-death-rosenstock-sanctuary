<template>
  <div>
    <div v-bind:class="['collapsible-panel', 'hvr-grow-shadow', bandAbbrv]" @click="headerClick">
      <img class="collapsible-panel-chevron" :class="{ closed: panelClosed }" src="@/assets/icons/chevron.png" alt="More Info Chevron">
      <img class="collapsible-panel-header" src="@/assets/panel-headers/info.png" alt="More Info">
    </div>
    <div v-bind:class="['collapsible-panel-background', bandAbbrv, { closed: panelClosed }]">
      <div class="more-info-container basic-panel-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Neque laoreet suspendisse interdum consectetur libero id. Nibh sed pulvinar proin gravida hendrerit lectus a. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Dolor sed viverra ipsum nunc aliquet bibendum. In eu mi bibendum neque egestas congue quisque egestas diam. Id velit ut tortor pretium viverra suspendisse. Sed felis eget velit aliquet sagittis id consectetur. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Aliquet bibendum enim facilisis gravida neque. Nibh nisl condimentum id venenatis a condimentum vitae. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Arcu bibendum at varius vel. Pellentesque massa placerat duis ultricies. Auctor elit sed vulputate mi sit amet mauris commodo quis. Vitae et leo duis ut diam quam nulla porttitor massa. Non sodales neque sodales ut etiam sit. Rutrum tellus pellentesque eu tincidunt tortor aliquam.

Sit amet mauris commodo quis. Iaculis urna id volutpat lacus laoreet non. Eget arcu dictum varius duis at. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Cum sociis natoque penatibus et magnis dis parturient montes. Orci dapibus ultrices in iaculis nunc sed. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. A cras semper auctor neque vitae tempus quam. Purus in mollis nunc sed id semper.

Tortor vitae purus faucibus ornare suspendisse sed. Vitae auctor eu augue ut lectus. Et pharetra pharetra massa massa ultricies mi. Arcu risus quis varius quam quisque id diam. Sit amet luctus venenatis lectus magna fringilla. At volutpat diam ut venenatis tellus in metus vulputate eu. Iaculis at erat pellentesque adipiscing. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Aliquet sagittis id consectetur purus ut. Tincidunt ornare massa eget egestas purus.

Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Leo a diam sollicitudin tempor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Habitant morbi tristique senectus et netus et. Quisque sagittis purus sit amet volutpat consequat mauris. Sapien pellentesque habitant morbi tristique. Tempor orci eu lobortis elementum nibh tellus. Neque convallis a cras semper auctor neque vitae tempus quam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.

A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eget nunc scelerisque viverra mauris in aliquam sem. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Aliquam malesuada bibendum arcu vitae elementum curabitur. Vestibulum sed arcu non odio euismod lacinia at quis. Ultrices vitae auctor eu augue ut. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed euismod nisi porta lorem mollis. Pulvinar etiam non quam lacus. Iaculis eu non diam phasellus vestibulum lorem sed risus. Mollis nunc sed id semper risus in hendrerit. Erat pellentesque adipiscing commodo elit. Et leo duis ut diam quam nulla. Urna molestie at elementum eu facilisis sed. Nullam non nisi est sit amet facilisis magna etiam. Egestas dui id ornare arcu odio.
    
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: "MoreInfoPanel",
    props: {
      bandAbbrv: String
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


  .more-info-container {
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
  }
    
</style>