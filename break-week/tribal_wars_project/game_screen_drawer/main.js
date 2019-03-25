'use strict';

let buildings = document.getElementsByClassName('buildings')

console.log(buildings)
for(let i = 0; i < buildings.length; i++){
  buildings[i].addEventListener('click', ()=>{
console.log(buildings[i].getAttribute('class'))
  });
}
