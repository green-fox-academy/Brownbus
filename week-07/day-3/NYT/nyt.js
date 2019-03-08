'use strict';
let apiKey ='mUBolKvUWJtfMvmUCWNtj2558xXhfWtX'

/* 
let http = new XMLHttpRequest()
http.open('GET',`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon&api-key=${apiKey}`)
http.send() 

*/

let body = document.querySelector('body')



 $.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon&api-key=${apiKey}`, (data) => {
  console.log(data)
 for(let i = 0; i < data.response.docs.length; i++){
  let breakLine = document.createElement('br');
  let headline = document.createElement('h1');
  headline.innerHTML = data.response.docs[i].headline.print_headline;
  body.appendChild(headline)
  body.appendChild(breakLine)
  let headline2 = document.createElement('h2');
  headline2.innerHTML = data.response.docs[i].headline.main;
  body.appendChild(headline2)
  body.appendChild(breakLine)
  let snippet = document.createElement('h3');
  snippet.innerHTML = data.response.docs[i].snippet;
  body.appendChild(snippet)
  body.appendChild(breakLine)
  let paragraph = document.createElement('p')
  paragraph.innerHTML = data.response.docs[i].lead_paragraph;
  body.appendChild(paragraph)
  body.appendChild(breakLine)
  body.appendChild(breakLine)
  body.appendChild(breakLine)
  
};
}); 



//023467