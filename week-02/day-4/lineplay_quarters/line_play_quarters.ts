'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//let m: number = 0;


/* function linePlay(s) {
  for (let i: number = 0; i < s / 10; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(s, s - i * 10 - s * 0.1);
    ctx.lineTo(s - i*10, 0);
    ctx.stroke();
  }
  for (let i: number = 0; i < s / 10; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo( s - i * 10 - s * 0.1, s);
    ctx.lineTo(0, s - i*10, );
    ctx.stroke();
  }
} */
  
function div(s, t){
for(let i: number = 0; i<t; i++){
for (let i: number = 0; i < s/t / 10; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(s/t, s/t - i * 10 - s/t * 0.1);
  ctx.lineTo(s/t - i*10+t*i, 0);
  ctx.stroke();

}
for (let i: number = 0; i < s / 10; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo( s/t - i * 10 - s/t * 0.1, s/t);
  ctx.lineTo(0, s/t - i*10);
  ctx.stroke();
}
}
}

div(400,1)







//linePlay(400)