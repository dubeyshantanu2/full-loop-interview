class RateLimiter {
  constructor({ limit, windowMs }) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.records = new Map();
  }

  allow(key, timestamp = Date.now()) {
    // TODO: Determine if key can make a request at timestamp and update records.
    if (!this.records.has(key)) {
      this.records.set(key, []);
    }
    const reqs = this.records.get(key);
    //remove old timestamps outside the window
    while (reqs.length && reqs[0] <= timestamp - this.windowMs) {
      reqs.shift();
    }
    if (reqs.length < this.limit) {
      reqs.push(timestamp);
      return true;
    }
    return false;
  }

  getRemaining(key, timestamp = Date.now()) {
    // TODO: Calculate remaining allowed requests within rolling window.
    if (!this.records.has(key)) return this.limit;
    const reqs = this.records.get(key);
    //remove old timestamps outside the window
    while (reqs.length && reqs[0] <= timestamp - this.windowMs) {
      reqs.shift();
    }
    return Math.max(0, this.limit - reqs.length);
  }
}

module.exports = { RateLimiter };
