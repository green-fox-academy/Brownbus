'use strict';
export { };
// Write a recursive function that takes one parameter: n and counts down from n.
function countDown(n) {
  if (n <= 0) {
    return n;
  }
  else {
    console.log(n)
    return n - countDown(n - 1)
  }
}
countDown(10)
