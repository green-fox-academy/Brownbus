'use strict';
const myDiv = document.querySelector('div');

/* 

myDiv.addEventListener('click', (ev) => {
if(ev.pageX > myDiv.offsetWidth/2 && ev.pageX<400){
  ev.target.style.backgroundColor = 'blue';
}else if(ev.pageX < myDiv.offsetWidth/2 && ev.pageX>0){
  ev.target.style.backgroundColor = 'yellow';
}
}); */


const event = enw 
event.initEvent('left-side-click', true, true)

myDiv.addEventListener('left-side-click', (ev) => {
  if(ev.target.offsetWidth/2 < ev.pageX){
    ev.target.style.backgroundColor = 'yellow';
  }
}, false);
  
myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});