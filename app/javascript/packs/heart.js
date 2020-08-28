import anime from 'animejs/lib/anime.es.js';

const like_animation = anime({
  targets: '.heart',
  fill: ['#ff3838'],
  scale: [{
    value: 1
  }, {
    value: 1.8
  }, {
    value: 0.8
  }, {
    value: 1,
  }],
  autoplay: false,
  easing: 'linear',
  duration: 400,
});


document.querySelector(".heart").onclick = function(){
  like_animation.play();
  like_animation.finished.then(() => {
  like_animation.reverse();
})
}
