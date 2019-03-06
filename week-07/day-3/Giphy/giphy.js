'use strict';


let body = document.querySelector('body');


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



$.get('http://api.giphy.com/v1/stickers/search?api_key=e7hHJRagOjNfCA97YCchuWOJAw8YQtlw&q=funny&limit=16', (apiData) => {
  console.log(apiData)
  for(let i = 0; i < 16; i++){
    let img = document.createElement('img');
  
    
    img.setAttribute('src', apiData.data[i].images.downsized_still.url)
    img.setAttribute('style', 'width:100px; height:100px')
    img.onclick = ()=>{
    img.setAttribute('style', 'position:absolute; top:500px; left:500px;'); img.setAttribute('src', apiData.data[i].images.downsized.url)
      setTimeout(() => {
        img.setAttribute('style', 'width:100px; height:100px'); img.setAttribute('src', apiData.data[i].images.downsized_still.url)
      }, 2000);
    }
    body.appendChild(img)
  }
  });
  
