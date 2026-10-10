const test = require('node:test');
const assert = require('node:assert/strict');
const { RateLimiter } = require('../src/rateLimiter');

test('allows requests within limit', () => {
  const limiter = new RateLimiter({ limit: 2, windowMs: 1000 });

  assert.equal(limiter.allow('client-1', 100), true);
  assert.equal(limiter.allow('client-1', 200), true);
});

test('rejects requests exceeding limit within rolling window', () => {
  const limiter = new RateLimiter({ limit: 2, windowMs: 1000 });

  assert.equal(limiter.allow('client-1', 100), true);
  assert.equal(limiter.allow('client-1', 200), true);
  assert.equal(limiter.allow('client-1', 300), false);
});

test('allows requests again once window rolls past prior requests', () => {
  const limiter = new RateLimiter({ limit: 2, windowMs: 1000 });

  assert.equal(limiter.allow('client-1', 100), true);
  assert.equal(limiter.allow('client-1', 200), true);
  assert.equal(limiter.allow('client-1', 300), false);

  // At 1101, request at 100 has expired (1101 - 1000 = 101 > 100)
  assert.equal(limiter.allow('client-1', 1101), true);
});

test('tracks remaining requests accurately', () => {
  const limiter = new RateLimiter({ limit: 3, windowMs: 1000 });

  assert.equal(limiter.getRemaining('client-1', 100), 3);
  limiter.allow('client-1', 100);
  assert.equal(limiter.getRemaining('client-1', 100), 2);
});

