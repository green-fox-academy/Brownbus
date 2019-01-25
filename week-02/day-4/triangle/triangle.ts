'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle(canvasSize: number, row: number) {
  let size: number = 19;
  size = canvasSize  / row
  let height = size * (Math.sqrt(3) / 2);
  for (let i: number = 0; i <= row; i++) {
    for (let j: number = 0; j < row - i; j++) {
      ctx.beginPath();
      ctx.moveTo((canvasSize / 2 - row * size / 2 + i * size)+size/2 + j * size / 2, (canvasSize - height) - height * j);
      ctx.lineTo((canvasSize / 2 - row * size / 2 + i * size)+size/2 + j * size / 2 + size / 2, canvasSize - height * j);
      ctx.lineTo((canvasSize / 2 - row * size / 2 + i * size)+size/2 + j * size / 2 - size / 2, canvasSize - height * j);
      ctx.lineTo((canvasSize / 2 - row * size / 2 + i * size)+size/2 + j * size / 2, (canvasSize - height) - height * j);
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
}
triangle(600, 3)