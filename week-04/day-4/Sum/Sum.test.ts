'use strict';
import { test } from 'tape'
import { Sum } from './Sum'
let test = require('tape')

test('Sum', t => {
  let sum1 = new Sum;
  let testArray: number[] = [null]
  let actual: number = sum1.sum(testArray)
  let expected: number = 0;
  t.equal(actual, expected)
  t.end()
})
