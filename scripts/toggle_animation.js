import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

var container = document.getElementById('toggle_container');
var state = 'play';

var animation = lottieWeb.loadAnimation({
  container: container,
  path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});

animation.goToAndStop(14, true);

container.addEventListener('click', () => {
  if(state === 'play') {
   animation.playSegments([14, 27], true);
    state = 'pause';
  } else {
    animation.playSegments([0, 14], true);
    state = 'play';
  }
});

