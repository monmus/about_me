let typedText = document.querySelector('.introduction-box h2');
let projectBox = document.querySelectorAll('.project-box');

window.addEventListener('load', () => {

  // typing start after page load
  typedText.classList.add('anim-typewriter');
  // setTimeout(() => {
  //   introduction.classList.add('introduction-shadow');
  // }, 2600);

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


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCiCOA1wWBFdReGAF6rR8GJ7A-KWa9fG28",
  authDomain: "contactform-2c4d3.firebaseapp.com",
  databaseURL: "https://contactform-2c4d3.firebaseio.com",
  projectId: "contactform-2c4d3",
  storageBucket: "",
  messagingSenderId: "1081101640993",
  appId: "1:1081101640993:web:3b21131b1033cbe6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference messages collection
var messagesRef = firebase.database().ref("messages");



//listen for form submit

const form = document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  //save message
  saveMessage(name, email, message)

  //show alert
  var alertBlock = document.querySelector('.alert').style.display = 'block';

  // hide alert after 5 seconds
  setTimeout(function(){
  alertBlock = document.querySelector('.alert').style.display = 'none';

}, 4000)

  setTimeout(function(){
    document.getElementById('contactForm').reset();
  }, 4000)

// document.getElementById('contactForm').reset();
}

//function to get form values
function getInputVal(id){
  return document.getElementById(id).value
}

//save the message to firebase

function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}