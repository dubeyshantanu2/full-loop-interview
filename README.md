# Meta Full Loop Interview Practice

Repository containing practice sessions for the Meta SWE Full Loop interview, including AI-native coding challenges, progressive problem stages, and test suites.

## Practice Structure

Refer to [META FULL LOOP INTERVIEW COACH.md](./META%20FULL%20LOOP%20INTERVIEW%20COACH.md) for full rubric and interview guide.

### Coding Sessions

| Session | Topic | Focus | Status |
|---|---|---|---|
| [Session 001](./meta-interview-practice/coding/session-001/) | Delivery Inbox | Idempotent webhook storage | Completed |
| [Session 002](./meta-interview-practice/coding/session-002/) | Event Bus | In-memory pub/sub engine | Completed |
| [Session 003](./meta-interview-practice/coding/session-003/) | Rate Limiter | Sliding window rate limiter | Completed |
| [Session 004](./meta-interview-practice/coding/session-004/) | Valid Palindrome II | Two Pointers (LC 680) | Ready |
| [Session 005](./meta-interview-practice/coding/session-005/) | Interval List Intersections | Two Pointers (LC 986) | Ready |
| [Session 006](./meta-interview-practice/coding/session-006/) | 3Sum | Two Pointers (LC 15) | Ready |
| [Session 007](./meta-interview-practice/coding/session-007/) | Container With Most Water | Two Pointers (LC 11) | Ready |

## Running Tests

All exercises use Node.js built-in test runner (`node:test`):

```bash
# Run specific session tests
node --test meta-interview-practice/coding/session-004/tests/validPalindrome.test.js

# Watch mode
node --test --watch meta-interview-practice/coding/session-004/tests/validPalindrome.test.js
```
