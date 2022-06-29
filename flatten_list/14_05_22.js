/**
 * Flattening a Linked List
 *
 * Given a singly Linked List of size N, where every node represents a
 * sub-linked-list and contains two pointers:
 * (i) a next pointer to the next node,
 * (ii) a bottom pointer to a linked list where this node is head.
 *
 * [1] -> [56] -> [x] [MAIN LIST]
 *  |      |
 * [2]    [67]
 *  |      |
 * [3]   [100]
 *  |
 * [4]
 *
 * [BOTTOM LIST]
 *
 * After flattening (merge all lists into sorted):
 * [1] -> [2] -> [3] -> [4] -> [56] -> [67] -> [100]
 *
 * {
 *   data: 45,
 *   next: nextNode,
 *   bottom: is the pointer to another linked list
 * }
 *
 *
 * Each of the sub-linked-list is in sorted order.
 * Flatten the Link List such that all the nodes appear in
 * a single level while maintaining the sorted order.
 * Note: The flattened list will be printed using the bottom pointer instead of next pointer.
 *
 *
 *
 * Your Task:
 * You do not need to read input or print anything.
 * Complete the function flatten() that takes the head of
 * the linked list as input parameter and returns the head of flattened link list.
 *
 *
 * Constraints:
 * 0 <= N <= 50
 * 1 <= Mi <= 20
 * 1 <= Element of linked list <= 10^3
 *
 *
 * Expected Time Complexity: O(N*N*M)
 * Expected Auxiliary Space: O(1)
 *
 *
 * Observation:
 * 1. We should the bottom pointer.
 * 2. The list can be empty.
 * 3. Maintain soretd order also.
 *
 *
 *
 * Input:
 * 5 -> 10 -> 19 -> 28
 * |     |     |     |
 * 7     20    22   35
 * |           |     |
 * 8          50    40
 * |                 |
 * 30               45
 *
 *
 *
 * Output:  5-> 7-> 8-> 10 -> 19-> 20-> 22-> 28-> 30-> 35-> 40-> 45-> 50.
 * Explanation:
 * The resultant linked lists has every
 * node in a single level.
 * (Note: | represents the bottom pointer.)
 *
 * HOW THE LIST WILL PRINTED IN THE DRIVER CODE:
 * let temp = head;
 * while(temp !== null){
 *      console.log(temp.data);
 *      temp = temp.bottom;
 * }
 *
 *
 *
 * Input:
 * 5 -> 10 -> 19 -> 28
 * |    |     |     |
 * 7   20     22    31
 * |          |
 * 8          50
 * |
 * 30
 * Output: 5->7->8->10->19->20->22->28->30->31->50
 * Explanation:
 * The resultant linked lists has every
 * node in a single level.
 *
 *           p1
 *  5, 7, 8, 30
 *  10, 20, [x]
 *          p2
 *  [5, 7, 8, 10, 20, 30]
 *
 *
 * HOW THIS LIST CAN BE TRAVERSED:
 *
 *  while(temp.next !== null)
 *      1. make new bottom pointer (btm) and do btm.next
 *      2. keep mering lists until end
 *
 * ALGORITHM TO FLATTEN THE LINKED LIST:
 * 1. Create a new node, with some dummy data (0). (let res = new Node(0);)
 * 2. Traverse the main list until you reach the second last node (temp.next.next !== null)
 * 3. Merge the second last list with the last list.
 * 4. Call it for the list before current.
 * 5. Repeat until all lists are merged.
 * 6. Return the head of the new list.
 *
 *
 *
 *
 *
 *
 *
 * Example:
 *      a    b
 * 1 -> 2 -> 3 -> [x]
 * |    |    |
 * 5    6    7 <
 *      |
 *   > [x]
 * 
 * 
 * 
 * flatten(1)
 *    |           
 * [1].next = [2] 
               |
              [3] 
               |
              [6] 
               |
              [7] temp
                 
                 
    mergeLists([1], [2])

    [1]
     |
    [2]
     |
    [3]
     |
    [5]

 */

function flatten(head) {
  function mergeLists(a, b) {
    let res = new Node(0),
      temp = res;
    // temp is to traverse the list

    // merge procedure
    while (a !== null && b !== null) {
      if (a.data < b.data) {
        // sorted order needs to be maintained
        temp.bottom = a;
        temp = temp.bottom;
        a = a.bottom;
      } else {
        temp.bottom = b;
        temp = temp.bottom;
        b = b.bottom;
      }
    }
    if (a !== null) {
      temp.bottom = a;
    } else {
      temp.bottom = b;
    }
    return res.bottom;
  }

  // base cases/anchor condition
  /**
   * [1] -> [x]
   *  |
   * [2]
   *
   */
  if (head === null || head.next === null) {
    return head;
  }

  // recursive call
  head.next = this.flatten(head.next);
  head = mergeLists(head, head.next);
  return head;
}
