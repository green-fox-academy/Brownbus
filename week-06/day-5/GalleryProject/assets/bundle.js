(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
let buttonLeft = document.getElementById('leftButton');
let buttonRight = document.getElementById('rightButton');
let galery = document.getElementById('gallery')
let selectedImage = document.getElementById('selected')
let ulTag = document.querySelector('ul')
let body = document.querySelector('body')
let submit = document.getElementById('sumbit')
//let PicCount = document.getElementById('pics')
document.body.addEventListener('keydown', onKeyPress);


let counter = 0;
let numberOfThumbs = 10 /* parseInt(PicCount.innerHTML) */;
console.log(numberOfThumbs)



function thumnailLoader(){
  
  while (ulTag.hasChildNodes()){
    ulTag.removeChild(ulTag.lastChild);
  } 
  for (let i = 0; i < numberOfThumbs; i++) {
    let liTag = document.createElement('li')
    liTag.setAttribute('id', `ID${i}`)
    liTag.setAttribute('onclick', `{selectedImage.setAttribute('src', './assets/pictures/${i}.jpg'); counter = ${i}};`)
    let imgTag = document.createElement('img')
    imgTag.setAttribute('src', `./assets/pictures/${i}.jpg`)
    imgTag.setAttribute('class', `thumb`)
    imgTag.setAttribute('id', `thumb${i}`)
    liTag.appendChild(imgTag)
    ulTag.appendChild(liTag)
  }
}  


function adder(){
  numberOfThumbs += 1;
}

thumnailLoader()

/* for (let i = 0; i < numberOfThumbs; i++) {
  scriptTag.innerHTML +=` thumb${i}.onclick = () => {selectedImage.setAttribute('src', './assets/pictures/${i}.jpg'); console.log('${i}')};`
} */

function right() {
  if (counter < numberOfThumbs-1) {
  counter++
  }
  selectedImage.setAttribute('src', `./assets/pictures/${counter}.jpg`)
  if (counter < numberOfThumbs-1) {
    thumnailLoader()
  }
}

function left() {
  if(counter > 0){
    counter--
  }
  selectedImage.setAttribute('src', `./assets/pictures/${counter}.jpg`)
  if (counter > 0) {
    thumnailLoader()
  }
}
buttonLeft.onclick = () => {
  left()
}

buttonRight.onclick = () => {
  right()
}



function onKeyPress(event) {
 
  switch (event.keyCode) {
    case 37:
      left();
      break;
    case 39:
      right();
      break;
  }
}

},{}]},{},[1]);
