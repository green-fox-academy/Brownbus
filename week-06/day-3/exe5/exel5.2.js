'use strict';

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

let ul = document.getElementsByTagName('ul')[0];
let li = document.getElementsByTagName('li')[0];
ul.removeChild(li)

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    let listElement = document.createElement('li');
    listElement.setAttribute('class', `${planetData[i].category}`);
    listElement.innerHTML = planetData[i].content;
    ul.appendChild(listElement);
  }
}
