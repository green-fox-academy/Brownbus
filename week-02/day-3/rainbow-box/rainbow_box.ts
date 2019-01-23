'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
const colours = ['pink', 'purple', 'blue', 'green', 'yellow', 'red', 'orange']
  function box(size, color) {
    for (let i: number = 400; i > 10; i -= 20) {
     ctx.fillStyle = colours[getRandom(8)-1];
     ctx.fillRect(300 - i / 2, 200 - i / 2, i, i)
   }
    ctx.fillStyle = color;
    ctx.fillRect(300 - size / 2, 200 - size / 2, size, size)
    }
 
    box(20, 'red')