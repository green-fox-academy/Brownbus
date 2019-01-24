'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//let size: number = 400;
function row(s, m, c, y) {
  
  
  
  let x: number = s / m;
  for (let j: number = 0; j < m; j++) {
    for (let i: number = 0; i < x / 10; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'purple';
      ctx.moveTo(c + x + j * x, y + x - i * 10 - x * 0.1);
      ctx.lineTo(c + x + j * x - i * 10, y+0);
      ctx.stroke();
    }
    for (let i: number = 0; i < x / 10; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'green';
      ctx.moveTo(c + x - i * 10 - x * 0.1 + j * x, y + x);
      ctx.lineTo(c + j * x,y + x - i * 10);
      ctx.stroke();
    }
  }
}
//row(400, 4,0,100)

function linePlay(s,q){

 let y: number = 0;
 let x: number = 0;
 
 for(let r: number = 0; r<q; r++){
 row(s,q,x,y);
 y += s/q
}

}
linePlay(400,64)