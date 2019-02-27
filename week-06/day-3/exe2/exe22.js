let listItems = document.getElementsByTagName('li');
let newListItems = ['apple', 'banana', 'cat', 'dog'];

for(let i = 0; i < listItems.length; i++){
  listItems[i].innerHTML = newListItems[i];
}


//CLASS WAY
let ul = document.querySelector('ul');
ul.setAttribute('class', 'style')
let styleTag = document.createElement('style')
styleTag.innerHTML = '.style { background-color : limegreen }';
let parent = document.getElementsByTagName('body')
parent[0].appendChild(styleTag)




//THIS IS THE TAG WAY
/* let styleTag = document.createElement('style')
styleTag.innerHTML = 'ul { background-color : limegreen }';
let parent = document.getElementsByTagName('body')
parent[0].appendChild(styleTag)
 */
 


 //THIS IS THE PROPERTY WAY OF SOLVING
/* let ul = document.querySelector('ul');
ul.setAttribute('style','background-color:limegreen'); */