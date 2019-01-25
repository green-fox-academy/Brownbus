'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)




function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//background

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 3000, 1500)

function grey() {
  let x: string = getRandom(200).toString()
  let y: string = 'rgb(' + x.concat(', ', x, ', ', x, ' )');
  return y;
}

function blues() {
  let r: string = random(88, 255).toString()
  let g: string = random(183, 255).toString()
  let b: string = '255'
  let rgb: string = 'rgb(' + r.concat(', ', g, ', ', b, ')');
  return rgb;
}
let colours = [grey(),'white',blues()];

//light
function light(l) {
  ctx.globalAlpha = l;

  for (let i: number = 0; i < 75; i++) {
    ctx.fillRect(i * 20, 725 - i * 3, 3000 - i * 40, 50 + i * 6)
    ctx.fillStyle = colours[random(0,2)]
    //ctx.fillStyle = 'white'
  }

};


function milky(x) {
  for (let i: number = 0; i <= x; i++) {
    ctx.fillStyle = grey();
    ctx.fillRect(random(500, 2500), random(550, 950), 2, 2);
    ctx.fillRect(getRandom(3000), random(450, 1050), 2, 2);
    ctx.fillRect(random(0, 3000), random(400, 1100), 1, 1);
    ctx.fillRect(random(0, 3000), random(300, 1200), 1, 1);
    ctx.fillRect(random(100, 2900), random(200, 1300), 1, 1);
  }
  //middle
  for (let i: number = 0; i <= x / 8; i++) {
    ctx.fillStyle = grey();
    ctx.fillRect(random(1400, 1600), random(550, 950), 1, 1);
    ctx.fillRect(random(1300, 1700), random(650, 850), 1, 1);
    ctx.fillRect(random(1450, 1550), random(700, 800), 1, 1);

  }




  //not very dense middle
  for (let i: number = 0; i <= x / 4; i++) {
    ctx.fillStyle = grey()
    ctx.fillRect(random(1000, 2000), random(550, 950), 2, 2);
    ctx.fillRect(random(1200, 1800), random(450, 1050), 3, 3);
    ctx.fillRect(random(800, 2200), random(550, 950), 2, 2);


  }

  //blues
  for (let i: number = 0; i <= x / 4; i++) {
    ctx.fillStyle = blues()
    ctx.fillRect(random(1000, 2000), random(550, 950), 1, 1);
    ctx.fillStyle = blues()
    ctx.fillRect(random(1200, 1800), random(450, 1050), 2, 2);
    ctx.fillStyle = blues()
    ctx.fillRect(random(800, 2200), random(550, 950), 2, 2);
    ctx.fillStyle = blues()
    ctx.fillRect(random(0, 3000), random(745, 755), 2, 2);


  }
  for (let i: number = 0; i <= x * 2; i++) {
    ctx.fillStyle = blues()
    ctx.fillRect(random(1000, 2000), random(700, 800), 1, 1);
    ctx.fillStyle = 'white'
    ctx.fillRect(random(0, 3000), random(675, 875), 1, 2);
    ctx.fillStyle = grey()
    ctx.fillRect(random(0, 3000), random(600, 900), 2, 2);
    ctx.fillStyle = blues()
    ctx.fillRect(random(500, 2500), random(550, 950), 1, 2);


  }
  //Deep blue
  for (let i: number = 0; i <= x/2 ; i++) {
    ctx.fillStyle = 'rgb(0,0,51)'
    ctx.fillRect(random(0, 3000), random(0, 1500), 2, 2);
    
    ctx.fillStyle = 'rgb(102,178,255)'
    ctx.fillRect(random(0, 3000), random(0, 1500), 1, 1);
  }

}







  function stars(o, x, l) {
    for (let i: number = 0; i <= o; i++) {
      ctx.fillStyle = grey();
      ctx.fillRect(getRandom(3000), getRandom(1500), 2, 2);
    }
    milky(x)
    light(l)
  }





  stars(1600, 750, 0.005)