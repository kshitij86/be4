function findSubstringWithGivenHashValue(s, power, k, modulo, hashValue) {
  let powerK = 1;
  let p = k - 1;
  while (p > 0) {
    powerK = (powerK * power) % modulo;
    p--;
  }
  let index = 0;
  let end = s.length - 1;

  let hash = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let sVal = s[i] - "a" + 1;
    hash = (((hash * power) % modulo) + sVal) % modulo;
    if (end - i + 1 == k) {
      if (hash == hashValue) {
        index = i;
      }
      hash =
        (hash - (((s[end] - "a" + 1) * powerK) % modulo) + modulo) % modulo;
      end--;
    }
  }
  return s.substring(index, index + k);
}

console.log(findSubstringWithGivenHashValue("leetcode", 7, 2, 20, 0));
