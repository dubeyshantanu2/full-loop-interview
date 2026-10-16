/**
 * Calculates maximum water area contained between two vertical lines.
 *
 * @param {number[]} height - Array of line heights.
 * @returns {number} Maximum area possible.
 */
function maxArea(height) {
  // TODO: Implement two-pointer inward search.
  let maxA = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;
    maxA = Math.max(maxA, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxA;
}
