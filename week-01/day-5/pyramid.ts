
/* // //Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

  */


 'use strict';
 let lines: number = 25;
 let sor: string = '';
 for (let i: number = 0; i<lines; i++){
   for (let j: number = 1; j<lines-i; j++){
    sor += ' ';
    }
    for(let k: number = 0; k <= i * 2; k++){
    sor += '*'; 
 }
 console.log(sor);
 sor = '';
 }