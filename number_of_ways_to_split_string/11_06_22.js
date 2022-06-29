/**
 * Number of Ways to Split a String -
 * Given a binary string s,
 * you can split s into 3 non-empty strings s1, s2, and s3 where s1 + s2 + s3 = s.
 *
 * Return the number of ways s can be split such that the
 * number of ones is the same in s1, s2, and s3.
 *
 * Since the answer may be too large, return it modulo 10^9 + 7.
 *
 * 5 / 2 -> rem = 1 (5 cannot be divided into two equal parts)
 *
 *
 * "111", ones = 3
 * if the number of ones is divisible by three, they can be distributed into 3 strings
 *
 * 1 , 1 , 1
 * s1  s2  s3
 *
 *
 * "1111", ones = 4
 *
 *  1 , 1 , 1
 *
 * if(ones % 3 !== 0){
 *  ans = 0;
 * }
 *
 *
 * If there are no ones, we can just pick two places in the middle to divide string,
 * each part will have equal number of ones (=0).
 *
 *
 * "0000" Two divisions can be made
 * First division can be like -
 * "0|000" -> ["0|0|00" , "0|00|0"]
 * "00|00" -> ["00|0|0"]
 * "000|0" ->
 *
 *
 * _,_,_,_,_,_
 *
 * n -> (n-1) C (2) -> (n-1)*(n-2)/2 -> (4-1) * (4-2)/2 -> (3 * 2)/2 = 3
 *
 *
 *
 *
 * If number of ones is not divisible by 3, return zero as no matter what, each part
 * will not have equal number of ones.
 *
 *
 * Else, we can do some calculations -
 *
 * "10110"
 * -> "1" | "01" | "10"
 * -> "10" | "1" | "10"
 *
 * ways1 -> first division
 * ways2 -> second ""
 * "1|01|10"
 *   w1 w2
 *
 *
 *
 * ans = 4
 * s = "10101"
 *
 * ones = 3 (count of ones in the string)
 * oneThird = (ones/3) = (3/3) = 1
 *
 * Before tarversal of string -
 * oneThird = 1
 * ones = 1
 * ways1 = 1
 * ways2 = 0
 * i = 0
 *
 * "1|0101"
 *  ^
 * This case considers from s[0] we can get "1"
 * --------------------------
 *
 * oneThird = 1
 * ones = 1
 * ways1 = 2
 * ways2 = 0
 * i = 1
 *
 * "10101"
 *   ^
 * This case considers from s[0] we can get "1" or "10"
 *-------------------------------
 *
 * oneThird = 1
 * ones = 2
 * ways1 = 2
 * ways2 = 1
 * i = 2
 *
 * "10|1|01"
 *    ^
 * This case considers from s[2] we can get "1"
 * -------------------------------
 *
 * oneThird = 1
 * ones = 2
 * ways1 = 2
 * ways2 = 2
 * i = 3
 *
 * "10101"
 *     ^
 * This case considers from s[2] we can get "1" or "01" or "10"
 * -------------------------------
 *
 *
 *
 * oneThird = 1
 * ones = 3
 * ways1 = 2
 * ways2 = 2
 * i = 4
 *
 * "10101"
 *      ^
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
 *
 *
 */
var numWays = function (s) {
  //count of ones
  let ones = 0;
  // length of string
  let n = s.length;
  // ans%MOD
  let MOD = 1000000007;
  // count number of ones in string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      ones++;
    }
  }

  // if ones = 0,
  if (ones === 0) {
    return (((n - 1) * (n - 2)) / 2) % MOD;
  }
  // if ones is not a multiple of 3
  if (ones % 3 != 0) {
    return 0;
  }
  // we have ones as multiple
  let oneThird = ones / 3;
  ones = 0;
  let ways1 = 0,
    ways2 = 0;
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      ones++;
    }
    // in one third part of the array,
    // we can divide it
    if (ones == oneThird) ways1++;
    if (ones == 2 * oneThird) ways2++;
  }
  return (ways1 * ways2) % MOD;
};

// https://forms.gle/1jHJnjRSXd6SWGbe6
