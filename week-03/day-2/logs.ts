'use strict';
export{ }
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let fs = require('fs')
let ipArr = [];
let ipArr2 = [];
let post = [];
let get = []

function IP(file){
  let fileContent = fs.readFileSync(file, 'utf-8');
  fileContent = fileContent.split(/[/]/g);
  
for( let i: number = 0; i < fileContent.length; i++){
    ipArr.push(fileContent[i].split(/[ ]/g));
}
 for( let i: number = 0; i < ipArr.length; i++){
  ipArr2.push(ipArr[i][8])
  post.push(ipArr[i][11])
  if(post[i]==='GET'){
    get.push(post[i])

  }
}
console.log(ipArr2)
console.log('GET= '+get.length, 'POST=', post.length-get.length)
}
IP('log.txt')