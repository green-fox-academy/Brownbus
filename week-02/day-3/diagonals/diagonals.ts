'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
let a: number = 0;
let b: number = 600;
let c: number = 0;
let d: number = 400;






function green(){
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(a, c);
  ctx.lineTo(b, d);
  ctx.lineWidth = 10;
  ctx.stroke();
  }

  function red(){
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(a, d);
    ctx.lineTo(b, c); 
    ctx.lineWidth = 10;
    ctx.stroke();
    }

    green();
    red();