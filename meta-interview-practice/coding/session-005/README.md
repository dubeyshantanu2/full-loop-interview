# AI-Native Coding — Session 005

## Interval List Intersections (Two Pointers)

You are working on an internal calendar and schedule reconciliation engine.

### Stage 1

Implement `intervalIntersection(firstList, secondList)` in `src/intervalIntersection.js`:

- Accepts two closed interval lists `firstList` and `secondList`.
- Each interval is represented as `[start, end]` where `start <= end`.
- Both lists are pairwise disjoint and sorted in increasing order (`firstList[i][1] < firstList[i+1][0]`).
- Returns the intersection of these two interval lists as an array of closed intervals.
- The intersection of two closed intervals `[a, b]` and `[c, d]` is `[max(a, c), min(b, d)]` when `max(a, c) <= min(b, d)`, otherwise they do not intersect.
- Solution must achieve $O(n + m)$ time complexity using two pointers.

Use the starter tests as your baseline. Inspect the problem, discuss your approach, and verify your implementation.

