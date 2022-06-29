/**
 * Copy Linked List with Random Pointer
 * (https://leetcode.com/problems/copy-list-with-random-pointer/)
 *
 * A linked list of length n is given
 * such that each node contains an additional random pointer,
 * which could point to any node in the list, or null.
 *
 * {
 *   data = 3,
 *   next = next_node,
 *   random = any_node/null
 * }
 *
 * OLD - 1->2->3->4
 * NEW - 1->2->3->4
 *
 *
 * the list that is given -> OLD
 * the list that we will construct/deep copy -> NEW
 *
 * Construct a deep copy (clone the list) of the list.
 *
 * 1. The deep copy should consist of exactly n brand new nodes,
 * where each new node has its value set to the value of
 * its corresponding original node.
 *
 * 2. Both the next and random pointer of the new nodes should point to
 * new nodes in the copied list such that the pointers in the
 * original list and copied list represent the same list state. (*)
 *
 * 3. None of the pointers in the new list should point to nodes in the original list.
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
 * Brute force solution -
 *
 * How would you do this if there was no random pointer?
 *
 * 1->2->3->4
 * [1]->[2]->[3]->[4]->null
 *
 * When setting the random pointer,
 * you will not be able to set it if the node is
 * not created.
 *
 * We can start by storing the nodes in a pair like (original node, new node)
 * And then traverse the list and assign pointers using the key value pair.
 *
 * The random pointers are also there
 * OLD: 1->2->3->4
 * NEW: 1  2  3  4
 *
 * [1] !== [1]
 *
 * obj = {next: 4}
 * obj.next = 4
 *
 *
 * {}
 *
 *
 * I have to point the new nodes to the new nodes
 * obj =  {
 *        OLD     NEW
 *   [1, 1000, ]: [1, null],
 *   [2, 3000]: [2, null],
 * }
 *           0         1000          3000
 * OLD: [1, 1000] -> [2, 3000] -> [3,  ] -> [x]
 * NEW: [1, null] [2, null]  [3, null]
 *           70          2500         4500
 *
 * Psuedo code -
 * let temp = head;
 *
 *
 *
 * while(temp !== null){
 *   // next
 *   obj[temp].next = obj[temp.next];
 *   // random
 *   obj[temp].random = obj[temp.random];
 *   temp = temp.next;
 * }
 *
 *
 *
 * one disadvantage can be that we need extra storage,
 * we need the object/hashmap to store the nodes
 *
 *
 * O(N) + O(N) = O(N)
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

function node(data, next, random) {
  this.data = data;
  this.next = next;
  this.random = random;
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

var copyRandomListBrute = function (head) {
  let hashmap = new Map(),
    dummy = {},
    curr = head,
    copy = dummy;
  while (curr) {
    // create a new disconnected node
    let newNode = new Node(curr.val, null, null);
    // set its value in hashmap with a pair like - (old node, new node)
    hashmap.set(curr, newNode);
    copy.next = newNode;
    copy = newNode;
    // traverse the linked list
    curr = curr.next;
  }
  (curr = head), (copy = dummy.next);
  while (curr) {
    // copy all the random pointers
    copy.random = hashmap.get(curr.random);
    // move in the old list
    curr = curr.next;
    // move ahead in the new list
    copy = copy.next;
  }
  return dummy.next;
};

var copyRandomList = function (head) {
  // first modify the old linked list
  let temp = head;
  let front = head;
  while (temp != null) {
    front = temp.next;
    let copy = new Node(temp.data, null, null);
    temp.next = copy;
    copy.next = front;
    temp = front;
  }

  // Assign random pointers for the copy nodes
  temp = head;
  while (temp != null) {
    if (temp.random !== null) {
      temp.next.random = temp.random.next;
    }
    temp = temp.next.next;
  }

  // Restore the original list, and extract the copy list
  temp = head;
  let pseudoHead = new Node(0, null, null);
  let copy = pseudoHead;

  while (temp !== null) {
    front = temp.next.next;

    // extract the copy
    copy.next = temp.next;

    // restore the original list
    temp.next = front;
    copy = copy.next;
    temp = front;
  }
  return pseudoHead.next;
};

/**
 * next sequence
 * 1 -> 2 -> 3
 *
 * random sequence
 * 1 -> null
 * 2 -> 1
 * 3 -> null
 */

//creating all the nodes
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

// I have the reference of all the nodes
// So I can point to any node in the list
head.random = null;
head.next.random = head;
head.next.next.random = null;
