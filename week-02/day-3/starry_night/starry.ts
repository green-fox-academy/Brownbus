'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
ctx.fillStyle = 'black';
ctx.fillRect(0,0,600,400);


function stars(x){
for(let i: number = 0; i<= x; i++){
    ctx.fillStyle = 'white';
    ctx.fillRect(getRandom(600), getRandom(400), 3, 3);
    }
}

stars(150)