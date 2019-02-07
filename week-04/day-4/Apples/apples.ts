'use strict';

let test = require('tape')

export class Apple {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() :string {
    return this.name;
  }
}