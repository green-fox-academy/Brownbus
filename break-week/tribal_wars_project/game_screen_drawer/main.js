'use strict';

const village = document.getElementById('village');
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const buildingSize = 100;
const canvasSize = 800;
const VillageSize = 700;
let x = 10;
let y = 10;

window.onload = () => {
  ctx.drawImage(village, (canvasSize - VillageSize) / 2, (canvasSize - VillageSize) / 2)
}

canvas.onclick = function (event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let coords = `coords (${mouseX}:${mouseY})`
  console.log(coords)

  let goldMinePos = (580 < mouseX && mouseX < 770) && (200 < mouseY && mouseY < 330);
  let HQPos = (345 < mouseX && mouseX < 500) && (200 < mouseY && mouseY < 375);
  let ironMinePos = (90 < mouseX && mouseX < 245) && (225 < mouseY && mouseY < 330);
  let clayMinePos = (90 < mouseX && mouseX < 170) && (630 < mouseY && mouseY < 770);
  let lumberPos = (570 < mouseX && mouseX < 780) && (700 < mouseY && mouseY < 780);
  let barracksPos = (640 < mouseX && mouseX < 705) && (490 < mouseY && mouseY < 550);

  let buildings = {
    gold: [goldMinePos, 'Gold'],
    hq: [HQPos, 'HQ'],
    iron: [ironMinePos, 'IRON'],
    clay: [clayMinePos, 'CLAY'],
    wood: [lumberPos, 'Lumber'],
    barrack: [barracksPos, 'Baracks'],
  }

  for (let i = 0; i < Object.keys(buildings).length; i++) {
    if (buildings[Object.keys(buildings)[i]][0]){
      console.log(buildings[Object.keys(buildings)[i]][1])
    }else{
      console.log(`village ${coords}`)
    };
  ;}
};


