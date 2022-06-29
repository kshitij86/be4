/**
 * Integer cards -
 *
 * Alice has an array of size N. She wants to perform Q queries on array A.
 * Each query contains two numbers X and Y.
 * In each query che can perform the following operations -
 * She can choose at most X (possibly zero) from array A and change them to Y
 * Alice's goal is to make the sum of all elements as small as possible.
 * Return the smallest possible sum.
 *
 *
 * In each query you can change some (X) elements of the array.
 *
 * Any query X and Y means you can pick random numbers form the array and chencge them to Y.
 *
 * [1,2,3,4]   -> [1,2,3,4]
 * X = 4, y = 8
 * Choose,
 *
 * A -> an array of integers that can be modified
 * Q -> an array of arrays containing X and Y
 *
 *
 * i = 0
 * cnt = 3                A[i]
 * A = [1,2,3,4] -> [1,1,1,1]
 * Q = [[2, 5], [1, 20], [5, 1]]
 *
 * Q[0] -> Is not useful, will increase the sum so skip (pick 0 elements)
 * Q[1] -> Is not useful, will increase the sum so skip (pick 0 elements)
 * Q[2] -> Pick 3 elements and change them all to 1
 *
 * A -> [1,1,1,1] -> return sum as 4
 *
 * Algorithm:
 * 1. Iterate over the queries, and try to make a decision.
 * 2. If the query element is greater than maximum of array, skip it.
 * 3. Otherwise it makes sense to use it.
 * 4. Repeat until all queries are done.
 * 5. Return the result.
 *
 * Example - 1
 * A -> {15, 4, 7, 8, 4, 12}
 * Q ->
 * 3 5
 * 1 20
 * 1 3
 *                                 use 5                  skip 20               use 3
 *  {15, 4, 7, 8, 4, 12} ->  {15, 4, 5, 5, 4, 5} -> {15, 4, 5, 5, 4, 5} -> {3, 4, 5, 5, 4, 5}
 *  Minimum Sum = 26 (return value)
 *
 *
 *
 * Example - 2
 * A -> {13, 20, 20, 15, 16}
 * Q ->
 * 2 3
 *                                use 3
 *  {13, 20, 20, 15, 16} -> {13, 3, 3, 15, 16}
 *      Sum = 84                Sum = (19 + 31) = 50
 *
 * 2 -> either 0 or 1 or 2
 *
 *
 *
 */
function integerCards(A, Q) {
  function decreasingSort(A) {
    // decreasingSort([1,2,3]) -> [3,2,1]
    // function to sort array in decreasing order
    // and return it
    A.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      return a > b ? -1 : 1;
    });
    // return the reverse sorted array
    return A;
  }
  // the return value of the fxn, the minimum possible sum of the array
  let sum = 0;
  // the idea is to assign the smallest value in queries to the largest value in the array
  // process each query
  // query is an array of two elements X and Y
  Q.forEach((query) => {
    // the maximum comes to the front
    A = decreasingSort(A);
    // to track number of opeartions
    let cnt = 0;
    // for each query iterate the array
    for (let i = 0; i < A.length; i++) {
      if (A[i] > query[1] && cnt < query[0]) {
        // replace an element
        A[i] = query[1];
        cnt++;
      }
    }
  });
  // print the array after all ops are done
  console.log(A);
  // sum all the elements
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  return sum;
}

let A1 = [15, 4, 7, 8, 4, 12];
let Q1 = [
  [3, 5],
  [1, 20],
  [1, 3],
];

let A2 = [13, 20, 20, 15, 16];
let Q2 = [[2, 3]];

console.log(integerCards(A1, Q1));
console.log(integerCards(A2, Q2));

/**
 * A -> lerngth of A
 * O(N^2)
 */

// https://forms.gle/1jHJnjRSXd6SWGbe6
