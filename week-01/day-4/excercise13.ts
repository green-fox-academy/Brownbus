'use strict';

let currentHours: number = 14; 
let currentMinutes: number = 34; 
let currentSeconds: number = 42; 
let secInDay: number= 60*60*24; 
let secPassed: number= currentHours * 60 * 60 +currentMinutes * 60 + 42; 
let secRemain: number = secInDay - secPassed;

console.log("Seconds left from the day: " + secRemain)


//current time is 14/34/42

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
