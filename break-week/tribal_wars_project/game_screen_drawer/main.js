'use strict';

let buildings = document.getElementsByClassName('buildings')

for (let i = 0; i < buildings.length; i++) {
  buildings[i].addEventListener('click', () => {
    console.log(buildings[i].getAttribute('class'))
  });
}

function resourceLoader(villageName){
  fetch(`/api/village/${villageName}`)
  .then(data => data.json())
  .then((myJson) => {
    let dataLength = myJson.sentData[0].available_troops.replace('[', '').split(',').length
    let table = document.querySelector('table')
    let tr = table.getElementsByTagName('tr')
    for (let i = 0; i < dataLength; i++) {
      let troopNumber = myJson.sentData[0].available_troops.replace('[', '').split(',')[i]
      let td = tr[i].getElementsByTagName('td')
      td[1].innerHTML = parseInt(troopNumber)
    };
    let resArray = ['gold', 'wheat', 'wood', 'stone', 'iron']
    let resourcesTable = document.querySelector('.materials')
    let resTr = resourcesTable.getElementsByTagName('tr')
    for(let j = 0; j < resTr.length; j++){
      let resTd = resTr[j].getElementsByTagName('td')
      resTd[1].innerHTML = myJson.sentData[0][`storage_${resArray[j]}`]
    }
  });
}

resourceLoader('Fot')

setInterval(() => {
  fetch('/updateResources', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({village_name:'Fot'})
  }).then(msg => console.log)
resourceLoader('Fot')
  }, 3000);