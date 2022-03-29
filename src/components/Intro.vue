<template>
  <div>
    <div class="logo-flex-item">
      <img class="logo-image" src="../assets/logo.png" alt="The Death Rosenstock Sanctuary">
    </div>
    <video autoplay loop id="myVideo">
      <source src="../assets/videos/tdrs-intro.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: "Intro",
  mounted() {
    setTimeout(function () {
        var vid = document.getElementById("myVideo");
        vid.play();
    }, 5000);
    
  },
};
</script>

<style scoped>
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
