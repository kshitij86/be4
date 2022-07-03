/**
 * Sliding Window Maximum
 *
 * You are given an array of integers nums,
 * there is a sliding window of size k which is moving from the
 * very left of the array to the very right. You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position.
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
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
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
 * Return the maximum sliding window.
 *  maximum sliding window. *
 *
 * [1,2,3,4], k = 3
 * [1,2,3] -> 3
 * [2,3,4] -> 4
 *
 * No. of windows = n - k + 1
 * No. of windows = n - k + 1
 *
 *
 *
 *
 *
 *
 *
 * TODO: Why can't we sort?
 *
 * [4,2,3,1], k = 3
 * res = [4,3]
 *
 * [1,2,3,4], k = 3
 * res = [3,4]
 *
 *
 *
 * Example - 1
 * arr = [1,3,4,2,5,6,7,8,9,0], k = 3
 *
 *
 * [1,3,4] -> 4
 *    [3,4,2] -> 4
 *       [4,2,5] -> 5
 *          [2,5,6] -> 6
 *             [5,6,7] -> 7
 *                [6,7,8] -> 8
 *                   [7,8,9] -> 9
 *                      [8,9,0] -> 9
 *
 *
 * res = [4,4,5,6,7,8,9,9]
 *
 *
 *
 * arr = [1], k = 1
 * output = [1]
 *
 *
 *
 * Approach:
 * 1. Iterate over the windows using i. O(n-k)
 * 2. Iterate k elements of a particular window using j. O(k)
 * 3. Find the maximum in this window and add it to the answer.
 * 4. Return the res array. O(1)
 *
 *
 * T.C - O((n-k)*(k))
 *
 *
 *
 * Better Approach:
 *
 * arr = [1,5,2,3,4], k = 3
 *
 * Useful elements - Elements that can be maximum of some window
 * Deque -> Doubly ended queue (insertion/deletion at front + rear)
 *
 * Array class is good deque
 * front -> shift/unshift
 * rear -> push/pop
 *
 * the front of the deque always point to the maximum
 *
 * window     deque   output for curr wind
 * [1,5,2] -> [5,2] ->        5
 * [5,2,3] -> [5,3] ->        5
 * [2,3,4] -> [3] ->          4
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
 *
 *
 *
 *
 *
 *
 *
 *
 * * [2,3,4] -> [4]   ->        4
,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 *
 *
 *
 *
 *
 *
 *
 * Worked Out Example -
 *
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 *
 * Let's consider all windows of size k -
 *
 * i = 4
 * q = [4,]
 * res = [3, 3, 5]
 * i-k = 1
 * nums[i] = 3
 *
 *  [1,3,-1]
 *    [3,-1,-3]
 *       [-1,-3,5]
 *          [-3,5,3]
 *             [5,3,6]
 *                [3,6,7]
 */

var maxSlidingWindowNaive = function (nums, k) {};
var maxSlidingWindow = function (nums, k) {
  // deque
  const q = []; // stores *indices*
  // final output
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // while deque is not empty and there are smaller elements in your deque
    // remove them
    // nums[i] is being considered right now
    while (q.length !== 0 && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    // add the new element in the deque
    q.push(i);
    // remove first element if it's outside the window
    if (q[0] === i - k) {
      q.shift();
    }
    // if window has k elements add to results
    // (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }
  return res;
};

// https://forms.gle/1jHJnjRSXd6SWGbe6
