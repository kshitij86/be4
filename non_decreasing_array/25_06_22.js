/**
 * Non-decreasing Array (Medium)
 *
 * Given an array nums with n integers,
 * your task is to check if it could become a
 * non-decreasing array by modifying (change it to any other integer)
 * at most one element (zero or one element).
 *
 * Output -> true/false
 *
 * We define an array is non-decreasing
 * if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
 *
 *
 * Let's first consider only distinct elements:
 * nums = [1,2,3,4,5] (increasing) (nums[i] < nums[i+1], for i = 0 to n-1)
 * nums = [5,4,3,2,1] (decreasing) (nums[i] > nums[i+1], for i = 0 to n-1)
 *
 * What of duplicates are allowed?
 * nums = [1,2,3,3,5] (non-decreasing) (nums[i] <= nums[i+1], for i = 0 to n-1)
 *
 *      _ _ _ /
 *    /
 *   /
 *  /
 *
 *
 *nums = [5,5,3,2,1] (non-increasing) (nums[i] => nums[i+1], for i = 0 to n-1)
 *
 *
 * \----
 *       \
 *        \
 *         \
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
 * n == nums.length
 * 1 <= n <= 10^4
 * -10^5 <= nums[i] <= 10^5
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
 * Example 1:
 * Input: nums = [4,2,3]
 * Output: true
 *
 *
 * Inversion:
 * nums[i] > nums[i+1]
 *
 *  0 1
 * [4,2,3] -> [0,2,3]
 *         -> [1,2,3]
 *         -> [2,2,3]
 *          or pick negatives
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
 * Example 2:
 * Input: nums = [4,2,1] (non-increasing/decreasing)
 * Output: false
 *
 *
 * [4,2,1]
 *
 * nums[0] = nums[1]
 * [2,2,1], changed = true
 *
 *
 * i = 1
 * let changed = false;
 *
 *
 *
 * for i=0; i<nums.length-1; i++
 *     if(nums[i] > nums[i+1] && changed !== true){
 *          nums[i] = nums[i+1];
 *          changed = true;
 *      }
 *      if(nums[i] > nums[i+1] && changed === true){
 *          return false;
 *      }
 *
 *
 * [4,2,1] -> change 4
 *            [2,2,1]
 *          -> change 2
 *             [4,0,1]
 *
 *
 *
 *
 *
 *
 *
 * Example 3:
 * Input: nums = [3,9,1]
 * Output: true
 *
 *
 * [5,6,6]
 *
 *
 * [3,9,1] -> change 3
 *            [0,9,1]
 *         -> change 9
 *            []
 *            i = 2
 *            nums[i-1] > nums[i]
 *            nums[i-2] > nums[i]
 *            nums[i-2] < nums[i-1]
 *          -> change 1
 *              [3,9,9]
 *
 *
 *
 *
 *
 *
 *
 *
 * Cases:
 * If for all i, nums[i] <= nums[i+1], zero operations are needed.
 * Otherwise one or operations are needed
 *      1. [1,4,1] -> [1,1,1]
 *          If you are dealing with nums[i] and nums[i+1], make sure not to disturb
 *          nums[i-1].
 *
 * Approach:
 * 1. Iterate over the array (i = 0 to nums.length-1), and try to check.
 * 2. if(nums[i] > nums[i+1] && changed !== true)
 *          modify and set changed
 * 3. if(nums[i] > nums[i+1] && changed === true)
 *          return false
 *
 *
 *
 *
 *
 * Example 4:
 * Input: nums = [3,2,3,4]
 * Output:
 *
 * i = 0
 * changed = false
 * [2,2,3,4]
 *
 *
 * i = 1
 * changed = true
 * [2,2,3,4]
 *
 *
 *  i = 2
 * changed = true
 * [2,2,3,4]
 *
 *
 */

var checkPossibility = function (nums) {
  let changed = false;
  // iterate until the second last element
  for (let i = 0; i < nums.length - 1; i++) {
    // if already non-decreasing, do nothing
    if (nums[i] <= nums[i + 1]) {
      continue;
    }
    // if there is an inversion in the array and there needs to be amodification
    // but one element is already modified
    if (changed === true) {
      return false;
    }
    // check if
    // [1,1,1], changed = false, i = 1
    if (i == 0 || nums[i + 1] >= nums[i - 1]) {
      nums[i] = nums[i + 1];
    } else {
      // [2,2]
      nums[i + 1] = nums[i];
    }
    changed = true;
  }
  return true;
};

// https://forms.gle/1jHJnjRSXd6SWGbe6
