let body = document.querySelector('body')

for (let i = 0; i < 5; i++) {
  let listElement = document.createElement('li')
  listElement.innerHTML = `listelement ${i}`
  listElement.setAttribute('id', i)
  body.appendChild(listElement)
  i === 0 ?
    listElement.setAttribute('style', 'background-color : blue')
    : listElement.setAttribute('style', 'background-color : grey');
}



/* 
console.log(button1)



*/

let button1 = document.createElement('button')
button1.setAttribute('id', 'up')
button1.innerHTML = 'UP'
body.appendChild(button1)
button1.onclick = () => { }

let button2 = document.createElement('button')
button2.setAttribute('id', 'down')
button2.innerHTML = 'DOWN'
body.appendChild(button2)
button2.onclick = () => {
  let elements = document.getElementsByTagName('li')
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('style') === 'background-color : blue' && parseInt(elements[i].getAttribute('id')) < elements.length-1) {
      elements[i].setAttribute('style', 'background-color : grey')
      elements[i + 1].setAttribute('style', 'background-color : blue')
      return;
    }
  }
}

let button3 = document.createElement('button')
button3.setAttribute('id', 'x')
button3.innerHTML = 'X'
body.appendChild(button3)
button3.onclick = () => { }

let button4 = document.createElement('button')
button4.setAttribute('id', 'right')
button4.innerHTML = '>'
body.appendChild(button4)
button4.onclick = () => { }