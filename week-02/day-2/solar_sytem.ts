'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
//['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune' 'Saturn'];
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"
function putSaturn(a :string[]){
let k: string = 'Saturn'
  a.push(k)
  if( a[5] !== k){
    a[5]=a[7]
    a[7]= a[6]
    a[6] = 'Uranus'
  }
return a
}



console.log(putSaturn(planetList));

export = putSaturn;