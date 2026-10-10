const test = require('node:test');
const assert = require('node:assert/strict');
const { maxArea } = require('../src/containerWater');

test('finds maximum area for standard heights', () => {
  assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
});

test('handles minimal two-element inputs', () => {
  assert.equal(maxArea([1, 1]), 1);
  assert.equal(maxArea([4, 3]), 3);
});

test('handles monotonic heights', () => {
  assert.equal(maxArea([1, 2, 3, 4, 5]), 6); // min(2, 5) * (4 - 1) = 6 or min(3, 5)*2 = 6
  assert.equal(maxArea([5, 4, 3, 2, 1]), 6);
});

