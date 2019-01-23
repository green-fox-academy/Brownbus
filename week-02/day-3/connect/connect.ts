'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]


let arr = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
let arrBox = [[10, 10], [290, 10], [290, 290], [10, 290]];


function connect(x) {
  for (let i: number = 0; i <= x.length; i++) {
    console.log(x[i]);
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x[i][0], x[i][1]);
    ctx.lineTo(x[i + 1][0], x[i + 1][1]);
    ctx.lineWidth = 2;
    ctx.stroke();
  }

}
connect(arr)