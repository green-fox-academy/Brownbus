'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function getRandom(max){
return Math.floor(Math.random() * Math.floor(max))
}

function toTheCenter(numberOfStartpoint: number){
  for(let i: number = 1; i<= numberOfStartpoint; i++ ){
  
    ctx.strokeStyle = 'red';
    ctx.beginPath()
    ctx.moveTo(getRandom(600), getRandom(400))
    ctx.lineTo(300, 200)
    ctx.lineWidth = 2;
    ctx.stroke();
   
  }
};
toTheCenter(getRandom(300))