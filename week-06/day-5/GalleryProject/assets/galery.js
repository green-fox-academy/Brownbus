'use strict';
let buttonLeft = document.getElementById('leftButton');
let buttonRight = document.getElementById('rightButton');
let galery = document.getElementById('gallery')
let selectedImage = document.querySelector('img')
let ulTag = document.querySelector('ul')
let body = document.querySelector('body')
document.body.addEventListener('keydown', onKeyPress);


let counter = 0;
let numberOfThumbs = 10;

function right() {
  selectedImage.setAttribute('src', `./assets/pictures/${counter}.jpg`)
  if (counter < 9) {
    counter++
  }
}

function left() {
  selectedImage.setAttribute('src', `./assets/pictures/${counter}.jpg`)
  if (counter > 0) {
    counter--
  }
}
buttonLeft.onclick = () => {
  left()
}

buttonRight.onclick = () => {
  right()
}

for(let i = 0; i < numberOfThumbs; i++){
let liTag =document.createElement('li')
liTag.setAttribute('id', `ID${i}`)
let imgTag =document.createElement('img')
imgTag.setAttribute('src', `./assets/pictures/${i}.jpg` )
imgTag.setAttribute('class', `thumb` )
imgTag.setAttribute('id', `thumb${i}` )
liTag.appendChild(imgTag)
ulTag.appendChild(liTag)
}

let scriptTag = document.createElement('script')
for(let i = 0; i < numberOfThumbs; i++){
  scriptTag.innerHTML += `\n thumb${i} = document.getElementById('thumb${i}'); \n thumb${i}.onclick = () => {selectedImage.setAttribute('src', './assets/pictures/${i}.jpg'); counter = ${i}};  \n`
}

body.appendChild(scriptTag)


/* `<img src='./assets/pictures/0.jpg' alt="this is an image" class="thumb" id="thumb1"/>` */

function onKeyPress(event) {
switch (event.keyCode) {
    case 37:
    left();
    break;
    case 39:
    right();
    break;
}}