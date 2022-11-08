const TransitionEngine = {
  onPanelMount() {
    window.scrollTo(0, 0);
    const logo = document.querySelector('.logo-image');
    logo.classList.add("small");
  },
  
  onHomeMount() {
    const logo = document.querySelector('.logo-image');
    logo.classList.remove("small");
  }
}

export default TransitionEngine;