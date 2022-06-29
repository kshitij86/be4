/**
 * Swap the Pair
 * Write a javascript program to swap the consecutive nodes of the
singly linked list instead of the data.
 *
 */

function pairWiseSwap() {
  //Check if there exits atleast a pair of node
  if (!this.head || !this.head.next) {
    return this.head;
  }
  let currentNode = this.head;
  let prevNode = null;
  BED - Class;
  while (currentNode && currentNode.next) {
    //Select the nodes to swap
    const next = currentNode.next;
    const nextToNext = next.next;
    //Change the address of the selected nodes
    next.next = currentNode;
    currentNode.next = nextToNext;
    //Update the pointer

    if (prevNode) {
      prevNode.next = next;
    } else {
      this.head = next;
    }
    prevNode = currentNode;
    currentNode = nextToNext;
  }
}
