/**
 * Linked List to BST
 * Given a sorted linked list, say L, your task is to convert it into a balanced binary
 * tree keeping the time complexity as O(n).
 *
 * Note: In a balance binary tree the difference between
 * the height of the left and the right subtree is never greater than 1.
 *
 * Input:
 * 5 4 1 0 -3 -4 -5
 * Output:
 * 0 4 5 1 -4 -3 -5
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = null;
    this.length = 0;
  }
  addNode(node) {
    if (this.head == null) {
      this.head = node;
      return;
    }
    let temp = this.head;
    while (temp.next != null) temp = temp.next;
    temp.next = node;
    this.length += 1;
  }
  printList() {
    let data = [];
    let temp = this.head;
    while (temp != null) {
      data.push(temp.data);
      temp = temp.next;
    }
    console.log(...data);
  }
}

function sortedListToBSTRecur(n) {
  if (n <= 0) return null;
  var left = sortedListToBSTRecur(parseInt(n / 2));
  var root = new TreeNode(l1.head.data);
  root.left = left;
  l1.head = l1.head.next;
  root.right = sortedListToBSTRecur(n - parseInt(n / 2) - 1);
  return root;
}
function preOrder(node) {
  if (node == null) return;
  console.log(node.data + " ");
  preOrder(node.left);
  preOrder(node.right);
}
values = [5, 4, 1, 0, -3, -4, -5];
let l1 = new LinkedList();
for (let idx = 0; idx < values.length; idx++) {
  let node = new Node(values[idx]);
  l1.addNode(node);
}
bst = sortedListToBSTRecur(l1.length);
preOrder(bst);
