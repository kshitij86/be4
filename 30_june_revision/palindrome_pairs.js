/**
 * Palindrome Pairs
 *
 * Given a list of unique words,
 * return all the pairs of the distinct indices (i, j) in the given list,
 * so that the concatenation of the two words words[i] + words[j] (i != j) is a palindrome.
 *
 * Input: words = ["bat","tab","cat"]
 * Output: [[0,1],[1,0]]
 * 
 * "bat" + "tab" = "battab" (yes)
 * "bat" + "cat" = "batcat" (no)
 * 
 * "tab" + "bat" = "tabbat" (yes)
 * "tab" + "cat" = "tabcat" (no)
 *
 * 
 * 
 input = ["ab", "ba", "cd", "ddc", "ji", "ijj"]
 
 Ordered pairs
 output = [[0,1], [2,3]]
 
 (0,1) != (1,0)
 
 input[0] + input[1] = "abba"
 input[2] + input[3] = "cdddc"
 
 input[4] + input[5] = "jiijj"
 input[5] + input[4] = "ijjji"
 
 For forming a palindrome its not compulsory that i < j
 
 
 * Concatenation is order based (order is important)
 *
 *
 * "a" + "b" = "ab"
 * "b" + "a" = "ba"
 *
 * For str.length >= 2
 * But all strings of length < 2 al=re palindromes (0, 1)
 * 
 * "" -> palindrome
 * "a" -> palindrome
 * 
 * 
 * Input: words = ["a",""]
 * Output: [[0,1],[1,0]]
 * 
 * input[0] + input[1] = "a" + "" = "a"
 *                     = ""  + "a" = "a"
 * 
 * 
 * 
 * Naive - 
 * 
 * 1. Iterate over the array (i), and consider each string.
 * 2. Using another loop (j) such that i != j, check
 *      If words[i] + words[j] is a palindrome or not
 *      If words[j] + words[i] is a palindrome or not
 *      Add indexes appropriately.
 * 3. Return the answer array.
 * 
 * Time Complexity - O(N^3)
 * 
 * 
 * 
 * 
 * Optimal - 
 * 
 * words = ["bot", "t", "to"]
 * 
 * "tobot"
 * "tot"
 * 
 *  "tobot"
 * prefix              suffix
 * "to"    +  "b"   +   "ot"
 *       
 * 
 * 
 * "addcdcdda"
 *   
 *          palindrome
 *  "add" +  "cdc" +    "dda"
 * 
 * 
 * ["bot", "t", "to", ""]
 * 
 * 
 * "bot" -> "", "b", "bo", "bot" (prefix)
 * "bot" -> "bot", "ot", "t", "" (corresponding suffix)
 * 
 * reverse = {"tob": 0, "t": 1, "ot": 2, "": 3}
 * 
 * prefix       palindrome      suffix
 * 
 *"tob"             ""           "bot" = "tobot" (concept, not according to question)
 * 
 *"to"              "b"          "ot" = "tobot"


  left = "tob"     "bot"
 * 
 * 
 * ans.push([i, j])
 *
 * arr = ["aba", ""]
 * {"": 1, "aba": 0}
 * 
 * ans = [[0,1], [1,0]]
 * 
 */

// too slow
var palindromePairsNaive = function (words) {
  // O(N^3)
  let n = words.length;
  let res = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (ispalindrome(words[i] + words[j]) === true) {
        res.push([i, j]);
      }
      if (ispalindrome(words[j] + words[i]) === true) {
        res.push([j, i]);
      }
    }
  }
  return res;
};

let ispalindrome = function (s) {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s[i++] != s[j--]) {
      return false;
    }
  }
  return true;
};

//Main functions starts
var palindromePairs = function (words) {
  // storing reverse strings
  var index = new Map();

  // final output to return
  var ans = [];
  // main idea of reverse is that the to make any string palindrome the first part of any
  // particular string is nothing but reverse in the second part so we have to find that particular string
  for (let i = 0; i < words.length; i++) {
    let s = words[i];
    // reverse each string
    let rev = s.split("").reverse().join("");
    // store with index in the Map
    index.set(rev, i);
  }

  // if there is empty string present then we can pair with any string which is palindrome
  if (index.has("")) {
    for (let j = 0; j < words.length; j++) {
      // combining all empty strings with all palindromes
      // ["aba", "a", ""]
      if (index.get("") === j) {
        continue;
      }
      if (ispalindrome(words[j])) {
        ans.push([index.get(""), j]);
      }
    }
  }

  //checking every possibility of a string like extracting left part and right part
  // for every string in words, check the suffix and prefix
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let s = words[i];
      let left = s.substr(0, j); // prefix
      let right = s.substr(j, s.length - j); // suffix
      //  console.log(left,right);

      // if right part is palindrome then we have to insert left part
      // to the right side so that it became full string palindrome and same goes for right side;
      //eg : "aab" left = a and right = "ab" so left is palindrome and
      // if we find ab in the given list of words then we can insert ab on the left side to make the string palindrome
      // Map.has() -> true
      // indx = {"ab": 0, "ui": 1}
      // index.has("ab") = true
      if (index.has(left) && index.get(left) !== i && ispalindrome(right)) {
        ans.push([i, index.get(left)]);
      }

      // suffixes
      if (index.has(right) && index.get(right) !== i && ispalindrome(left)) {
        ans.push([index.get(right), i]);
      }
    }
  }
  return ans;
};
