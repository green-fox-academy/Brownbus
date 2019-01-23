
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.  

function drawBox(){
ctx.fillRect(100, 100, 100, 100); 
}

function red(){

  ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineWidth = 5;
ctx.stroke();
};


function green(){
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.lineWidth = 5;
};


function blue(){
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.stroke();
ctx.lineWidth = 5;
};


function yellow(){
ctx.strokeStyle = "yellow";
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.lineWidth = 5;
};

red();
blue();
yellow();
green();
drawBox();