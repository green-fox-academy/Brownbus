'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.


function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max))
  }
  
  
function start_and_lineCount(x,y,numberOfStartpoint){
  
  
  /* function toTheCenter(numberOfStartpoint){ */
    for(let i: number = 1; i<= numberOfStartpoint; i++ ){
    
      ctx.strokeStyle = 'red';
      ctx.beginPath()
      ctx.lineTo(x, y)
      ctx.lineTo(x+50, y)
      ctx.lineWidth = 4;
      ctx.stroke();
     }
  };
  
  
  
  start_and_lineCount(0, 300, 1)