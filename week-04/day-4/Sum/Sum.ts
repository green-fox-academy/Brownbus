'use strict';

export class Sum {
  sum(list: number[]) {
    let sum = 0;
    list.forEach((item) => { sum += item; })
    return sum;
  }
}

/* Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you test your method with:
an empyt list
a list that has one element in it
a list that has multiple elements in it
a null
with a string
Run them
Fix your code if needed */