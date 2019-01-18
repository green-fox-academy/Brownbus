'use strict';

let lineCount: number = 4;
//DARW TRIANGLE
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let a: string ='*';

for(
let i: number=0; lineCount>i; i++){
    console.log(a);
a= a+'*'
}