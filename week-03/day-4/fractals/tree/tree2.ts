'use strict';



const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

ctx.fillRect(0, 0, 400, 400)
ctx.fillStyle = 'black'
function colours() {
  let r: string = getRandom(255).toString()
  let g: string = getRandom(255).toString()
  let b: string = getRandom(255).toString()
  let rgb: string = 'rgb(' + r.concat(', ', g, ', ', b, ')');
  return rgb;
}



function something(startX, startY, len, angle, width) {

  ctx.beginPath();
  ctx.save();

  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.strokeStyle = colours()
  ctx.lineWidth = width
  ctx.stroke();

  if (len < 1) {
    ctx.restore();
    return;
  }
  something(0, -len, len * 0.8, -15, width * 0.8);
  something(0, -len, len * 0.8, 15, width * 0.8);
  ctx.restore()
}


something(200, 400, 60, 0, 3)

