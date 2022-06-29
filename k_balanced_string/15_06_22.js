/**
 * 1. The string is 1-indexed, so we need to convert the logic.
 *
 *
 * For each index such that s[i] = 1
 * (for every index in the binary string that is a 1)
 *
 * K = 2
 * 1000010101
 *      ^ ^
 *      i j
 * |i - j| = |5 - 7| = 2
 *
 * "For every index i having 1 in the binary string,
 * there should be another index j, which is k places to the right or
 * left of i and contains a 1 also"
 *
 *
 * str = 10101
 * k = 2
 *
 * str[0] -> holds
 * str[2] -> holds
 * str[4] -> holds
 *
 * It is a 2-balanced string.
 *
 *
 * "00"
 * k = 1
 *
 * If there is no 1, the it is satisfied.
 *
 *
 *
 * str = 0101000101
 * k = 2
 *
 * str[1] -> holds
 * str[3] -> holds
 * str[7] -> holds
 * str[9] -> holds
 *
 * 2-balanced string
 *
 * ---------------------------
 * binary string (only 0 & 1)
 * It is not guaranteed to be k balanced.
 *
 * string.length = n
 * integer k (non negative)
 *
 * Operation:
 * "0" -> "1"
 * "1" -> "0"
 *
 * Task: Convert into k-balanced string using minimum operations.
 *
 *
 *
 *
 *
 *
 *
 * Input 1:
 * str = 01
 * k = 1
 *
 * "01" -> "11" (1 operation)
 * "01" -> "00" (1 operation)
 * Answer: 1
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
 * Input 2:
 * str = 111
 * k = 1
 *
 * Answer: 0
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
 * Input 3:
 * str = 1101
 * k = 2
 *
 * "1101" -> "1111"
 * Answer: 1
 *
 *
 *
 *
 * Input 4:
 * str = 11110
 * k = 3
 *
 * Input 5:
 * str = 10101
 * k = 2
 *
 *
 *
 *
 *
 * 1. Iterate through the string using i, and check if str[i] is a '1'.
 *    - If it is not a '1', just continue.
 *    - If it is a '1', then go to 2.
 * 2. If str[i] is a '1', then check i+k and i-k:
 *      if either is '1', then continue.
 *      if not, what to do:
 *          - you will always convert "0" -> "1"
 * 3. Keep doing this for all indices in the array and increment count,
 *    whenever an operation is used.
 * 4. Return count.
 *
 *
 *
 *  "00001001"
 *   k = 3
 *
 *
 * Example for minimum number of operations:
 *
 * str = 10001
 * k = 2
 *
 * "10001" (change 0 to 1)
 * "10101" (1 operation)
 *
 *
 * "10001" (change 1 to 0)
 * "00001" (1 operation)
 * "00000" (2 operations)
 *
 *
 *
 * If you change [i+k] to a '1',
 * then for that one ([i+k]) at [i-k] there is guaranteed to be a '1':
 *
 * support
 *  0    1    2
 * "1    0    1"
 *  i-k       i+k
 *  k=2
 *
 *
 * "11011"
 * k = 3
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
 */

function kBalancedString(str, k) {
  // store the length of the string
  let n = str.length;
  // final answer to return
  let count = 0;
  // iterate over the string
  for (let i = 0; i < n; i++) {
    // if it is a zero, ignore
    // "00000", k = 2
    if (str[i] == "0") {
      // skip to the next iterartion
      // ignore the code below
      continue;
    }
    // i+k < n and i-k >=0 , means we are in the bounds of the string
    if ((i + k < n && str[i + k] == "1") || (i - k >= 0 && str[i - k] == "1")) {
      // property is satisfied
      // no operation needed
      continue;
    }
    // str[i+k] is not a '1'
    if (i + k < n) {
      // change "0" -> "1"
      // one operation used
      str[i + k] = "1";
    } else {
      // "0000010", k = 2
      // where it is better to just change one to zero
      // one operation used
      str[i] = "0";
    }
    count++;
  }
  console.log(str);
  return count;
}

// console.log(kBalancedString("01", 1));
// console.log(kBalancedString("111", 1));
// console.log(kBalancedString("1101", 2));
console.log(kBalancedString("11110", 3));
// console.log(kBalancedString("10101", 2));

// https://forms.gle/1jHJnjRSXd6SWGbe6
