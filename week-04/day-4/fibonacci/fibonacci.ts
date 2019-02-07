'use strict';

export function fibonacci(num) {  
  if (num <= 0) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
console.log(fibonacci(10))