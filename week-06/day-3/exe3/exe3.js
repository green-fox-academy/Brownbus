let img = document.querySelector('img');
let imgUrl = img.getAttribute('src')
console.log(imgUrl);
img.setAttribute('src', 'https://i.ndtvimg.com/i/2017-02/australian-quokko-650_650x400_71488173163.jpg')
document.querySelector('a').setAttribute('href', 'http://www.greenfoxacademy.com')
let badButton = document.getElementsByClassName('this-one');
console.log(badButton[0].innerHTML)
badButton[0].innerHTML = 'Dont click me' ;
console.log(badButton[0].innerHTML)