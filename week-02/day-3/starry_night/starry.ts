'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
ctx.fillStyle = 'black';
ctx.fillRect(0,0,600,400);

function grey(){
  let x: string = getRandom(200).toString()
  let y: string = 'rgb(' + x.concat(', ', x, ', ', x, ' )');
  return y;
}


function stars(x){
for(let i: number = 0; i<= x; i++){
    ctx.fillStyle = grey();
    ctx.fillRect(getRandom(600), getRandom(400), 2, 2);
    }
}




stars(250)