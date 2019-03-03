'use strict';
let buttonLeft = document.getElementById('leftButton');
let buttonRight = document.getElementById('rightButton');
let galery = document.getElementById('gallery')
let selectedImage = document.getElementById('selected')
let ulTag = document.querySelector('ul')
let body = document.querySelector('body')
let submit = document.getElementById('sumbit')
document.body.addEventListener('keydown', onKeyPress);

//BROWSERIFY INSTALLED
const fs = require('browserify-fs');
//BROWSERIFY INSTALLED

const dir = './assets/pictures';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});



let counter = 0;
let numberOfThumbs = 10;



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
