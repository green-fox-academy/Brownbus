'use strict';

let lineCount: number = 4;


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


let a: string = '';

for (
    let i: number = 0; lineCount > i; i++) {

    for (let j: number = 0; j < lineCount - i; j++) {

        a += ' '
    }

    for (let j: number = 1; i * 2 + 1 >= j; j++) {

        a += "*";



    }



    console.log(a);
    a = '';
}