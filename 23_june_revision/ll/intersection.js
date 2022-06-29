/**
 * Intersection in Linked Lists
 *
 * Given two linked list, with unique nodes value independently,
 * you need to write a program that take in two list and return the
 * linked with the intersecting nodes.
 * Note: The order of the nodes in the intersecting list should be maintained as that of the actual list 1
 */
function isPresent(head, data) {
  let temp = head;
  while (temp != null) {
    if (temp.data == data) return true;
    temp = temp.next;
  }
  return false;
}
function getIntersection(head1, head2, result) {
  let temp = head1;
  BED - Class;
  while (temp != null) {
    if (isPresent(head2, temp.data)) {
      let node = new Node(temp.data);

      result.addNode(node);
    }
    temp = temp.next;
  }
}
