'use strict';

export class Sum {
  sum(list: number[]) {
    let sum = 0;
    list.forEach((item) => { sum += item; })
    return sum;
  }
}
