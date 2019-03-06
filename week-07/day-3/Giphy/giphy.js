'use strict';


let body = document.querySelector('body');


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



 $.get(`http://api.giphy.com/v1/gifs/search?api_key=e7hHJRagOjNfCA97YCchuWOJAw8YQtlw&q=funnyt&limit=${25}&offset=${random(1,112)}`, (apiData) => {
  console.log(apiData)
  for(let i = 0; i < apiData.data.length; i++){
    let img = document.createElement('img');
    
    img.setAttribute('src', apiData.data[random(0,apiData.data.length)].images.downsized_still.url)
    img.setAttribute('style', 'width:100px; height:100px')
    img.onclick = ()=>{
    img.setAttribute('style', 'position:absolute; top:500px; left:500px;'); img.setAttribute('src',apiData.data[random(0,apiData.data.length)].images.downsized.url)
      setTimeout(() => {
        img.setAttribute('style', 'width:100px; height:100px'); img.setAttribute('src', apiData.data[random(0,apiData.data.length)].images.downsized_still.url)
      }, 2000);
    }
    //console.log(apiData.data[1].images.downsized.url)
    body.appendChild(img)
  }
  });
  
/*   let http = new XMLHttpRequest()
  
  http.open('GET',' http://api.giphy.com/v1/gifs/search?api_key=e7hHJRagOjNfCA97YCchuWOJAw8YQtlw&q=bullshit&limit=16')
  http.send()
  
  http.onload 
 */