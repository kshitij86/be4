function increasingString(s) {
  function sorted(s) {
    for (let i = 1; i < s.length; i++) {
      if (s[i - 1] > s[i]) {
        return false;
      }
    }
    return true;
  }
  if (sorted(s)) {
    return s;
  }
  let frequency = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    frequency[s.charCodeAt(i) - 97]++;
  }
  let prefix = "";
  let subseq = "";
  let suffix = s;
  let ans = s;
  let index = 0;
  while (index < 26) {
    if (frequency[index] == 0) {
      index++;
      continue;
    }
    let i = 0;
    while (i < suffix.length && frequency[index] > 0) {
      if (s.charCodeAt(i) - 97 == index) {
        prefix.concat(suffix[i]);
      } else {
        subseq.concat(suffix[i]);
      }
      frequency[s.charCodeAt(i) - 97]--;
      i++;
    }
    suffix = suffix.substring(i, suffix.length + 1);
    let combined = prefix.concat(subseq, suffix);
    console.log(combined);
    if (combined.length < ans) {
      ans = combined;
    }
  }
  return ans;
}

console.log(increasingString("aba"));
