'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');





function pyramid(c){
  let s: number = 50+c/2
for(let j: number = 0; j<c; j++){
  
  for(let i: number = 0; i<c; i++){
    let height = s * (Math.sqrt(3)/2);
    let pos: number = 300-c*s;
    ctx.beginPath();
    ctx.moveTo(pos+i*s, 400-j*height-height);
    ctx.lineTo(pos+i*s+s/2, 400-j*height+height);
    ctx.lineTo(pos+i*s-s/2, 400-j*height+height);
    ctx.lineTo(pos+i*s, 400-j*height-height);
    ctx.fill();
    ctx.closePath();
  }
}

}
pyramid(3)