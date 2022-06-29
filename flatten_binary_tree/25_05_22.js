/**
 * Flatten Binary Tree to Linked List
 *
 * Given the root of a binary tree, flatten the tree into a "linked list":
 *
 * 1. The "linked list" should use the same TreeNode class
 *  where the right child pointer points to the next node
 *  in the list and the left child pointer is always null.
 *
 *
 * 2. The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 *
 *
 *
 *
 *
 *
 *                                      [1]       -> [1]
 *                                     /   \          \
 *                                         [3]        [3]
 *                                         /  \         \
 *                                        [4] [5]        [4]
 *                                        /                \
 *                                       [6]               [6]
 *                                                           \
 *                                                            [5]
 *
 * PREORDER - (root, left, right)
 *
 * 1. In preorder, when we get root, go to next node and modify.
 *    This idea is a bit dangerous because if you modify the tree, while doing traversal,
 *    some nodes may be lost.
 *
 *    To avoid this, let's store the preorder traversal in an array/data structure.
 *    arr = [1,2,3]
 *
 *     O(N)
 *
 * 2. You can create any number of TreeNode nodes.
 *    You don't care about existing structure of the tree
 *
 *
 *                 root       [1]
 *                            /   \
 *                           [2]  [3]
 *
 *
 *  preorder(root, arr);
 *  preorder_arr = [1, 2, 3]
 *         0  1  2
 *
 *
 *
 *   root
 *   [1]   i=0
 *   /  \
 *      [2] i=1
 *      / \temp
 *         [3] i=2
 *
 *  Iterate the array && keep modifying the tree
 *  let temp = root;
 *  for(let i=0; i<n-1; i++){
 *     temp.right = new TreeNode(arr[i+1]);
 *     temp.left = null;
 *     temp = temp.right; // temp = temp.next
 *  }
 *
 * Root is still the same but the temp is used to modify the tree into a linked list.
 *
 *
 * Just return from the function.
 *
 */

let flatten = function (root) {
  // nothing to do
  // tree is empty -> [0, 2000]
  if (root === null) {
    return;
  }
  let preorder_arr = [];

  // Step - 1
  // recursive function to perform pre order traversal
  let preOrder = function (root) {
    if (root === null) {
      return;
    }
    preorder_arr.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };

  // add values to preorder_arr
  preOrder(root);
  //   preorder_arr = [1,2,3]

  // Iterate the array && keep modifying the tree
  // Do I need to modify the root
  // [1]             -> [1] -> [2] -> [3]
  // / \
  //[2] [3]

  // Step - 2
  // TODO: May not be needed
  //   root.val = preorder_arr[0];
  // create the temp pointer
  let temp = root;
  for (let i = 0; i < preorder_arr.length - 1; i++) {
    temp.left = null;
    temp.right = new TreeNode(preorder_arr[i + 1]);
    temp = temp.right;
  }
};

// https://docs.google.com/forms/u/1/d/e/1FAIpQLScL1wwQGYM37fw9pQC014VIzYwXWnUC6ZKn6W9Ea27SEWVY1w/viewform?usp=send_form
