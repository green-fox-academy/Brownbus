let body = document.querySelector('body')
body.setAttribute('style', 'display:flex; flex-direction:row;')
let mainUlTag = document.createElement('ul');
mainUlTag.setAttribute('id', 'list')
mainUlTag.setAttribute('style', 'list-style:none; border: solid 1px; padding: 0px; height: auto; width: 200px;')
body.appendChild(mainUlTag);
let ulTag = document.createElement('ul')
let divTag = document.createElement('div')



for (let i = 0; i < 5; i++) {
  let listElement = document.createElement('li')
  listElement.innerHTML = `listelement ${i}`
  listElement.setAttribute('id', i)
  mainUlTag.appendChild(listElement)
  i === 0 ?
    listElement.setAttribute('style', 'background-color : blue; width : 200px; border: solid 1px;')
    : listElement.setAttribute('style', 'background-color : grey; width : 200px; border: solid 1px;');
}



let button1 = document.createElement('button')
button1.setAttribute('id', 'up')
button1.innerHTML = 'UP'
divTag.appendChild(button1)
button1.onclick = () => {
  let elements = document.getElementsByTagName('li')
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('style') === 'background-color : blue; width : 200px; border: solid 1px;' && 0 <= parseInt(elements[i].getAttribute('id')) && elements[i - 1] !== undefined) {
      elements[i].setAttribute('style', 'background-color : grey; width : 200px; border: solid 1px;')
      elements[i - 1].setAttribute('style', 'background-color : blue; width : 200px; border: solid 1px;')
      return;
    }
  }
}

let button2 = document.createElement('button')
button2.setAttribute('id', 'down')
button2.innerHTML = 'DOWN'
divTag.appendChild(button2)
button2.onclick = () => {
  let elements = document.getElementsByTagName('li')
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('style') === 'background-color : blue; width : 200px; border: solid 1px;' && elements.length > elements.length - 1 && elements[i + 1] !== undefined) {
      elements[i].setAttribute('style', 'background-color : grey; width : 200px; border: solid 1px;; width : 200px; border: solid 1px;')
      elements[i + 1].setAttribute('style', 'background-color : blue; width : 200px; border: solid 1px;')
      return;
    }
  }
}

let button3 = document.createElement('button')
button3.setAttribute('id', 'x')
button3.innerHTML = 'X'
divTag.appendChild(button3)
button3.onclick = () => {
  let elements = document.getElementsByTagName('li')
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('style') === 'background-color : blue; width : 200px; border: solid 1px;' && mainUlTag.hasChildNodes() == true) {
      mainUlTag.removeChild(elements[i])
      if (elements[0] !== undefined) {
        elements[0].setAttribute('style', 'background-color : blue; width : 200px; border: solid 1px;')
      }
    }
  }
}




let button4 = document.createElement('button')
button4.setAttribute('id', 'right')
button4.innerHTML = '>'
divTag.appendChild(button4)
button4.onclick = () => {
  let elements = document.getElementsByTagName('li')
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('style') === 'background-color : blue; width : 200px; border: solid 1px;') {
      elements[i].setAttribute('style', 'background-color : grey; width : 200px; border: solid 1px;')
      ulTag.appendChild(elements[i])

      if (elements[0] !== undefined) {
        elements[0].setAttribute('style', 'background-color : blue; width : 200px; border: solid 1px;')
      }
    }
  }
}

body.appendChild(divTag)
body.appendChild(ulTag);


let buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++) {
  buttons[i].setAttribute('style', 'background-color: grey; width: 200px; height: 25px; border: solid 2px; border-color: blue; border-radius: 5%')
}

let styleTag = document.createElement('style')
styleTag.innerHTML = 'div { \n display:flex; \n flex-direction:column; \n margin-top: 16px;}'
body.appendChild(styleTag)

ulTag.setAttribute('style', 'display:flex; flex-direction:column; height:auto; width: 200px; border:solid 1px; list-style:none;padding:0px;  ')