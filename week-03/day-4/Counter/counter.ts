'use strict';
export { };
// Write a recursive function that takes one parameter: n and counts down from n.
function countDown(n) {
  if (n <= 0) {
    return 0;
  }
  else {
    countDown(n - 1)
    console.log(n)
  }
}
countDown(111)
