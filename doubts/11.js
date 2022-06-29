var isIsomorphic = function (s, t) {
  // if 'e' there is no mapping, create one
  let arr1 = new Array(256).fill(0);
  let arr2 = new Array(256).fill(0);
  let map1 = {},
    map2 = {};
  let c1 = 0;
  // traverse first string
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] === undefined) {
      map1[s[i]] = c1;
      arr1[c1] = 1;
      c1++;
    } else {
      arr1[map1[s[i]]]++;
    }
  }
  c1 = 0;
  for (let i = 0; i < t.length; i++) {
    if (map2[t[i]] === undefined) {
      map2[t[i]] = c1;
      arr2[c1] = 1;
      c1++;
    } else {
      arr2[map2[t[i]]]++;
    }
  }
  for (let i = 0; i < 256; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("paper", "title"));
// https://jsfiddle.net/t096v5Lp/
