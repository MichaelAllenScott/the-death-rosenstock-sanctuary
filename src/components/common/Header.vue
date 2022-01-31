<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <header>
    <div class="header-container">
      <div class="logo-flex-item">
        <img class="logo-image" src="../../assets/logo.png" alt="The Death Rosenstock Sanctuary">
      </div>
      <div class="icons-flex-container">
        <span class="header-icon material-icons">search</span>
        <span class="header-icon material-icons">question_mark</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

  .header-container {
    display: flex;
    justify-content: space-between;
    margin: .5em;
  }

  .logo-flex-item {
    margin-left: 1em;
    margin-top: 1em;
  }

  .icons-flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2em;
  }

  .header-icon {
    margin: .4em;
  }

  .logo-image {
    max-height: 20vh;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 80px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    color: rgba(255, 255, 255, 1);

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }

</style>