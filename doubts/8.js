let A = [2, 3, 4, 7];

function mex(A) {
  let B = new Array(Math.max(...A) + 1).fill(0);
  for (let i = 0; i <= A.length; i++) {
    B[A[i]] = 1;
  }
  console.log(B);
  for (let i = 0; i <= B.length; i++) {
    if (B[i] === 0) {
      return i;
    }
  }
  return -1;
}

console.log(mex([0, 1, 2, 4]));
