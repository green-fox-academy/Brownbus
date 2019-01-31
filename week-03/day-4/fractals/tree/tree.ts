'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 400, 400)
ctx.fillStyle = 'black'


//trunk
ctx.beginPath()
ctx.moveTo(200, 400)
ctx.lineTo(200, 350)
ctx.strokeStyle = 'white'
ctx.lineWidth = 10;
ctx.stroke();


//branch

function branch(width, xMove, yMove,n) {
  
  if (n <= 0) {
    return 0;
  }
  else {
  
  
  
  let xStart = 200
  let yStart = 400
  let XmoveTo = [xStart]
  let YmoveTo = [yStart]
  width = 10;
  xMove = 200;
  yMove = 350
  XmoveTo.push(xMove)
  YmoveTo.push(yMove)

  ctx.beginPath()
  ctx.moveTo(XmoveTo[n], YmoveTo[n])
  ctx.lineTo(XmoveTo[n]+xMove,YmoveTo[n]-yMove)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = width;
  ctx.stroke();
if(width > 1){
 branch(width - width * 0.67, xMove - xMove * 0.67, yMove * 0.67, n-1)
}
}





branch(10, 200, 350, 10)