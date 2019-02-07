'use strict';
export function anagram(string1: string, string2: string): boolean {
let string1Arr = string1.split('').sort()
let string2Arr = string2.split('').sort()
let result = true;


for(let i: number = 0; i < string1.length; i++){
  if (string1Arr[i] !== string2Arr[i]){
    result = false;
  }
}return result;
}
console.log(anagram('dog', 'god'))


/* Write a function, that takes two strings and returns a boolean value based on
if the two strings are Anagramms or not.
Create a test for that. */