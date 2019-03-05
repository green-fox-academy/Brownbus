'use strict';
let buttonLeft = document.getElementById('leftButton');
let buttonRight = document.getElementById('rightButton');
let galery = document.getElementById('gallery');
let selectedImage = document.getElementById('selected');
let ulTag = document.querySelector('ul');
let body = document.querySelector('body');
let submit = document.getElementById('sumbit');
let PicCount = document.getElementById('pics');
document.getElementById('selectedImage');
document.body.addEventListener('keydown', onKeyPress);
let picTitle = document.getElementById('seleH1');
let picDesc = document.getElementById('seleH3');
let commentOpener = document.getElementById('open_comments');
let commentSection = document.getElementById('hider');
let galHider = document.getElementById('absolute');

let commNumChecker = document.getElementById('commNum');
let counter = 0;
let numberOfThumbs = parseInt(PicCount.innerHTML);

let thisIsBinary = 1;
let commentChecker = commNumChecker.innerHTML;

if(commentChecker == 1){
  commentSection.setAttribute('style', '')
  galHider.setAttribute('style', 'display:none;')
  commentOpener.innerHTML = 'Hide Comments';
}



if (document.getElementById(`iden${counter}`).innerHTML.length > 0) {
  picTitle.innerHTML = document.getElementById(`iden${counter}`).innerHTML
} else { picTitle.innerHTML = 'Lorem Ipsum' }


if (document.getElementById(`descIden${counter}`).innerHTML.length > 4) {
  picDesc.innerHTML = document.getElementById(`descIden${counter}`).innerHTML
} else {
picDesc.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}


function descriptionLoader() {
  if (document.getElementById(`iden${counter}`).innerHTML.length > 0) {
    picTitle.innerHTML = document.getElementById(`iden${counter}`).innerHTML
  } else { picTitle.innerHTML = 'Lorem Ipsum' }


  if (document.getElementById(`descIden${counter}`).innerHTML.length > 4) {
    picDesc.innerHTML = document.getElementById(`descIden${counter}`).innerHTML
  } else {
  picDesc.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
}


function thumnailLoader() {
  while (ulTag.hasChildNodes()) {
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
    imgTag.setAttribute('onclick', `  if(document.getElementById('iden${i}').innerHTML.length > 0){
      picTitle.innerHTML = document.getElementById('iden${i}').innerHTML
      }else{ picTitle.innerHTML = 'Lorem Ipsum'}
      
      
      if(document.getElementById('descIden${i}').innerHTML.length > 4){
        picDesc.innerHTML = document.getElementById('descIden${i}').innerHTML
        }else{ picDesc.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }`)
    liTag.appendChild(imgTag)
    ulTag.appendChild(liTag)
  }
}

function adder() {
  numberOfThumbs += 1;
}

thumnailLoader()




function right() {
  if (counter < numberOfThumbs - 1) {
    counter++
  }
  selectedImage.setAttribute('src', `./assets/pictures/${counter}.jpg`)
  if (document.getElementById(`iden${counter}`).innerHTML.length > 0) {
    picTitle.innerHTML = document.getElementById(`iden${counter}`).innerHTML
  } else { picTitle.innerHTML = 'Lorem Ipsum' }


  if (document.getElementById(`descIden${counter}`).innerHTML.length > 4) {
    picDesc.innerHTML = document.getElementById(`descIden${counter}`).innerHTML
  } else { picDesc.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }

}

function left() {
  if (counter > 0) {
    counter--
  }
  selectedImage.setAttribute('src', `./assets/pictures/${counter}.jpg`)
  if (document.getElementById(`iden${counter}`).innerHTML.length > 0) {
    picTitle.innerHTML = document.getElementById(`iden${counter}`).innerHTML
  } else { picTitle.innerHTML = 'Lorem Ipsum' }


  if (document.getElementById(`descIden${counter}`).innerHTML.length > 4) {
    picDesc.innerHTML = document.getElementById(`descIden${counter}`).innerHTML
  } else { picDesc.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }


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
commentOpener.onclick = () => {
  if (commentSection.getAttribute('style') == '') {
    commentSection.setAttribute('style', 'display:none;')
    galHider.setAttribute('style', '');
    commentOpener.innerHTML = 'Click here to view the comments';
    thisIsBinary = 0;
  } else {
    commentSection.setAttribute('style', '')
    galHider.setAttribute('style', 'display:none;')
    commentOpener.innerHTML = 'Hide Comments';
    thisIsBinary = 1;
  }
}