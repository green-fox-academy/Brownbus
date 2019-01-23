'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
const colours = ['pink', 'purple', 'blue', 'green', 'yellow', 'red', 'orange']
function box(size, color) {
  let x: number = size;

  for (let i: number = 0; i <= 6; i++) {

    ctx.fillStyle = colours[i];
    ctx.fillRect(300 - size+i*20 / 2-52, 200 - (size + 120 - i * 20) / 2, size + 120 - i * 20, size + 120 - i * 20)
    /* if(size > x+120){size = x} */

  }
  ctx.fillStyle = color;

  ctx.fillRect(300 - x / 2, 200 - x / 2, x, x)

}

box(15, 'black')