/**
 * Reorganize String (Medium) -
 *
 * Given a string s, rearrange the characters of s so
 * that any two adjacent characters are not the same.
 *
 * Return any possible rearrangement of s or return "" (empty string) if not possible.
 *
 * (input)
 * "xxzy" -> "xzyx" or "xyzx"
 *
 *
 * string -> s
 *              i-1  i i+1
 * condition -> "a   b  a   b  a"
 *
 * if s[i] and s[i+1] are charcters in the string, then for all i <= s.length-1
 * s[i] != s[i+1]
 *
 * if s[i] and s[i-1] are charcters in the string, then for all i <= s.length-1
 * s[i] != s[i-1]
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 500
 * if(s.length == 1){
 *    return s;
 * }
 * s = "a"
 *
 * s consists of lowercase English letters.
 * ASCII -> 97 - 122
 *         "a"   "z"
 *
 * "a" -> 97 (97 + 0)
 * "b" -> 98 (97 + 1)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Example - 1:
 * Input: s = "aab"
 * Output: "aba"
 *
 * s = "aab" -> "aba"
 * t = 'aba'
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Example 2:
 * Input: s = "aaab"
 * Output: ""
 *
 *
 * () -> character in a bracket is used/placed in string
 * s = "(a)(a)a(b)"
 *
 * a b a _
 *
 * What is it about this string for which it cannot be rearranged?
 * TODO: The frequency/count of characters will determine if solution exists.
 *
 *
 * Example - 3:
 * s = "baadbbda"
 * s.length = 8
 *
 * b a d b d a b a
 *
 *
 *
 *
 *
 * Psuedo code:
 * s = input
 * t = ""
 * t += s[0]
 *  for i = 1 to s.length-2
 *     for j = i+1 to length-1
 *         if(s[j] != s[i]){
 *            t += s[j];
 *            // keep track of elements used
 *          }
 * }
 *
 *
 * Algorithm:
 * 1. Maintain a array of 26 integers, to store the count of each letter in the string.
 *    s = "abcdeefff"
 *           0  1  2
 *    cnt = [1, 1, 1, 1, 2, 3, ... 20 more elements]
 *           a  b  c  d  e  f                     z
 * 2. Try to place the mostFrequent character in the non-adjancent places, starting from the first.
 *    "abcdeefff"
 *
 *   i = 0
 *   f _ _ _ _ _ _ _ _
 *
 *   i = 2
 *   f _ f _ _ _ _ _ _
 *
 *   i = 4
 *   f _ f _ f _ _ _ _
 *
 * 3. Repeat the same for the other letters using the cnt array.
 *
 *   i = 5
 *   f a f b f c e d e
 *
 * 4. Return the string.
 *
 *
 *
 *
 *
 */

/**
 * s = "aab"
 * s.length = n = 3
 *     i, mF
 * cnt = [1,0,0,4,...22 more zeroes]
 * mF = 3
 *
 *
 */

var reorganizeString = function (s) {
  let cnt = new Array(26).fill(0);
  // points to the most frequent character in the string
  let mostFreq = 0;
  // iterate the string
  for (let i = 0; i < s.length; i++) {
    if (++cnt[s.charCodeAt(i) - 97] > cnt[mostFreq]) {
      // if new element has higher count, update
      mostFreq = s.charCodeAt(i) - 97;
    }
  }

  // cnt[mF] = 4, s.length = 6
  // 2 * cnt[mF] - 1 = 2*4-1 = 7
  // aaabba -> ababaa
  // edge case
  // not possible to rearrange the characters
  if (2 * cnt[mostFreq] - 1 > s.length) {
    return "";
  }

  /**
   * s = "aab"
   * s.length = n = 3
   *     i, mF
   * cnt = [0,0,0,0,...22 more zeroes]
   * mF = 0            i
   * x = ['a', 'b','a']
   * i = 3
   * j = 1
   */

  let x = [];
  let i = 0;
  // place the most frequent character at non adjacent
  while (cnt[mostFreq] != 0) {
    // fromCharCode -> gives you the chacrater from ASCII value
    x[i] = String.fromCharCode(97 + mostFreq);
    i += 2;
    cnt[mostFreq]--;
  }
  //  Repeat the same for the other letters using the cnt array.
  for (let j = 0; j < 26; j++) {
    while (cnt[j] != 0) {
      if (i >= s.length) {
        i = 1;
      }
      // place the character
      x[i] = String.fromCharCode(97 + j);
      cnt[j]--;
      // place on non-adjacent odd indexes
      i += 2;
    }
  }
  // console.log(x);
  // convert x to a string
  let res = "";
  for (let i = 0; i < x.length; i++) {
    res += x[i];
  }
  return res;
};

console.log(reorganizeString("baadbbda"));

// https://forms.gle/1jHJnjRSXd6SWGbe6
