/**
 * Vowels of All Substrings -
 *
 * Given a string, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u')
 * in every substring of string.
 *
 * A substring is a contiguous (non-empty) sequence of characters within a string.
 * 
 * Input:
 * "ae" -> ["a", "e", "ae"]
 *           1    1    2 -> 4
 * 
 * 
 * Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer.
 * Please be careful during the calculations.
 *
 *
 * 
 * Constraints:
 * 1 <= string.length <= 10^5
 * string consists of lowercase English letters.
 *
 * 
 * "AE?!" -> INVALID STRING
 * 
 *
 *
 * Input: string = "aba"
 Output: 6
 Explanation: 
    All possible substrings are: "a", "ab", "aba", "b", "ba", and "a".
        - "b" has 0 vowels in it
        - "a", "ab", "ba", and "a" have 1 vowel each
        - "aba" has 2 vowels in it
    Hence, the total sum of vowels = 0 + 1 + 1 + 1 + 1 + 2 = 6. 
 *
 *
 * How will you find all substrings of a given string?
 * 
 * ans = ["a", "b", "a", "ab", "ba", "aba"]
 *         1    0    1     1     1     2 -> 6
 * 
 * "aba" -> length of string = 3
 * i = 1
 * j = 0, 1, 2
 * 
 * i = 2
 * j = 0, 1, 2(not called)
 * 
 * i = 3
 * j = 0, 1(not called), 2(not called)
 * 
 * 
 * Naive Algorithm:
 * 1. Start from i = 1 to string.length (controlling the no. of chars to pick)
 *      - Keep selecting i characters starting from each index (using j)
 *      - Count the number of vowels and add to answer
 * 2. Return the answer
 * 
 * 
 * string.length = N
 * Observation ->                     N + N-1 + N-2 + .... +  1 -> (N*(N+1))/2
 * # of chars to pick                 1    2     3            N
 * 
 * No. of non-empty substrings of a string of length N - (N*(N+1))/2
 * -> (n^2 + n)/2 -> theta(n^2)
 * 
 * 
 *
 * Input: word = "ltcd"
 * Output: 0
 * Explanation: There are no vowels in any substring of "ltcd".
 * Because there are no vowels in the string.
 *
 * 
 * 
 * Naive approach (Brute) - 
 * (Hint: We can generate all subtrings of a given string)
 * 1. Start from i = 1 to string.length (controlling the no. of chars to pick)
 *      - Keep selecting i characters starting from each index
 *      - Count the number of vowels and add to answer
 * 2. Return the answer
 * 
 *
 * 
 * 
 *
 *
 *
 *
 */

function vowelsOfAllSubstringsNaive(s) {
  function isVowel(x) {
    // returns true if x is a vowel
    switch (x) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return true;
      default:
        return false;
    }
  }
  // store the length of the string
  let n = s.length;
  // count of all vowels across all substrings
  let ans = 0;
  // loops for generating all substrings
  for (let len = 1; len <= n; len++) {
    // Pick ending point
    for (let i = 0; i <= n - len; i++) {
      //  Print characters from current
      // starting point to current ending
      // point.
      // "ababb"
      // i = 2
      // len = 3
      // j = 4;

      let j = i + len - 1;
      // i -> starting point
      // j -> ending point

      // loop to consider each character from i to j
      for (let k = i; k <= j; k++) {
        // process.stdout.write(s[k]);
        // count all vowels of current string
        if (isVowel(s[k])) {
          ans++;
        }
      }
      //   process.stdout.write("\n");
    }
  }
  return ans;
}

/**
 *
 * "aba" - ["a", "b", "a", "ab", "ba", "aba"]
 *           1    1    1     2     2     3
 *
 * You can count the number of substrings without generating all substrings
 *
 * i = 0
 * n = 4
 *
 * (n - i) -> substrings
 *
 * i = 1
 * n = 4
 *
 * i = 2
 * n = 4
 * "abac" -> "a", "ab", "aba", "abac"
 *        -> "b", "ba", "bac"
 *        -> "a", "ac"
 *        -> "c"
 *
 * consider "b"
 * "ab", "aba", "abac"
 * i = 1
 * l = n - i = 4 - 1 = 3
 *
 * consider "c"
 * "abac", "bac", "ac"
 * i = 3
 * l = n - i = 4 - 3 = 1
 * (i*l) = 3 (no. of strings where c is included but is not the starting character)
 *
 *
 *
 *
 *
 *
 * consider "a":
 * l = 3
 * aba
 * ^
 *
 * consider "b":
 * i = 1
 * l = 2
 * aba
 *  ^
 *
 * consider a:
 * i = 2
 * l = 1
 * aba
 *   ^
 *
 *
 * for each char of the string, i = 0 to n-1 //only one loop
 * l = n - i
 * (i*l) -> all strings where s[i] is included but is not the starting character
 * (l) -> all string starting with s[i] and it is a vowel
 *
 *
 */

function vowelsOfAllSubstringsOptimal(s) {
  function isVowel(x) {
    // returns true if x is a vowel
    switch (x) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return true;
      default:
        return false;
    }
  }
  // final ans
  let ans = 0;
  // length of string
  let n = s.length;
  // do for each character
  for (let i = 0; i < n; i++) {
    // if it is a vowel
    if (isVowel(s[i])) {
      let l = n - i;
      ans += i * l + l;
    }
  }
  return ans;
}

console.log(vowelsOfAllSubstringsNaive("aba"));
// console.log(vowelsOfAllSubstringsOptimal("a"));

// https://forms.gle/1jHJnjRSXd6SWGbe6
