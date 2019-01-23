'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

/* ctx.fillStyle = 'green'
ctx.fillRect(0, 0, 10, 10) 
ctx.fillStyle = 'blue'
ctx.fillRect(10, 10, 15, 20) 
ctx.fillStyle = 'red'
ctx.fillRect(25, 30, 25, 62) 
ctx.fillStyle = 'yellow'
ctx.fillRect(50, 92, 100, 63)  */

//other solution

const colours = ['green', 'red', 'purple', 'yellow', 'blue']
let j: number = 0;
let k: number = 10;
let numberOfRect: number = 7;
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max))
}
for (let i: number = 0; i <= numberOfRect; i++) {

  ctx.fillStyle = colours[getRandom(5)-1]
  ctx.fillRect(j, j, k, k)
  j += k
  k *= 1.5;
}