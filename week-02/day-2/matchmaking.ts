'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];


function makingMatches(arr: string[], arr2: string[]){
  for(let i: number = 0; i< arr2.length; i++){
    arr.splice( i+i, 0, arr2[i])
  }
console.log(arr)
return arr;
}





makingMatches(boys, girls);
export = makingMatches;


