'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
const colours = ['green', 'red', 'purple', 'yellow', 'blue']
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max))
  }

function drawSquare(x){
  ctx.fillStyle = colours[getRandom(5)-1]
  ctx.fillRect(300-x/2,200-x/2,x,x);
};


for(let i: number = 0; i<= 3; i++){
  drawSquare(getRandom(130))}