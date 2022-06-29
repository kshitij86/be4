/**
 * Intersection Point in Y Shaped Linked Lists
 * (https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1/#)
 * 
 * Given two singly linked lists of size N and M,
 * write a program to get the point 
 * where two linked lists intersect each other.
 * 
 * 
 * Your Task:
 * You don't need to read input or print anything. 
 * The task is to complete the function intersectPoint() 
 * which takes the pointer to the head of linklist1(head1) and linklist2(head2) 
 * as input parameters and returns data value of a node where two linked lists intersect. 
 * If linked list do not merge at any point, then it should return -1.
 * Challenge : Try to solve the problem without using any extra space.
 * 
 * l1: 1->2->3->4
 * l2: 2->3->4
 * 
 * [1, nextAddress]
 * 
 * 
 * Observations: 
 * 1. The linked lists may have different sizes.
 * 2. We are given two heads, head1 and head2
 * 3. Return the data value
 * 
 * 
 * 
 * 
 *
 * Input:
 * LinkList1 = 3->6->9->common
 * LinkList2 = 10->common
 * common = 15->30->NULL
 * Output: 15
 * (common) is a sublist which is common to both lists
 * 
 * l1: 3->6->9->15->30->NULL
 * l2: 10->
 * 
 * 
 * 
 * Input: 
 * Linked List 1 = 4->1->common
 * Linked List 2 = 5->6->1->common
 * common = 8->4->5->NULL
 * Output: 8
 * (common) is a sublist which is common to both lists
 * 
 * 
 * Explanation: 

4              5
|              |
1              6
 \             /
  8   -----  1 
   |
   4
   |
  5
  |
  NULL   
 *

    // this can be a bit slow
    let temp = head1; 
    let len1 = 0;
    while(temp != null){
        len1++;
        temp = temp.next;
    }

    temp = head2;
    let len2 = 0;
    while(temp != null){
        len2++;
        temp = temp.next;
    }
    let h1 = head1, h2 = head2;
    // decide the longer list
    if(len1 > len2){
        let count = len1 - len2;
        while(count--){
            h1 = h1.next;
        }
    } else {    
        // len(l1) < len(l2)
        //  len(l1) == len(l2) - in this case, while loop will not run
        let count = len2 - len1;
        while(count--){
            h2 = h2.next;
        }
    }

    // actual traverse
  
    while(h1 !== null || h2 !== null){
        if(h1.next === h2.next){
            return h1.next.data;
        }
        h1 = h1.next;
        h2 = h2.next;
    }    
    return -1;

    How to change the pointers to traverse and have same length:
    
    len(l1) > len(l2)
    len(l1) < len(l2)
    len(l1) == len(l2)

            h1
    5-> 6 -> 1   
                8 -> 4 -> 5 -> [x] 
    4 -> 1           
        h2

         len1 = 6; len2 = 5;
    (len1 - len2) = 1

    1. Before you traverse the lists check if they are of different lengths
    2. If thaey are different, then move the pointer of the longer list, (lenLong - lenShort) times
       forward
-----------------------------------------------------------------------------------------------------

    Alternative approach - 
    2 loops

    1. Traverse the first list and make all the next pointers of all nodes as null.
        (disconnect the entire list)
    2. Traverse the second list and go to the last node.
    3. Return the data value of the last node


    If there is no arrow, there is no connection

               
    8.next = null
    return h2.data;
    5  6   1           h1          
                8  4   5 -> [x] 
    4 -> 1      h2      
                 
   





 * 
 * 
 */
//       h1
// 1  2   3
// prev = 2
// head1 = 3

function intersectPoint(head1, head2) {
  // step 1
  // disconnect first list
  let prev = null;
  while (head1 !== null) {
    prev = head1;
    head1 = head1.next;
    prev.next = null;
  }

  while (head2.next !== null) {
    head2 = head2.next;
  }
  return head2.data;
}
