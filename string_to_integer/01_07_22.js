/**
 * String to Integer (atoi) - 
 * 
 * 
 * 4 - bit signed integer
 * First bit is the sign, rest of the numbers are the value
 * 0 -> +ve number
 * 1 -> -ve number 
 * 
 * 0111 -> +7
 * 1111 -> -7
 * 
 * 0000 -> +0
 * 1000 -> -0
 * 
 * [-2^(4-1) to +2^(4-1)]
 * 
 * Implement the myAtoi(string s) function,
 * which converts a string to a 32-bit signed integer [-2^(31) to (2^(31))-1] (similar to C/C++'s atoi function).
 * The algorithm for myAtoi(string s) is as follows:
 *
 * 1.  Read in and ignore any leading whitespace. (Spaces are allowed)
 *      "       xekmasm" -> "xekmasm"
 * 
 * 2. Check if the next character (if not already at the end of the string) is '-' or '+'.
 * Read this character in if it is either. 
 * This determines if the final result is negative or positive respectively. 
 * Assume the result is positive if neither is present.
 *
 * 3. Read in next the characters until the next non-digit character or
 * the end of the input is reached. The rest of the string is ignored.
 *
 * "45372"
 * Non -digit
 * [a-z]
 * [A-Z]
 * +, -
 * " "
 * 
 * 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
 * If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 *
 * 032 = 32
 * 00000004 = 4
 * "           abcd  + -" = 0
 * 
 * 5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1],
 * then clamp the integer so that it remains in the range.
 * Specifically, integers less than -2^31 should be clamped to -2^31,
 * and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
 *
 * if(x < -2^31){
 *  x = -2^31;
 * } else if(x > 2^31 - 1){
 *  x = 2^31 - 1
 * }
 * return x;
 * 
 * 6. Return the integer as the final result.
 * 
 * Note:
 *
 * Only the space character ' ' is considered a whitespace character.
 * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 * 
 * "      +467553  xyz + -" = 467553
 * 
 * 
 * Constraints:
 * 0 <= s.length <= 200
 * s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 *
 * Input: s = "42"
 * Output: 42
 * Explanation: The underlined characters are what is read in, the caret is the current reader position.
 * Step 1: "42" (no characters read because there is no leading whitespace)
         ^
   Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
   Step 3: "42" ("42" is read in)
           ^
  The parsed integer is 42.
  Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.
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
 * Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.
 * 
 * (-1)^12 * 650 = 650
 * (-1)^11 * 650 = -650
 * 
 * 
 * 
 * 
 *  Input: s =  "           - 650 xdnsjnd 78"
    Output: -650
 * 
 * -> "           -650 xdnsjnd 78"
 * -> "-650 xdnsjnd 78", minus = 11
 * -> "650 xdnsjnd 78", sign = -ve
 * -> "650", sign = -ve
 * -> -650 >>> (-2^31)
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
 * Input: s = "4193 with words"
 * Output: 4193
 * Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.
 *
 *
 *
 */
var myAtoi = function (s) {
  // digits allowed
  let defaults = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let operators = ["+", "-", " "];
  // they determine the sign
  let op = ["+", "-"];
  // check if '+' is present in the string
  let counting = false;
  // final op
  let num = 0;
  // counting the minus signs
  let minus = 0;

  // if s[0] is not a whitespace or a +/- you can just return 0
  // "    abcd + 89   65686" -> 0
  // for inputs starting with a non-digit charatcer
  if (!operators.includes(s[0]) && !defaults.includes(s[0])) return 0;

  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    // if s[i] && s[i+1] are both in op, break and return num
    if (op.includes(s[i]) && op.includes(s[i + 1])) break;
    // "+.+"
    else if (counting && (s[i] == "." || operators.includes(s[i]))) break;
    //step 2 and 3
    // if you have a "."
    // or i>0 (not at the beginning) && the s[i] is not a digit && not an operator or space
    else if (
      s[i] == "." ||
      (i > 0 && !defaults.includes(s[i]) && !operators.includes(s[i]))
    ) {
      break;
    } else if (defaults.includes(s[i])) {
      // add the digit to the num
      // num = 10
      // s[i] = 8
      // 10*10 = 100 + 8 -> 108
      num = num * 10 + parseInt(s[i]);
      // the result is positive
      counting = true;
    } else if (s[i] == "-") {
      minus++;
      counting = true;
    } else if (s[i] == "+") {
      counting = true;
    }
  }

  // assign a sign to the output
  // even number of minus signs
  if (minus % 2 == 0) {
    // if it lies in the range
    // positive numbers
    return num >= -2147483648 && num <= 2147483647 ? num : 2147483647;
  } else return num >= -2147483648 && num <= 2147483647 ? -num : -2147483648; // negative
};

// https://forms.gle/1jHJnjRSXd6SWGbe6
