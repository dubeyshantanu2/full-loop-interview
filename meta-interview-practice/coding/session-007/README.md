# AI-Native Coding — Session 007

## Container With Most Water (Two Pointers)

You are developing an optimization algorithm to determine maximum storage capacity between bounding walls.

### Stage 1

Implement `maxArea(height)` in `src/containerWater.js`:

- Accepts an array of non-negative integers `height` where each element represents the height of a vertical line at index $i$.
- Returns the maximum volume/area of water that can be contained between two lines:
  $$\text{area} = \min(\text{height}[i], \text{height}[j]) \times |j - i|$$
- The solution should achieve $O(n)$ time complexity and $O(1)$ auxiliary space using two inward-moving pointers.

Use the starter tests as your baseline. Inspect the problem, discuss your approach, and verify your implementation.

