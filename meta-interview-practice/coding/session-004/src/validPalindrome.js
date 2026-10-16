/**
 * Determines whether string s can be a palindrome after deleting at most one character.
 *
 * @param {string} s - Input string of lowercase English letters.
 * @returns {boolean} True if s is or can be made a palindrome with <= 1 deletion, else false.
 */
function validPalindrome(s) {
  // TODO: Implement two-pointer palindrome check with at most 1 deletion tolerance.
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
}

module.exports = { validPalindrome };
