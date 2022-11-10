const TransitionEngine = {
  onPanelMount() {
    window.scrollTo(0, 0);
    const logo = document.querySelector('.logo-image');
    logo.classList.add("small");
  },
  
  onHomeMount() {
    const logo = document.querySelector('.logo-image');
    logo.classList.remove("small");
  },

  triggerAnimationOnContainer(className, animationType, speed) {
    const container = document.querySelector(`.${className}`);
    container.classList.add("animate__animated");
    container.classList.add(`animate__${animationType}`);
    container.classList.add(`animate__${speed}`);
  }
}

export default TransitionEngine;