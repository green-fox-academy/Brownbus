'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

  
  

function thingy( lineDensity){  
for(let t: number = 0; t<1; t++){
   for (let i: number = 0; i < 100 / lineDensity; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'green';
      ctx.moveTo(200, 300 - i * lineDensity + 100 * 0.005);
      ctx.lineTo(200 - i * lineDensity, 200);
      ctx.stroke();

  } 
   for (let i: number = 0; i < 100 / lineDensity; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(200, 300 - i * lineDensity + 100 * 0.005);
    ctx.lineTo(200 + i * lineDensity, 200);
    ctx.stroke();
  }
 
   for (let i: number = 0; i < 100 / lineDensity; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(200, 100 + i * lineDensity + 100 * 0.005);
    ctx.lineTo(200 + i * lineDensity, 200);
    ctx.stroke();
  }

  for (let i: number = 0; i < 100 / lineDensity; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(200, 100 + i * lineDensity + 100 * 0.005);
    ctx.lineTo(200 - i * lineDensity, 200);
    ctx.stroke();
  } 
} 
}
 


thingy(5)
  

