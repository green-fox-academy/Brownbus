'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let a: string = '';
for (
let i: number = 0; lineCount > i; i++) {
for (let j: number = 0; j < lineCount - i; j++) {
a += ' '
}
for (let j: number = 1; i * 2 + 1 >= j; j++) {
a += "*";
}    console.log(a);
    a = '';
}


let x: string = '';
for (let i: number = lineCount; 0 > i; i--) {
  for (let j: number = 0; j < lineCount - i; j++) {
x += ' '
}
  for (let j: number = 1; i * 2 + 1 >= j; j++) {
x += "*";
}    console.log(x);
    x = '';
}