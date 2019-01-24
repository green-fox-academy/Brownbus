'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//let size: number = 400;
function linePlay(s,c) {
  for (let i: number = 0; i < s / c; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(s, s - i * c - s * 0.1);
    ctx.lineTo(s - i*c, 0);
    ctx.stroke();
  }
  for (let i: number = 0; i < s / c; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo( s - i * c - s * 0.1, s);
    ctx.lineTo(0, s - i*c, );
    ctx.stroke();
  }
}
  linePlay(400, 10)