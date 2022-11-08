<template>
  <div id="introContent">
    <div class="content-container">
      <div class="warning-container" id="warningNotice">
        <div>
          <img class="warning-header" src="@/assets/warning-title.png" alt="Album">
        </div>
        <div class="warning-text">
          Some loud music is about to play...
        </div>
        <div class="warning-text">
          We cool?
        </div>
        <img class="div-line" src="@/assets/line-white.png" alt="Decorative Line">
        <div class="button-container">
          <img class="yes-button conf-button" @click="playWithSound()" src="@/assets/buttons/hell-yeah.png" alt="Hell Yeah!">
          <img class="no-button conf-button" @click="goToHome()" src="@/assets/buttons/no-thanks.png" alt="No Thanks!">
        </div>
      </div>
      <div id="videoContent" style="display: none;">
        <div class="logo-flex-item" id="introLogo" style="visibility: hidden">
          <img class="logo-image" src="@/assets/logo.png" alt="The Death Rosenstock Sanctuary">
          <img id="enterButton" @click="goToHome()" src="@/assets/enter.png" alt="Enter" style="visibility: hidden">
        </div>
        <video autoplay loop id="myVideo">
          <source src="@/assets/videos/tdrs-intro.mp4" type="video/mp4">
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
        setTimeout(function () {
          document.getElementById("enterButton").style.visibility = 'visible';
        }, 2800);
      },
      goToHome() {
        this.$router.push({name: 'home'});
      }
    }
};
</script>

<style scoped>
  @import "../../main.css";

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

  .warning-header {
    max-height: 16vh;
    margin-bottom: .5em;
  }

  .warning-text {
    font-family: ManlyMenBB;
    color: white;
    font-size: 1.8em;
    letter-spacing: -0.05em;
    margin-top: 0.5em;
  }

  .div-line {
    margin-top: 1.5em;
    max-width: 30vw;
  }

  .button-container {
    margin-top: 2em;
  }

  .yes-button {
    margin-left: 2em;
  }

  .no-button {
    margin-left: 4em;
  }

  .conf-button {
    max-height: 12vh;
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
    flex-direction: column;
  }

  .logo-image {
    min-height: 35vh;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    background:-moz-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 25%, rgba(0, 188, 212, 0) 59%, rgba(255, 255, 255, 0) 100%);
    background:-webkit-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 25%, rgba(0, 188, 212, 0) 59%, rgba(255, 255, 255, 0) 100%);
    background:-o-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 25%, rgba(0, 188, 212, 0) 59%, rgba(255, 255, 255, 0) 100%);
    background:-ms-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 25%, rgba(0, 188, 212, 0) 59%, rgba(255, 255, 255, 0) 100%);
    background: radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 25%, rgba(0, 188, 212, 0) 59%, rgba(255, 255, 255, 0) 100%);
  }

  #enterButton {
    max-height: 6vh;
    background:-moz-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 21%, rgba(0, 188, 212, 0) 69%, rgba(255, 255, 255, 0) 100%);
    background:-webkit-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 21%, rgba(0, 188, 212, 0) 69%, rgba(255, 255, 255, 0) 100%);
    background:-o-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 21%, rgba(0, 188, 212, 0) 69%, rgba(255, 255, 255, 0) 100%);
    background:-ms-radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 21%, rgba(0, 188, 212, 0) 69%, rgba(255, 255, 255, 0) 100%);
    background:radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 1) 21%, rgba(0, 188, 212, 0) 69%, rgba(255, 255, 255, 0) 100%);
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
