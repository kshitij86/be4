let MAX = 1000000000;
let arr = [5, 3, 4, 2, 1];

function merge(l, m, r) {
  let arr1 = [],
    arr2 = [];

  for (let i = l; i <= m; i++) {
    arr1[i] = arr[i];
  }
  for (let j = m + 1; j <= r; j++) {
    arr2[j] = arr[j];
  }

  console.log(arr1);
  console.log(arr2);

  arr1.push(MAX);
  arr2.push(MAX);

  let x = 0,
    y = 0,
    z = 0;
  while (x < y) {
    if (arr1[x] > arr2[y]) {
      arr[z] = arr2[y];
      y++;
    } else {
      arr[z] = arr1[x];
      x++;
    }
    z++;
  }
}

function mergeSort(l, r) {
  if (l < r) {
    let m = (l + r) / 2;
    mergeSort(l, m);
    mergeSort(m + 1, r);
    merge(l, m, r);
  }
}

mergeSort(0, arr.length - 1);
console.log(arr);
