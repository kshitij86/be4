/**
 * Count distinct elements in every window
 *
 * Given an array of integers and a number K.
 * Find the count of distinct elements in every "window of size K" in the array.
 *
 * Your task is to complete the function countDistinct()
 * which takes the array A[], the size of the array(N)
 * and the window size(K) as inputs and
 * returns an array containing the count of distinct elements
 * in every "contiguous window" of size K in the array A[].
 *
 * Return value is an array.
 *
 * Expected Time Complexity: O(N).
 * Expected Auxiliary Space: O(N).
 * TODO: Extra space is allowed to be used
 *
 *
 * Constraints:
 * 1 <= K <= N <= 10^5
 * 1 <= A[i] <= 10^5 , for each valid i
 *
 *
 * WINDOW of SIZE K:
 *
 * Basically a contigous(take elements continuously) subarray of size K.
 *      0 1 2 3 4 5
 * A = [a,b,c,d,e,f]
 * K = 3
 * 1st window = [a,b,c]
 * 2nd window = [b,c,d]
 * 3rd window = [c,d,e]
 * ...
 * The ith window will start at the ith element, and it ends at i+(K-1) (zero indexing)
 *
 *
 *
 *
 * Input: arr[] = {1, 2, 1, 3, 4, 2, 3}; k = 4
 * Output: 3 4 4 3
 * i = 0    0 + (4-1) = 3
 * 1, 2, 1, 3, 4, 2, 3 -> 3 distinct elements
 * ^        ^
 *
 * 1, 2, 1, 3, 4, 2, 3 -> 4 distinct elements
 *    ^        ^
 *
 *  1, 2, 1, 3, 4, 2, 3 -> 4 distinct elements
 *        ^        ^
 *
 * 1, 2, 1, 3, 4, 2, 3 -> 3 distinct elements
 *          ^        ^
 *
 *
 * Ignore repeated elements, and consider their first copy
 *
 *
 *
 *
 *
 * Input: arr[] = {1, 2, 4, 4}; k = 2
 * consider windows of size 2
 * Output: 2 2 1
 *
 * 1, 2, 4, 4 -> 2 distinct elements
 * ^  ^
 *
 * 1, 2, 4, 4 -> 2 distinct elements
 *    ^  ^
 *
 * 1, 2, 4, 4 -> 1  distinct elements
 *       ^  ^
 *
 *
 * How many windows of size K in an array of N elements?
 *
 * A = [1,2,3,4,5], N = 5
 * K = 3
 * 1 <= K <= N
 *
 * N-K+1 = 5-3+1 =  3
 *
 * 1,2,3,4,5- > 1,2,3,4,5 -> 1,2,3,4,5
 * ^   ^          ^   ^          ^   ^
 *
 *
 *
 *
 *
 * NAIVE APPROACH:
 *
 * 1. Starting from first element, consider all windows
 *    one by one.
 * 2. For each window, do the following:
 *    1. Count the number of distinct elements in the range [i, i+K-1]
 *    2. Push result in the array.
 * 3. After all windows are processed, return the count.
 *
 * Psuedocode:
 *
 * 0 1 2 3 4 -> 4 - 0 + 1 -> 5
 * 0 ....... N-K ->  N-K - 0 + 1 -> N-K+1
 *
 * for(i = 0, i<=N-K; i++){ -> O(N-K)
 *  for each window of size k , count distinct -> O(K)
 * }
 *
 *
 * T.C. -> O((N-K)*K)
 *
 *
 * Optimal approach:
 *
 * arr[] = {1, 2, 4, 4, 5, 5}; k = 3
 *
 * [1,2,4]
 *   [2,4,4]
 *     [4,4,5]
 *        [4,5,5]
 *
 *
 * {1: 1, 2: 1, 4: 1} -> 3
 * {2: 1, 4: 2} -> 2
 * {4: 2, 5:1} -> 2
 *
 * The window will change by one element at maximum.
 *
 * Keep a count of elements in a map.
 *
 * Instead of finding the number of distinct elements each time,
 * we can just add an element and remove one element.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
function countDistinctWindows(A, K) {
  // function handle insertion in a hash object
  function hashMapInsert(hash, X) {
    if (hash[X] === undefined) {
      // if X is not in map
      hash[X] = 1;
    } else {
      // update current count
      hash[X]++;
    }
    return hash;
  }
  // new array to store result
  let res = [];
  // create a new object for O(1) access
  let hash = {}; // plain JS object
  let N = A.length;

  for (let i = 0; i < K; i++) {
    // store the first window in the hash map
    hash = hashMapInsert(hash, A[i]);
  }
  // iterate over N - K + 1 windows in the array
  for (let i = 0; i <= N - K; i++) {
    // Object.keys(hash).length returns an array of keys
    // console.log(Object.keys(hash));
    res.push(Object.keys(hash).length);
    // don't consider the element that is out of the window
    hash[A[i]]--;
    if (hash[A[i]] === 0) {
      // if element is not a part of current window
      // remove it from hash map
      delete hash[A[i]];
    }
    // [1,2,3,3,4]
    // insert new element that is now part of the window
    // new element is at i + K
    hash = hashMapInsert(hash, A[i + K]);
  }
  return res;
}

let A = [1, 2, 1, 3, 4, 2, 3];
let K = 4;

console.log(countDistinctWindows(A, K));
console.log(countDistinctWindows([1, 2, 4, 4], 2));

// https://forms.gle/1jHJnjRSXd6SWGbe6
