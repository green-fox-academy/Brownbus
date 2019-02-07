'use strict';
import{test} from 'tape'
import{fibonacci} from './fibonacci'
test('fibonacci number index', t =>{
let actual = fibonacci(10);
let expected = 144;
t.equal(actual, expected);
t.end();
})