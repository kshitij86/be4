/**
 *
 * k = 2*(10^9)
 * If you make that many rotations, you will get TLE
 * 
 * 
 * if len < k
 * then you can replace k by k % len
 *
 * len = 3, k = 4
 * rotate - 1 == rotate - 4
 *
 * k = k % len  
 * 
 * 1 % 3 = 1
 * 4 % 3 = 1
 * 7 % 3 = 1
 * 10 % 3 = 1
 *
 * If you to do only one rotation, to the right
 *
 * head -> 1 -> 2 -> 3 -> 4 -> [x]
 *       head
 *       2000               3000
 * [2, addressNext] -> [1,addressNext]->
 *
 * In a linked list question, the node value does not matter.
 *last            temp
 *  4 ->  1 -> 2 -> 3 -> [x]
 *head
   
 
   Algo to make one rotation right

 * 1. Traverse the linked list, and get ref to the second last node(temp)
 * 2. store a reference to the last node (let last = temp.next)
 * 3. Make second last node (temp), point to null (temp.next = null)
 * 4. Make the last node point to head node (last.next = head)
 * 5. Make the head pointer equal to last pointer (head = last)
 * 6. Return the head
 * 
 * 
 * Apply this operation k times to the list and return the head
 * 
 * while(k-- > 0){
 *  head = rotateRight(head);
 * }
 * return head;
 *
 * 
 * len = 2
 * 1 -> 2
 * 
 * k = 1 (len > k)
 * 2 -> 1
 * 
 * k = 3 (len < k) (3 % 2 = 1) (no need to go for 3 rotations)
 * 2 -> 1 (1st rot) 
 * 1 -> 2 (2nd rot)
 * 2 -> 1 (3rd rot)
 * 
 * It follows circular structure.
 * If len < k, you can just do k%len rotations.
 * 
 * 0 <= k%len <= len-1
 * 
 * len = 5
 * k = 2
 * original: 1 -> 2 -> 3 -> 4 -> 5 -> [x]
 * 
 * rotate - 1 : 5 -> 1 -> 2 -> 3 -> 4 -> [x]
 * rotate - 2 : 4 -> 5 -> 1 -> 2 -> 3 -> [x]
 * 
 * After k rotations, the last k nodes, come to the front.
 * p2  last head       p1           
 * 4 -> 5 -> 1 -> 2 -> 3 -> [x]
 * 
 *           
 * k = 2
 *      last             p1                                            
 *  4 -> 5 -> 1 -> 2 -> 3 -> [x]       
 * 
 *     p1
 * 1,2,3,4,5
 * len = 5, k = 2   
 * k = len - k
 * k = 5 - 2                           
 *
 * p1.next = null;
 * last.next = head;
 * 
 *  k 
 *  find these pointers: 
 *   p1, the node before last k nodes
 *   p2, the head of the new ll
 *   last, the last node of the list
 *   head, the first node of the list
 * 
 * 
 * 
 * 
 *
 */

var rotateRight = function (head, k) {
  var rotateOnce = function (head) {
    // if the linked list has <2 nodes, rotation is not needed
    if (head == null || head.next == null) {
      return head;
    }

    let temp = head;
    while (temp.next.next != null) {
      // go to the second last node
      temp = temp.next;
    }
    // temp will now point to second last node
    let last = temp.next;
    temp.next = null;
    last.next = head;

    // head of the new list
    return last;
  };
  let f = head;
  let len = 0;
  // length of list
  while (f != null) {
    len++;
    f = f.next;
  }
  k = k % len;
  for (let i = 0; i < k; i++) {
    head = rotateOnce(head);
  }
  return head;
};

var rotateOptimal = function (head, k) {
  // edge cases - [0, 500]
  // []
  // [1] -> [x]
  // k == 0, no rotations
  // 0 <= k <= 2 billion
  if (head == null || head.next == null || k == 0) {
    return head;
  }
  let curr = head;
  let len = 1;
  // finding length of the list
  while (curr.next !== null) {
    len++;
    curr = curr.next;
  }

  // make the list circular
  curr.next = head;
  k = k % len;
  // find the position of p1
  k = len - k;
  while (k-- > 0) {
    curr = curr.next;
  }
  head = curr.next;
  curr.next = null;
  return head;
};
