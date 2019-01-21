'use strict';
export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let num: number = 4;
let result: number = 1;
function factorio(a){
  for(let i: number = 1; i <= num; i++){
  result *= i;
  }
return result;
}
console.log(factorio(num));