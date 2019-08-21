let typedText = document.querySelector('.introduction-box h2');
let projectBox = document.querySelectorAll('.project-box');

window.addEventListener('load', () => {

  // typing start after page load
  typedText.classList.add('anim-typewriter');
  setTimeout(() => {
    introduction.classList.add('introduction-shadow');
  }, 2600);

  // check if device is touchable and remove hover from portfolios
  hasTouch();
});


let hasTouch = () => {
  if ('ontouchstart' in window || 'ontouch' in window) {
    projectBox.forEach(box => box.classList.add('project-box-touch-device'))
  }
}

// slide header background image

const bgImage = document.querySelector('.header');
let lastScrollTop = 0;
let bgY = 75;

window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let bgY = st == 0 ? 75 : 75 - (st * 0.04);
  bgImage.style.backgroundPosition = `50% ${bgY}%`;
}, false);


//  hangle menu and navnav

const menuIcon = document.querySelector('.nav-icon');
const menuLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const introduction = document.querySelector('.introduction-box');
const arrow = document.querySelector('.arrow-box');

let toggleMenu = () => {
  introduction.classList.toggle('hide');
  arrow.classList.toggle('hide');
  menuIcon.classList.toggle('open');
  menuLinks.classList.toggle('show-links');
  nav.classList.toggle('nav-collapse');
};

menuIcon.addEventListener('click', toggleMenu);
menuLinks.addEventListener('click', toggleMenu);