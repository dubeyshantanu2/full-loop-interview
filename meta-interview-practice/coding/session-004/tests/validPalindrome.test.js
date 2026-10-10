const test = require('node:test');
const assert = require('node:assert/strict');
const { validPalindrome } = require('../src/validPalindrome');

test('returns true for already palindromic strings', () => {
  assert.equal(validPalindrome('aba'), true);
  assert.equal(validPalindrome('racecar'), true);
  assert.equal(validPalindrome('a'), true);
  assert.equal(validPalindrome(''), true);
});

test('returns true when deleting one character makes it a palindrome', () => {
  assert.equal(validPalindrome('abca'), true); // delete 'c' or 'b'
  assert.equal(validPalindrome('deeee'), true); // delete 'd'
  assert.equal(validPalindrome('eeeed'), true); // delete 'd'
  assert.equal(validPalindrome('radkar'), true); // delete 'd' or 'k'
});

test('returns false when more than one deletion is required', () => {
  assert.equal(validPalindrome('abc'), false);
  assert.equal(validPalindrome('tebbem'), false);
  assert.equal(validPalindrome('abcdefba'), false);
});

