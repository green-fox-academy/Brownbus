'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//let size: number = 400;
function row(lineDensity,canvasSize, divider, xCoord, yCoord) {
  
  
  
  let x: number = canvasSize / divider;
  for (let j: number = 0; j < divider; j++) {
    for (let i: number = 0; i < x / lineDensity; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'purple';
      ctx.moveTo(xCoord + x + j * x, yCoord + x - i * lineDensity - x * 0.1);
      ctx.lineTo(xCoord + x + j * x - i * lineDensity, yCoord+0);
      ctx.stroke();
    }
    for (let i: number = 0; i < x / lineDensity; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'green';
      ctx.moveTo(xCoord + x - i * lineDensity - x * 0.1 + j * x, yCoord + x);
      ctx.lineTo(xCoord + j * x,yCoord + x - i * lineDensity);
      ctx.stroke();
    }
  }
}
//row(400, 4,0,100)

function linePlay(canvasSize,divider){

 let y: number = 0;
 let x: number = 0;
 let lineDensity = 1 + Math.round(((canvasSize/divider)/(canvasSize/10)))
 for(let r: number = 0; r<divider; r++){
 row(lineDensity,canvasSize,divider,x,y);
 y += canvasSize/divider
}

}
linePlay(400,64)