'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

for(let i: number = 0; i < 30; i++){
  for(let j:number = 0; j<20; j++ ){
    ctx.fillRect(i*40+20,j*40+20,20,20)
    ctx.fillRect(i*40,j*40,20,20)
    
}
}