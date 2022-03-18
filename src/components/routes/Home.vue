<template>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="bands-container">
    <div class="bands-header-container">
      <img class="bands-header-image" src="../../assets/bands-component/band-title.png" alt="Bands">
    </div>
    <div class="bands-first-row-container">
      <img class="asob-image animate__animated animate__bounceIn animate__faster" src="../../assets/bands-component/asob.png" alt="Arrogant Sons of Bitches">
      <img  class="asob-hover-image animate__animated animate__bounceIn animate__faster" 
            style="display: none" 
            @click="navigateToBand()" 
            src="../../assets/bands-component/asob-hover.png" 
            alt="Arrogant Sons of Bitches">
      <img class="btmi-image animate__animated animate__bounceIn animate__faster" src="../../assets/bands-component/btmi.png" alt="Bomb The Music Industry">
      <img  class="btmi-hover-image  animate__animated animate__bounceIn animate__faster" 
            style="display: none" 
            @click="this.$router.push({name: 'band-btmi'})" 
            src="../../assets/bands-component/btmi-hover.png" 
            alt="Bomb The Music Industry!">
    </div>
    <div class="bands-second-row-container">
      <img class="jr-image animate__animated animate__bounceIn animate__faster" src="../../assets/bands-component/jr.png" alt="Jeff Rosenstock">
      <img  class="jr-hover-image animate__animated animate__bounceIn animate__faster" 
            style="display: none" 
            @click="this.$router.push({name: 'band-jr'})" 
            src="../../assets/bands-component/jr-hover.png" 
            alt="Jeff Rosenstock">
      <img class="av-image animate__animated animate__bounceIn animate__faster" src="../../assets/bands-component/av.png" alt="Antarctigo Vespucci">
      <img  class="av-hover-image animate__animated animate__bounceIn animate__faster" 
            style="display: none" 
            @click="this.$router.push({name: 'band-av'})" 
            src="../../assets/bands-component/av-hover.png" 
            alt="Antarctigo Vespucci">
    </div>
      <div class="bands-third-row-container">
    </div>
  </div>
</template>

<script>
export default {
  name: "Bands",
  mounted() {

    const logo = document.querySelector('.logo-image');
    logo.classList.remove("small");

    const asobWhite = document.querySelector('.asob-image');
    const asobHover = document.querySelector('.asob-hover-image');

    asobWhite.addEventListener('mouseover', () => {
        asobHover.style.display = "block";
        asobWhite.style.display = "none";
    });

    asobHover.addEventListener('mouseout', () => {
        asobWhite.style.display = "block";
        asobHover.style.display = "none";
    });

    const btmiWhite = document.querySelector('.btmi-image');
    const btmiHover = document.querySelector('.btmi-hover-image');

    btmiWhite.addEventListener('mouseover', () => {
        btmiHover.style.display = "block";
        btmiWhite.style.display = "none";
    });

    btmiHover.addEventListener('mouseout', () => {
        btmiWhite.style.display = "block";
        btmiHover.style.display = "none";
    });

    const jrWhite = document.querySelector('.jr-image');
    const jrHover = document.querySelector('.jr-hover-image');

    jrWhite.addEventListener('mouseover', () => {
        jrHover.style.display = "block";
        jrWhite.style.display = "none";
    });

    jrHover.addEventListener('mouseout', () => {
        jrWhite.style.display = "block";
        jrHover.style.display = "none";
    });

    const avWhite = document.querySelector('.av-image');
    const avHover = document.querySelector('.av-hover-image');

    avWhite.addEventListener('mouseover', () => {
        avHover.style.display = "block";
        avWhite.style.display = "none";
    });

    avHover.addEventListener('mouseout', () => {
        avWhite.style.display = "block";
        avHover.style.display = "none";
    });
  },
  methods: {
    navigateToBand() {
      const bandsContainer = document.querySelector('.bands-container');
      bandsContainer.classList.add("animate__animated");
      bandsContainer.classList.add("animate__faster");
      bandsContainer.classList.add("animate__fadeOutLeftBig");
      setTimeout(() => this.$router.push({name: 'band-asob'}), 300);
    }
  }
};
</script>

<style scoped>
  .bands-header-container {
    margin-top: -3em;
    display: flex;
    justify-content: center;
  }

  .bands-first-row-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1em;
  }

  .bands-second-row-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1em;
  }

  .bands-header-image {
    max-height: 13vh;
  }

  .asob-image {
    max-height: 30vh;
  }

  .asob-hover-image {
    max-height: 30vh;
  }

  .btmi-image {
    max-height: 13vh;
  }

  .btmi-image {
    max-height: 15vh;
  }

  .btmi-hover-image {
    max-height: 15vh;
  }

  .jr-image {
    max-height: 12vh;
  }

  .jr-hover-image {
    max-height: 12vh;
  }

  .av-image {
    max-height: 22vh;
  }

  .av-hover-image {
    max-height: 22vh;
  }

</style>
