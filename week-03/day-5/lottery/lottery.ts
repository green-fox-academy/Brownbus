'use strict';
export { };
// Create a method that find the 5 most common lottery numbers in lottery.csv
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



//test


let ofTimes = 1;
let m = 0;
let number = '';
const fs = require('fs');
let freNum = [];
let arr = [];
let arr2 = [];
let lottoNumbers = [];
let allNum = [];
let results = []
let fileContent = fs.readFileSync('lotto.csv', 'utf-8')
arr.push(fileContent.split(/\n|\r\n/));

for (let i: number = 0; i < arr[0].length; i++) {
  arr2.push(arr[0][i].split('Ft;'));
}
for (let i: number = 0; i < arr[0].length; i++) {
  lottoNumbers.push(arr2[i][4].split(';'));
}

for (let a: number = 0; a < lottoNumbers.length; a++) {
  for (let n: number = 0; n < lottoNumbers[a].length; n++) {
    allNum.push(lottoNumbers[a][n])
  }
}





  

  for(let i = 0; i < allNum.length; i++) {
    for (let j = i; j < allNum.length; j++) {
      if (allNum[i] == allNum[j])
      m++;
      if (ofTimes < m) {
        ofTimes = m;
        number = allNum[i];    
      }
    }
    m = 0; 
    freNum.push(number)
    }
    //.concat(' has appeared ',ofTimes.toString()), ' times')

  
 /*  for(let i = 0; i < freNum.length; i++) {
    for (let j = i; j < freNum.length; j++) {
      if (freNum[i] == results[j]){
        continue
        }
        else{
          results.push(freNum[i])
        }
    }} */
   // results.sort()
  //console.log(number, ofTimes,allNum.indexOf(number),)
 



  console.log(freNum.sort())
 
 
 
 
  //console.log(number)

  



//console.log(freNum)
//console.log(allNum)
//console.log(freNum)
//console.log(number);



//test




//console.log(allNum)
//console.log(lottoNumbers)
//console.log(arr)
//console.log(arr2)
