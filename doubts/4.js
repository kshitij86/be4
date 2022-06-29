function lightPost(arr, x, y) {
  // decrement x and y as the array is zero-indexed
  x--;
  y--;
  let len = arr.length;
  let distForward = 0,
    distBackward = 0;
  // updation and condition handled inside the loop
  for (let i = x; ; ) {
    if (i === y) {
      // if we are at the required index, return
      break;
    }
    // add first and increment later
    distForward += arr[i];
    // modulo to preserve circular property
    i = (i + 1) % len;
  }
  // updation and condition handled inside the loop
  for (let i = x; ; ) {
    if (i === y) {
      // if we are at the required index, return
      break;
    }
    // decrement first as we need to consider the previous distance
    // updation of i happens according to circular property
    if (i == 0) {
      i = len - 1;
    } else {
      i--;
    }
    // add later as we are going backwards
    distBackward += arr[i];
  }
  // return the minimum of both
  return Math.min(distBackward, distForward);
}

console.log(lightPost([2, 3, 4, 9], 1, 3));
console.log(lightPost([1, 10, 2], 2, 3));
