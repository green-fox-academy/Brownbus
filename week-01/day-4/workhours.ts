'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var sem: number = 17;
var hou: number = 6;
var wee: number = 5;
var avg: number = 52;

console.log(hou * wee * 17 + " hours are spent coding in a semester.");


console.log(wee * hou / 52 *100  +  "% of working hours are spent by coding.");
