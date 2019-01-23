'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function center(x,y){
x = 0;
y = 0;
ctx.strokeStyle
      ctx.beginPath()
      ctx.moveTo(x,y)
      ctx.lineTo(300,200)
      ctx.lineWidth = 4;
      ctx.stroke()
  for(let i: number = 0; i<=30; i++){
    x += 20
    ctx.strokeStyle
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(300,200)
    ctx.lineWidth = 4;
    ctx.stroke()
   }
    for(let i: number = 0; i<=30; i++){
    x -= 20
    ctx.strokeStyle
    ctx.beginPath()
    ctx.moveTo(x,400)
    ctx.lineTo(300,200)
    ctx.lineWidth = 4;
    ctx.stroke()
   } 

   for(let i: number = 0; i<=20; i++){
    y +=20;
    
      ctx.strokeStyle
      ctx.beginPath()
      ctx.moveTo(x,y)
      ctx.lineTo(300,200)
      ctx.lineWidth = 4;
      ctx.stroke()
    
  }
  for(let i: number = 0; i<=20; i++){
    y -=20;
    
      ctx.strokeStyle
      ctx.beginPath()
      ctx.moveTo(600,y)
      ctx.lineTo(300,200)
      ctx.lineWidth = 4;
      ctx.stroke()
    }
    
  }
center(0,0)