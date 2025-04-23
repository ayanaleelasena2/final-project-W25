
//Pulled from Glide.js open source library https://glidejs.com/ and used https://www.youtube.com/watch?v=kpAt25cOBrU for instructions
const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: 'center',
  gap: 16,
  autoplay: 3000,
  hoverpause: true
});

glide.mount();

// Control buttons
document.getElementById('pauseButton').addEventListener('click', () => {
  glide.pause();
});

document.getElementById('playButton').addEventListener('click', () => {
  glide.play();
});