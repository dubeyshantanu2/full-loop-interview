const test = require('node:test');
const assert = require('node:assert/strict');
const { threeSum } = require('../src/threeSum');

function normalizeTriplets(triplets) {
  if (!Array.isArray(triplets)) return [];
  return triplets
    .map(t => [...t].sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}

test('finds triplets summing to zero without duplicates', () => {
  const result = threeSum([-1, 0, 1, 2, -1, -4]);
  const expected = [[-1, -1, 2], [-1, 0, 1]];

  assert.deepEqual(normalizeTriplets(result), normalizeTriplets(expected));
});

test('handles all zeros', () => {
  const result = threeSum([0, 0, 0, 0]);
  const expected = [[0, 0, 0]];

  assert.deepEqual(normalizeTriplets(result), normalizeTriplets(expected));
});

test('returns empty array when no triplets sum to zero', () => {
  assert.deepEqual(threeSum([0, 1, 1]), []);
  assert.deepEqual(threeSum([1, 2, 3]), []);
  assert.deepEqual(threeSum([]), []);
  assert.deepEqual(threeSum([0]), []);
});

