# AI-Native Coding — Session 003

## Rate Limiter

You are joining an infrastructure team building an API gateway to protect backend microservices from traffic spikes. The repository contains an unfinished in-memory sliding window rate limiter.

### Stage 1

Implement the `RateLimiter` behavior in `src/rateLimiter.js`:

- `constructor({ limit, windowMs })`: Configures the maximum allowed requests (`limit`) within a rolling time window (`windowMs` in milliseconds).
- `allow(key, timestamp = Date.now())`:
  - Determines if a request from `key` is allowed at the given `timestamp`.
  - If the count of recorded requests for `key` within `(timestamp - windowMs, timestamp]` is strictly less than `limit`, records the request and returns `true`.
  - If the limit has been reached, rejects the request, does not record the timestamp, and returns `false`.
- `getRemaining(key, timestamp = Date.now())`:
  - Returns the number of requests `key` can still make within the rolling window at `timestamp`.
  - If no requests have been recorded or all prior requests are outside the window, returns `limit`.

Use the existing tests as a starting point. You may inspect, modify, or add tests and use an AI coding assistant. Be ready to explain and verify any generated code.

Start by inspecting the codebase and talking through your understanding before changing code.

