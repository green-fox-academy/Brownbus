'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('click', (ev) => {
if(ev.pageX > myDiv.offsetWidth/2 && ev.pageX<400){
  ev.target.style.backgroundColor = 'blue';
}else if(ev.pageX < myDiv.offsetWidth/2 && ev.pageX>0){
  ev.target.style.backgroundColor = 'yellow';
}
});
