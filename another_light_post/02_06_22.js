/**
 * Yet Another Light Post
 * There are N light posts on a circular road and they are numbered from 1 to N.
 * Imp: Travel is allowed in both directions (clockwise + anti-clockwise)
 *
 * The light posts array is going to give the distance between A[i] and A[i+1]
 *
 * Given queries(array of arrays), each having two integers X and Y (indexes of the array).
 * Return the minimum distance between two light posts X and Y for each query.
 *
 *
 * 1. You can only travel one light post at a time. Skipping not allowed.
 *
 * lightPosts = [1,2,3,4,5]
 * queries = [[1,4], [3,4], [2,5]]
 *            (A->D) (C->E) (B->E)
 * dist(A, B) -> 1
 * dist(B, C) -> 2
 * dist(C, D) -> 3
 * dist(D, E) -> 4
 * dist(E, A) -> 5
 *
 *
 *                      [A]
 *
 *                [D]          [B]
 *
 *                      [C]
 *
 *
 *
 *
 * dist(A, B) -> 2
 * dist(B, C) -> 3
 * dist(C, D) -> 4
 * dist(D, A) -> 10 is same as dist(A, D)
 *
 *
 * A = [2, 3, 4, 10]
 * Q =  [[1, 3],[4, 1]];
 *
 * Query - 1:
 * From A -> C there are two paths:
 * 1. A -> B -> C (5 units)
 * 2. A -> D -> C (14 units)
 * 
 * res = [5, ]
 *
 *
 * Imp: There are exactly two paths between any two chosen light posts on the road.
 * (clockwise and anti-clockwise)
 *
 *  clockwise -> FORWARD
 *  anti-clockwise -> backward
 *
 * Algorithm:
 * 1. For each query, do: 
 *      1. First create vars for forward_sum and backward_sum.
        2. Traverse the array in forward direction from X to Y, store sum
        3. Traverse the array in backward direction from X to Y, store sum
        4. Return the minimum sum.
   2. Repeat until all queries are processed
 *
 *
 *
 */

function anotherLightPost(arr, queries) {
  // this will return the minimum distance per query
  // arr can be made global in the function
  function lightPost(arr, x, y) {
    // decrement x and y as the array is zero-indexed
    // [1,4] -> [0, 3]
    x--; // theta(1)
    y--; // theta(1)
    let len = arr.length; // theta(1)
    // store the result of both traversals
    // theta(1)
    let distForward = 0,
      distBackward = 0;
    // FORWARD TRAVERSAL
    // updation and condition handled inside the loop
    /**
     * len = 4
     * A = [2,3,4,10]
     * Q -> [4,1]
     * distForward = 10
     * x = 3
     * Y = 0
     * i = 0
     *
     */
    for (let i = x; ; ) {
      if (i === y) {
        // if we are at the required index, break
        break;
      }
      // add first and increment later
      distForward += arr[i];
      // modulo to preserve circular property
      // updation
      // % len will always return a value in the range - [0, len-1]
      i = (i + 1) % len;
    }

    // BACKWARD TRAVERSAL
    // updation and condition handled inside the loop
    /**
     * len = 4
     * A = [2,3,4,10]
     * Q -> [4,1]
     * distBackward = 9
     * x = 3
     * Y = 0
     * i = 0
     *
     */
    for (let i = x; ; ) {
      if (i === y) {
        // if we are at the required index, return
        break;
      }
      // decrement first as we need to consider the previous distance
      // updation of i happens according to circular property
      if (i == 0) {
        // last index
        i = len - 1;
      } else {
        i--;
      }
      // add later as we are going backwards
      distBackward += arr[i];
    }
    // return the minimum of both
    // theta(1)
    return Math.min(distBackward, distForward);
  }

  // array of answers to all queries
  let res = [];
  /**
   * for(let i=0; i<queries.length; i++){
   *    queries[i][0]
   *    queries[i][1]
   * }
   */
  queries.forEach((query) => {
    // query is a subarray
    res.push(lightPost(arr, query[0], query[1]));
  });
  return res;
}

let A1 = [2, 3, 4, 10];
let Q1 = [
  [1, 3],
  [4, 1],
];

/**
 * Time Complexity:
 *
 * Q -> no. of queries
 * N -> no. of elements
 * 0 <= X, Y  < N
 *
 * T.C -> O(Q*N)
 * S.C -> O(1)
 *
 */

console.log(anotherLightPost(A1, Q1));
