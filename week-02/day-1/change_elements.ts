'use strict';
export { }

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];
let numList2 = numList.map(function(element){
  if (element === 8){
    return 4;
  }
});
console.log(numList2[3])
