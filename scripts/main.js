var miImage = document.querySelector('img');

miImage.onclick = function() {
  var miSrc = miImage.getAttribute('src');
  if (miSrc === 'images/mario.png') {
    miImage.setAttribute('src', 'images/yosho.png');
  } else {
    miImage.setAttribute('src', 'images/mario.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}