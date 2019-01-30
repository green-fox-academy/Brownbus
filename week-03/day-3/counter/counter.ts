'use strict'
export { }
/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter {
  integer: number;
  constructor(i = 0) {
    this.integer = i;
  }
  add(...n) {
  if(n[0] === undefined || n[0]=== -1){
  this.integer += 1 ;
}else{this.integer += n[0]}
return this.integer;
}
}

let what = new Counter()
console.log(what.add())

