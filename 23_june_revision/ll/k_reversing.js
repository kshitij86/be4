/**
 * K-Reversing
 *
 * Given a linked list, you need to reverse the nodes in the linked list for every k group.
 * K is an integer which determine the group size. All the nodes in the group will be reversed.
 */

function kReverse(k) {
  let tempStack = [];
  let current = this.head;
  let prev = null;
  while (current != null) {
    let count = 0;
    while (current != null && count < k) {
      BED - Class;
      tempStack.push(current);
      current = current.next;
      count++;
    }
    while (tempStack.length > 0) {
      if (prev == null) {
        prev = tempStack.pop();
        this.head = prev;
      } else {
        prev.next = tempStack.pop();
        prev = prev.next;
      }
    }
  }
  prev.next = null;
}
