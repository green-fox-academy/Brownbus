let body = document.querySelector('body');
let tableBody = document.getElementById('tableBody')

fetch('api/map')
.then(data=>data.json())
.then(drawMap)

function drawMap(data){
  let table = document.createElement('table');
  for(let i = 0; i < 50; i++){
  let tr =   document.createElement('tr');
  tr.setAttribute('id', `${i}`);
  for(let j  = 0; j < 50; j++){
    let td = document.createElement('td');
    td.setAttribute('id', `${tr.getAttribute('id')}|${j}`)
    let imgTag = document.createElement('img');


    for(let k = 0; k < data.length; k++){
      let coordies = data[k].village_coords.split(',')
      coordies[0] = parseInt(coordies[0].replace('[', ''))
      coordies[1] = parseInt(coordies[1].replace(']', '')) 
    if(coordies[0] === parseInt(tr.getAttribute('id')) && coordies[1] === j){
      console.log('FOUND A MATCH')
      imgTag.setAttribute('src', '../game_screen_drawer/img/mapVillage.png')
      break
    }else{
      imgTag.setAttribute('src', '../game_screen_drawer/img/map.png')
    }
    }


    td.appendChild(imgTag)
    tr.appendChild(td)
  }
  table.appendChild(tr)
  };
console.log(data)
tableBody.appendChild(table)
};