function naive(A) {
  function lcm(x, y) {
    let g = gcd(x, y);
    return (x * y) / g;
  }
  function gcd(x, y) {
    if (y == 0) {
      return x;
    }
    return gcd(y, x % y);
  }
  let result = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (lcm(A[i], A[j]) === 2 * gcd(A[i], A[j])) {
        result++;
      }
    }
  }
  return result;
}

console.log(naive([2, 3, 4]));
