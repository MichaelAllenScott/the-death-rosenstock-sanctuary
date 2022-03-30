<template>
  <div id="introContent">
    <div class="content-container">
      <div class="warning-container" id="warningNotice">
        <div>
          <img class="" src="../assets/warning-title.png" alt="Album">
        </div>
        <div class="warning-text">
          Some loud-ass music is about to play...
        </div>
        <div class="warning-text">
          We cool?
        </div>
        <div class="button-container">
          <button @click="playWithSound()">Hell Yeah!</button>
          <button @click="go()">No Thanks</button>
        </div>
      </div>
      <div id="videoContent" style="display: none;">
        <div class="logo-flex-item" id="introLogo" style="visibility: hidden">
          <img class="logo-image" src="../assets/logo.png" alt="The Death Rosenstock Sanctuary">
        </div>
        <video autoplay loop id="myVideo">
          <source src="../assets/videos/tdrs-intro.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Intro",
  methods: {
      playWithSound() {
        document.getElementById("warningNotice").style.display = "none";
        document.getElementById("videoContent").style.display = "block";
        document.getElementById("myVideo").play();
        setTimeout(function () {
          document.getElementById("introLogo").style.visibility = 'visible';
        }, 1800);
      },
      playWithoutSound() {
        document.getElementById("warningNotice").style.display = "none";
        document.getElementById("videoContent").style.display = "block";
        document.getElementById("myVideo").muted = true;
        document.getElementById("myVideo").play();
        setTimeout(function () {
          document.getElementById("introLogo").style.visibility = 'visible';
        }, 1800);
      }
    }
};
</script>

<style scoped>
  @import "../common/main.css";

  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .warning-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .warning-text {
    font-family: ManlyMenBB;
    color: white;
    font-size: 1.8em;
    letter-spacing: -0.05em;
    margin-top: 0.5em;
  }

  .button-container {
    margin-top: 1em;
  }

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -2;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    margin: .5em;
  }

  .logo-flex-item {
    margin-left: 1em;
    margin-top: 1em;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-image {
    min-height: 35vh;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

</style>
