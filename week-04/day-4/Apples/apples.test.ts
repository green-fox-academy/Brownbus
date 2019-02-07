import { test } from 'tape';
import { Apple } from './apples';

test('If name is equal', t => {
  let apple = new Apple('apple');
  let actual: string = apple.getName();
  let expected: string = 'apple';
  t.equal(actual, expected, 'Should be euqal')
  t.end()
})


