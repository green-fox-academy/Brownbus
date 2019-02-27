let lastOnesContent = document.getElementsByClassName('animals')[0].innerHTML;
let pTags = document.getElementsByTagName('p')
for(let i = 0; i < pTags.length-1; i++){
  pTags[i].innerHTML = pTags[i].innerHTML + ' ' +lastOnesContent;
}