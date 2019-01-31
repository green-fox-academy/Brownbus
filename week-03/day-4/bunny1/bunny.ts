// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

'use strict';
export { };


function bunnies(n) {
  if (n < 0) {
    return 0;
  } else {
    console.log(n)
    return bunnies(2*n-1);
  }
}
console.log(bunnies(10))





// I HATE BUNNIES