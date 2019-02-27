'use strict';

let button = document.querySelector('button');
button.onclick = () => {
let party = document.querySelector('body')
if(party.getAttribute('class') !== 'party'){
party.setAttribute('class', 'party')
button.innerHTML = 'TURN IT OFF'
}else{
party.setAttribute('class', 'party_OFF')
button.innerHTML = 'Party ON'
}
}