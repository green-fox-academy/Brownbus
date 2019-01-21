'use strict'
export{}
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
let num: number = 15;
let result: number = 0;
function sum(a){
  for(let i: number = 1; i <= num; i++){
  result += i;
  }
return result;
}
console.log(sum(num));