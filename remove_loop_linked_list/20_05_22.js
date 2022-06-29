/**
 * Linked List Cycle II
 *
 * Given the head of a linked list, return the node where the cycle begins.
 * If there is no cycle, return null.
 *
 * There is a cycle in a linked list if
 * there is some node in the list that can be reached again by continuously following the next pointer.
 *
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed).
 * It is -1 if there is no cycle. Note that pos is not passed as a parameter.
 * Do not modify the linked list.
 *
 * Input - 1
 *
 *                 fast
 *                 slow
 *  head
 *   3 -> 2 -> 0 -> 4 ->
 *        |            |
 *         ------------
 *
 *  ds = [[3, nextAddress], [2, nextAddress], [0, nextAddress], [4, nextAddress]]
 *
 *
 * 1. There may not be a cycle, or there maybe - we need to make sure if there
 *    is a cycle.
 * 2. If there is no cycle, return null.
 * 3. Else, run algorithm to return first node of cycle.
 *
 *
 * Naive approach - (for 1 step)
 *
 * 1 -> 2 -> 3 -> 4 -> [x]
 *
 * Keeping a track of nodes that you have visited, and if you ever visit a previously
 * visited node, a cycle is guaranteed
 *
 * O(N) extra space
 *
 *
 * Two pointer approach -
 * 1. Maintain two pointers, fast and slow (both start at head)
 * 2. fast will move twice the speed of slow
 *   If you move slow by one position (slow = slow.next)
 *   Then fast will move by two positions
 * 3. if fast === slow at any step, return true
 * 4. return false;
 *
 *
 *
 *
 * run algorithm to return first node of cycle.
 *
 *
 *
 *                    fast
 *      slow
 *  head
 *   3 -> 2 -> 0 -> 4 ->
 *        |            |
 *         ------------
 *
 *
 * 1. Remove slow and place it at the head of the linked list (fast is still there)
 * 2. Then move slow and fast one node to the right
 * 3. Wherever these slow and fast meet, is the fisrt node of the cycle.
 *
 *
 *
 *
 * Input - 2
 *
 *                       s
 *                       f
 *  head
 *   1 -> 2 -> 3 -> 4 -> 5
 *             |         |
 *              ----------
 *
 *
 *
 */

// Detect loop starting position using Floyd's algorithm
// Move slow pointer to beginning of the list and keep fast at meeting point

var detectCycle = function (head) {
  // [0, 10^4]
  // base cases
  if (head == null || head.next == null) {
    return null;
  }
  // initialize slow and fast pointers
  let slow = head;
  let fast = head;
  function hasCycle(head) {
    // until you are at last node or second last node
    while (fast !== null && fast.next !== null) {
      slow = slow.next; //  1 place
      fast = fast.next.next; // 2 places
      if (slow == fast) return true; // if they point to same, there is a cycle
    }
    // there is no cycle
    return false;
  }

  // store true if there is a cycle, and false otherwise
  let cyclePresent = hasCycle(head);
  if (!cyclePresent) return null; // no cycle return
  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

// https://forms.gle/1jHJnjRSXd6SWGbe6

function maxProduct(arr, n) {
  if (n < 2) {
    console.log("No pairs exists" + "<br>");
    return;
  }

  let a = arr[0],
    b = arr[1];

  for (let i = 0; i < n; i++) {
    console.log("i: " + i);
    for (let j = i + 1; j < n; j++) {
      console.log("j: " + j);
      if (arr[i] * arr[j] > a * b) (a = arr[i]), (b = arr[j]);
      // console.log(a * b);
    }
  }
  console.log(a * b);
}

let arr = [1, 2, 3, 9];
let n = arr.length;
maxProduct(arr, n);
