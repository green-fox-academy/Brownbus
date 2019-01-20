'use strict';
let a: number = 123;
let b: number = 523;

b = [a, a = b][0]; 
console.log(a); 
console.log(b);
