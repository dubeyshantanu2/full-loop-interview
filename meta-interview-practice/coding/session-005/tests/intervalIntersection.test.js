const test = require('node:test');
const assert = require('node:assert/strict');
const { intervalIntersection } = require('../src/intervalIntersection');

test('finds overlapping intersections between two interval lists', () => {
  const firstList = [[0, 2], [5, 10], [13, 23], [24, 25]];
  const secondList = [[1, 5], [8, 12], [15, 24], [25, 26]];
  const expected = [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]];

  assert.deepEqual(intervalIntersection(firstList, secondList), expected);
});

test('handles empty inputs', () => {
  assert.deepEqual(intervalIntersection([], [[1, 3], [5, 9]]), []);
  assert.deepEqual(intervalIntersection([[1, 3]], []), []);
  assert.deepEqual(intervalIntersection([], []), []);
});

test('handles non-overlapping intervals', () => {
  const firstList = [[1, 2], [5, 6]];
  const secondList = [[3, 4], [7, 8]];

  assert.deepEqual(intervalIntersection(firstList, secondList), []);
});

