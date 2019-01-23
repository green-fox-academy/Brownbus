'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

function list1(x){
  let z: number = 0; 
  for(let i: number = 0; i < x.length; i++){
  z += x[i].candies;
  }return z;
}

function list2(x){
  let z: number = 0;
  let c: number = 1;
  for(let i: number = 0; i < x.length; i++){
  if( x[i].candies < 5){
    z += x[i].age;
    c++
  }else{
    continue;
    }
  }
  c = c-1;
  z = z / c;
return z;
}

console.log(list1(students))
console.log(list2(students))


// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies