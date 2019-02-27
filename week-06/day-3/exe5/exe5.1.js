let asteroidList = document.getElementsByTagName('ul');
let listItem = document.createElement('li');
let listItem2 = document.createElement('li');
listItem.innerHTML = 'The Green Fox';
asteroidList[0].appendChild(listItem);
listItem2.innerHTML = 'The lampLighter';
asteroidList[0].appendChild(listItem2);
document.getElementsByTagName('div')[0].appendChild(document.createElement('h1'))
document.getElementsByTagName('h1')[0].innerHTML = 'I can add elements to the DOM!'

let container = document.getElementsByClassName('container')[0]
let image = document.createElement('img')
image.setAttribute('src', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681')
container.appendChild(image)