/**
 * In this code, it n is an even number then we square the res value
 * and divide the power by 2. This will make it 1 faster than subtracting 1 every time.
 *
 * Otherwise we decrement it by 1.
 *
 *
 */

var myPow = function (x, n) {
  if (n < 0 && x !== 0) {
    return myPow(1 / x, n * -1);
  }

  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n % 2 === 0) {
    const res = myPow(x, n / 2);
    return res * res;
  } else {
    return myPow(x, n - 1) * x;
  }
};
