'use strict';
let buttonLeft = document.getElementById('leftButton');
let buttonRight = document.getElementById('rightButton');
let galery = document.getElementById('gallery')
let selectedImage = document.getElementById('selected')
let ulTag = document.querySelector('ul')
let body = document.querySelector('body')
let submit = document.getElementById('sumbit')
let PicCount = document.getElementById('pics')
document.body.addEventListener('keydown', onKeyPress);

let counter = 0;
let numberOfThumbs = parseInt(PicCount.innerHTML);


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

function uploadPicSetter(){
  selectedImage.setAttribute('src', `./assets/pictures/${numberOfThumbs-1}.jpg`)
}


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
