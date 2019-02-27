let pTags = document.getElementsByTagName('p');
if (pTags[3].classList.value === 'dolphin') {
  document.getElementsByClassName('apple')[0].innerHTML = 'pear';
}
if (pTags[0].classList.contains('apple')) {
  document.getElementsByClassName('cat')[0].innerHTML = 'dog';
}

let apple = document.getElementsByClassName('apple')
apple[0].setAttribute('class', 'red')

let styleTag = document.getElementsByTagName('style');
let newShape = styleTag[0].innerHTML + '\n .balloon { \n border-radius : 1000%; \n margin-right : 700px; \n margin-left : 700px; \n height: 600px; }'
styleTag[0].innerHTML = newShape;