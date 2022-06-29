/**
 * Sort the triplet
 *
 * Given a linked list with nodes having values, 0,1 and 2.
 * Your task would be to sort the linked list
 * i.e. the sorted list should contain all the 0 data nodes
 * to the head of the linked list, 2 towards the tail of the linked list and 1 in the middle of the list.
 *
 *
 * Input:
 * 1,2,2,2,1,1,0,0,1,2
 * Output:
 * 0,0,1,1,1,1,2,2,2,2
 *
 */
function sortTriplet(head) {
  let sp = head;
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  //Count the number of each item
  while (sp) {
    if (sp.data === 0) zeroCount++;
    else if (sp.data === 1) oneCount++;
    else twoCount++;
    sp = sp.next;
  }
  //Set the pointer to head node
  let curr = head;
  //Update the first zeroCount nodes with value 0
  BED - Class;
  while (zeroCount > 0) {
    curr.data = 0;
    curr = curr.next;
    zeroCount--;
  }
  //Update the next oneCount nodes with value 1
  while (oneCount > 0) {
    curr.data = 1;
    curr = curr.next;
    oneCount--;
  }
  //Update the remaining twoCount node with value 2
  while (twoCount > 0) {
    curr.data = 2;
    curr = curr.next;
    twoCount--;
  }
}
